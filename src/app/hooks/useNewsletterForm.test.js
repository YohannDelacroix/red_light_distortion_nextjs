import React from 'react';
import { act, renderHook } from '@testing-library/react';
import useNewsletterForm from '@/app/hooks/useNewsletterForm';
import axios from 'axios';
jest.mock("axios");

describe("useNewsletterForm", () => {
    const resultSample = {
        name: "Jean-Hugues De La Fontaine",
        city: "Frankfurt-am-Main",
        email: "jhdl.fontaine@supermail.com",
    };

    it('should initialize the state correctly', () => {
        const { result } = renderHook(() => useNewsletterForm());

        expect(result.current.displayForm).toBe(false);
        expect(result.current.results).toEqual({ name: "", city: "", email: "" });
        expect(result.current.errors).toEqual({ name: '', city: '', email: '' });
        expect(result.current.errorServer).toBeNull();
        expect(result.current.confirmation).toBe(false);
        expect(result.current.loading).toBe(false);
    });

    it('should handle input changes and form validation', async () => {
        // Initializing hook with render
        const { result } = renderHook(() => useNewsletterForm());

        // Simulating input changes in the form fields
        await act(async () => {
            result.current.handleInputChange({
                target: { name: 'name', value: resultSample.name },
            });
            result.current.handleInputChange({
                target: { name: 'city', value: resultSample.city },
            });
            result.current.handleInputChange({
                target: { name: 'email', value: resultSample.email },
            });
        });

        // Check the results are correctly updated
        expect(result.current.results.name).toBe(resultSample.name);
        expect(result.current.results.city).toBe(resultSample.city);
        expect(result.current.results.email).toBe(resultSample.email);

        // Test if the form validation work correctly
        await act(async () => {
            const isValid = result.current.validateForm();
            expect(isValid).toBe(true);
        })
    });

    describe("handleSubmit With static mode", () => {
        beforeAll(() => {
            // Simulate static mode
            process.env.NEXT_PUBLIC_STATIC_VERSION = "true";
        });

        it("should handle submission correctly in static mode", async () => {
            jest.useFakeTimers(); // Simule les timers
            const { result } = renderHook(() => useNewsletterForm());

            // Fill form fields with result sample provided
            act(() => {
                result.current.setResults(resultSample);
            });

            // Call handleSubmit
            act(() => {
                result.current.handleSubmit({ preventDefault: () => { } });
            });

            // Check loading is active before time change
            expect(result.current.loading).toBe(true);

            // Increase time by 1 second
            act(() => {
                jest.advanceTimersByTime(1000); // Simule le délai
            });

            // Check states after 1 second delay
            expect(result.current.loading).toBe(false);
            expect(result.current.confirmation).toBe(true);
            expect(result.current.results).toEqual({ name: "", city: "", email: "" });
            expect(result.current.errors).toEqual({ name: "", city: "", email: "" })

            jest.useRealTimers(); 
        });

        it("should not proceed with invalid form data", async () => {
            const { result } = renderHook(() => useNewsletterForm());

            // Let empty fields (invalid scenario)
            act(() => {
                result.current.setResults({
                    name: "",
                    city: "",
                    email: "",
                });
            });

            // Call handleSubmit
            await act(async () => {
                result.current.handleSubmit({ preventDefault: () => { } });
            });

            // Check validation not allow form submission
            expect(result.current.confirmation).toBe(false); 
            expect(result.current.errors).toEqual({
                name: "Name is required.",
                city: "City is required.",
                email: "Email is required.",
            }); // Errors must be defined in error state
        });
    })

    describe("handleSubmit in Dynamic Mode", () => {
        beforeAll(() => {
            // Simulate dynamic mode
            process.env.NEXT_PUBLIC_STATIC_VERSION = "false";
        });

        it("should handle submission in dynamic mode", async () => {
            const { result } = renderHook(() => useNewsletterForm());

            // Mock Axios API
            axios.post.mockResolvedValueOnce({ data: "Success" });

            // Fill form field with the samples provided
            act(() => {
                result.current.setResults(resultSample);
            });

            await act(async () => {
                result.current.handleSubmit({ preventDefault: () => { } });
            });

            // Check the states are correctly updated
            expect(result.current.loading).toBe(false);
            expect(result.current.confirmation).toBe(true);
            expect(result.current.results).toEqual({ name: "", city: "", email: "" });
            expect(result.current.errors).toEqual({ name: "", city: "", email: "" });
            expect(axios.post).toHaveBeenCalledWith("http://localhost:5050/newsletter/add", resultSample);
        });

        it("should not proceed with invalid data in dynamic mode", async () => {
            const { result } = renderHook(() => useNewsletterForm());

            // Mock Axios API
            axios.post.mockResolvedValueOnce({ data: "Success" });

            // Fill form field with the samples provided
            act(() => {
                result.current.setResults({
                    name: "",
                    city: "",
                    email: "",
                });
            });

            await act(async () => {
                result.current.handleSubmit({ preventDefault: () => { } });
            });

            // Check validation not allow form submission
            expect(result.current.confirmation).toBe(false); 
            expect(result.current.errors).toEqual({
                name: "Name is required.",
                city: "City is required.",
                email: "Email is required.",
            }); // Errors must be defined in error state
        });
    })
})