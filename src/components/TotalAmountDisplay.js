import React from 'react'

const TotalAmountDisplay = ({ totalAmountEUR, totalAmountPLN }) => {
    return(
        <div className='aside-item'>
            <h3>Suma transakcji</h3>
            <p>{`€${totalAmountEUR} / ${totalAmountPLN}zł`}</p>
        </div>
        
    )
}

export default TotalAmountDisplay