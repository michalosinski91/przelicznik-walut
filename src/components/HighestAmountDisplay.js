import React from 'react'

const HighestAmountDisplay = ({ description, euroAmount, plnAmount }) => {
    return(
        <div>
            <p>Największa transakcja:</p>
            {`${description} - ${euroAmount} euro / ${plnAmount} złotych`}
        </div>
    )
}

export default HighestAmountDisplay