import React from 'react'

const HighestAmountDisplay = ({ description, euroAmount, plnAmount }) => {
    return(
        <div>
            <h3>Największa transakcja:</h3>
            {`${description} - ${euroAmount} euro / ${plnAmount} złotych`}
        </div>
    )
}

export default HighestAmountDisplay