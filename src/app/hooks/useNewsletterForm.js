import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * Custom hook to manage the state and logic of a newsletter subscription form.
 * 
 * This hook handles the form's visibility, input state, client-side validation, 
 * submission (both static and dynamic modes), error handling, and loading indicators.
 * 
 * @returns {object} - Methods and state variables for managing the newsletter form.
 */
function useNewsletterForm() {
    // State variables
    const [displayForm, setDisplayForm] = useState(false); // Controls form visibility
    const [results, setResults] = useState({ name: '', city: '', email: '' }); // Form input values
    const [errors, setErrors] = useState({ name: '', city: '', email: '' }); // Validation errors
    const [errorServer, setErrorServer] = useState(null); // Server error messages
    const [confirmation, setConfirmation] = useState(false); // Confirmation status
    const [loading, setLoading] = useState(false); // Loading indicator during form submission

    const initialFormState = { name: '', city: '', email: '' }; // Default state for resetting the form

    /**
     * Toggles the visibility of the newsletter form.
     * - Resets error messages and form inputs when the form is closed.
     * - Clears server errors when reopening the form.
     */
    const toggleNewsletterForm = () => {
        if(!displayForm) setErrorServer(null);

        if(displayForm){
            setResults(initialFormState)
            setErrors(initialFormState)
        }
        setDisplayForm((prevDisplayForm) => !prevDisplayForm);
    };

    /**
     * Handles changes in input fields.
     * Updates the corresponding field in the `results` state based on input name and value.
     * 
     * @param {object} e - The input change event object.
     */
    const handleInputChange = (e) => {
        const { name, value } = e.target; // Extract input name and value
        setResults((prevResults) => ({
            ...prevResults,
            [name]: value // Dynamically update the field (name, city or email)
        }));
    };

    /**
     * Validates the form inputs on the client side.
     * - Checks for required fields.
     * - Ensures `name` and `city` contain only letters.
     * - Validates email format.
     * 
     * @returns {boolean} - Returns `true` if the form is valid, otherwise `false`.
     */
    const validateForm = () => {
        let isValid = true; // Tracks overall form validity
        let newErrors = initialFormState; //Initializing object with no errors

        // Validate name
        if (!results.name.trim()) {
            newErrors.name = "Name is required.";
            isValid = false;
        } else if(!/^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/.test(results.name)){
            newErrors.name = "Please enter a valid name";
            isValid = false;
        }

        // Validate city
        if (!results.city.trim()) {
            newErrors.city = "City is required.";
            isValid = false;
        } else if(!/^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/.test(results.city)){
            newErrors.city = "Please enter a valid city";
            isValid = false;
        }

        // Validate email
        if (!results.email.trim()) {
            newErrors.email = "Email is required.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(results.email)) {
            newErrors.email = "Please enter a valid email address.";
            isValid = false;
        }

        setErrors(newErrors); // Update the error state with the potentials errors found 
        return isValid;
    }

    /**
     * Handles form submission.
     * - Validates the form before submission.
     * - Simulates waiting for the static version.
     * - Sends a POST request for the dynamic version.
     * - Manages loading, confirmation and error states during the submission process.
     * 
     * @param {object} e - The form submission event object.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form before submission
        if (!validateForm()) {
            return; // Stop submission if validation fails
        }

        const isStaticVersion = process.env.NEXT_PUBLIC_STATIC_VERSION === "true";

        if (isStaticVersion) {
            // Simulate a waiting period for static mode     
            const simulateWaitingTime = async () => {
                setLoading(true); 
                setTimeout(() => {
                    // Simulate a delay of 1 second, then reset form inputs, display a confirmation and hide the form
                    setResults(initialFormState);
                    setLoading(false);
                    setConfirmation(true); 
                    setDisplayForm(false);
                }, 1000);
            }
            await simulateWaitingTime();
                 
        } else {
            // Handle dynamic mode (server communication)
            try {
                setLoading(true);
                setErrorServer(null); // Clear previous server errors

                // Send form data to the server
                const response = await axios.post('http://localhost:5050/newsletter/add', results);

                //Reset form inputs, hide form, and display a confirmation message
                setResults(initialFormState);
                setDisplayForm(false);
                setConfirmation(true);
            } catch (error) {
                // Capture and set server error messages
                setErrorServer(error.response ? error.response.data : error.message);
            }
            setLoading(false);
        }
    };

    return {
        displayForm,
        errors,
        errorServer,
        loading,
        confirmation,
        toggleNewsletterForm,
        handleInputChange,
        handleSubmit
    };
}

export default useNewsletterForm;