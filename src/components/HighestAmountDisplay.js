import React from 'react'

const HighestAmountDisplay = ({ description, euroAmount, plnAmount }) => {
    return(
        <div>
            <h3>Największa transakcja:</h3>
            {`${description} - ${euroAmount.toFixed(2)} euro / ${plnAmount} złotych`}
        </div>
    )
}

export default HighestAmountDisplay