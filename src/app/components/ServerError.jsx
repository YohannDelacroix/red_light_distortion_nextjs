import React from 'react'
import TitleComponent from './TitleComponent'
import "../../styles/error.css"

const ServerError = () => {
  return (
    <div data-testid="server-error" className="error-container">
        <TitleComponent titleContent="distorded" />
        <p>
            Admins are working hard to solve the problem, please come back later.
        </p>
    </div>
  )
}

export default ServerError;