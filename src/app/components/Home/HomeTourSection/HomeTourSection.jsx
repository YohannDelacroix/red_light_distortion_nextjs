/**
 * HomeTourSection Component
 * 
 * This component displays a section of the homepage that lists upcoming tour dates.
 * It dynamically fetches tour dates either from a static source or an external API, depending on the environment (static or dynamic).
 * The section includes a title, a list of tour dates, and a link to the full tour page.
 * 
 * Structure:
 * - Title: A dynamic title rendered using the TitleComponent (level 2 heading).
 * - Tour Dates: A list of the upcoming tour dates. If there are no upcoming dates, a message is displayed.
 * - Link: A "More Tour Dates" button that redirects to the full tour page.
 * 
 * Data Handling:
 * - If running in static mode, the component uses pre-defined data imported from `staticTourDates`.
 * - In dynamic mode, it makes a request to an external API to fetch the latest tour dates.
 * - If there's an error fetching the data, a server error message is displayed.
 * 
 * Dependencies:
 * - `TitleComponent`: To render the section title.
 * - `Date`: To render individual tour dates.
 * - `Link`: For navigation to the full tour page.
 * - `ServerError`: For error handling in case of failed API requests.
 * 
 * Note: The component uses environment variables to determine whether it should use static or dynamic data.
 */

import React from 'react'
import Link from 'next/link'
import Date from '@/app/tour/components/Date'
import TitleComponent from '../../TitleComponent/TitleComponent'
import ServerError from '../../ServerError/ServerError'
import { staticTourDates } from '@/api/staticTourDates'

const HomeTourSection = async () => {
    const isStaticVersion = process.env.NEXT_PUBLIC_STATIC_VERSION === "true";
    let tourDates = null;

    // Determine whether to use static or dynamic data based on environment setting
    if (isStaticVersion) {
        // Static version: Use pre-defined static data for tour dates
        tourDates = [...staticTourDates];
    } else {
        // Dynamic version: Fetch tour dates from an external API
        let errorMessage = null;

        try {
            const res = await axios.get('/tour', {
                headers: { 'Cache-Control': 'no-store' }
            });

            // Assign the fetched data to tourDates
            tourDates = res.data;
        } catch (error) {
            // Handle error and store error message
            errorMessage = error.response
                ? `Error ${error.response.status}: ${error.response.statusText}`
                : error.message;
        }

    }

    // Render the section only if tourDates is available
    return (
        tourDates && <section className="home-tour" aria-labelledby="tour-section-title">
            {/* Title Section */}
            <TitleComponent titleContent="Tour Dates" level={2} titleId="tour-section-title" />

            {/* Tour List Section */}
            <ul className="tour-list">
                {
                    tourDates !== null ? (
                        tourDates.length === 0 ? <div className="tour-nodate">No upcoming tour dates</div> : (
                            tourDates.slice(0, 5).map((date, index) => (
                                <li key={`${date.day}-${date.month}-${date.year}`}><Date date_content={tourDates[index]} /></li>
                            ))
                        )
                    ) : <ServerError />
                }
            </ul>

            {/* Link to Full Tour Page */}
            <Link className="home-link" href="/tour">
                <button className="home-button">More Tour Dates</button>
            </Link>
        </section>

    )
}

export default HomeTourSection