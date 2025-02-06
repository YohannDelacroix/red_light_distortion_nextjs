/**
 * @file Date.js
 * @description A React component to display event details such as the event date, place, 
 * and links to additional information and ticket purchase.
 * 
 * This component accepts a prop called 'date_content' which should contain information about 
 * the event. It conditionally renders links to 'More Info' and 'Tickets' if they are provided.
 * 
 * @component
 * @example
 * const date_content = {
 *   month: "January",
 *   day: "15",
 *   place_geo: "Paris, France",
 *   place_name: "Le Zenith",
 *   more_link: "https://example.com/event-details",
 *   ticket_link: "https://example.com/tickets",
 * };
 * 
 * <Date date_content={date_content} />
 * 
 * @param {Object} date_content - The event details.
 * @param {string} date_content.month - The month of the event.
 * @param {string} date_content.day - The day of the event.
 * @param {string} date_content.place_geo - The geographical location of the event (e.g., city, country).
 * @param {string} date_content.place_name - The venue of the event.
 * @param {string} [date_content.more_link] - Optional link to more information about the event.
 * @param {string} [date_content.ticket_link] - Optional link to purchase tickets for the event.
 *
 * @returns {JSX.Element} The rendered Date component.
 */

import "../../../styles/tour.css";

function Date({ date_content }) {
    //Don't display the buttons is there is no link available
    let dateMore = "date-more";
    if (date_content.more_link === '') {
        dateMore = "invisible"
    }
    let dateTicket = "date-ticket";
    if (date_content.ticket_link === '') {
        dateTicket = "invisible"
    }


    return (<div className="date-container">
        {/* Display the event date */}
        <time className="date-date">
            <div className="date-date-month">{date_content.month}</div>
            <div className="date-date-day">{date_content.day}</div>
        </time>

        {/* Display the event place and venue */}
        <div className="date-place">
            <div className="date-place-city">{date_content.place_geo}</div>
            <div className="date-place-name">{date_content.place_name}</div>
        </div>

        {/* Render the links if available */}
        <div className="date-links">
            <div data-testid="more-link" className={dateMore}> 
                <a href={date_content.more_link} target="_blank" rel="noreferrer" aria-label={`More info about the event in ${date_content.place_geo}, ${date_content.place_name}`}><button className="w-100">More info</button></a>
            </div>

            <div data-testid="ticket-link" className={dateTicket}>
                <a href={date_content.ticket_link} target="_blank" rel="noreferrer" aria-label={`Buy a ticket for show in ${date_content.place_geo}, ${date_content.place_name}`}><button className="w-100">Tickets</button></a>
            </div>
        </div>
    </div>);
}

export default Date;
