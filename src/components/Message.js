import React from 'react'

const Message = ({ successMessage, errorMessage }) => {

    if (errorMessage) {
        return (
            <div className='message negative'>
                <p>{errorMessage}</p>
            </div>
        )
    }

    if (successMessage) {
        return(
            <div className='message positive'>
                <p>{successMessage}</p>
            </div>
        )
    }

    return null
}

export default Message