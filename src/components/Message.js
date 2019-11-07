import React from 'react'

const Message = ({ successMessage, errorMessage }) => {

    if (errorMessage) {
        return (
            <div className='message negative'>
                {errorMessage}
            </div>
        )
    }

    if (successMessage) {
        return(
            <div className='message positive'>
                {successMessage}
            </div>
        )
    }

    return null
}

export default Message