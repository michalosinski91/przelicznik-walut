import React from 'react'

const HighestAmountDisplay = ({ description, euroAmount, plnAmount }) => {
    return(
        <div className='aside-item'>
            <h3>Największa transakcja</h3>
            {!description 
            ? <p>Brak transakcji</p>
            : <div>
                <p>{description}</p>
                <p>{`€${euroAmount.toFixed(2)} / ${plnAmount}zł`}</p>
            </div>
            }
            
        </div>
    )
}

export default HighestAmountDisplay