import React from 'react'

const HighestAmountDisplay = ({ description, euroAmount, plnAmount }) => {
    return(
        <div>
            <h3>Największa transakcja:</h3>
            {!description 
            ? <p>Brak transakcji</p>
            : <div>
                <p>{description}</p>
                <p>{`${euroAmount.toFixed(2)} euro / ${plnAmount} złotych`}</p>
            </div>
            }
            
        </div>
    )
}

export default HighestAmountDisplay