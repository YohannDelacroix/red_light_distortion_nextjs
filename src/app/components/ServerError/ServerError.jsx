import React from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import "@/styles/error.css"


/**
 * ServerError Component
 *
 * This component displays an error message when the server cannot fulfill 
 * a request or when an issue occurs on the backend.
 * It informs users that the issue is being worked on by the admin team.
 *
 * @returns {JSX.Element} - A user interface with an error title and message.
 */
const ServerError = () => {
  return (
    <div data-testid="server-error" className="error-container">
        <TitleComponent titleContent="server is distorded" />
        <p>
            Admins are working hard to solve the problem, please come back later.
        </p>
    </div>
  )
}

export default ServerError; 