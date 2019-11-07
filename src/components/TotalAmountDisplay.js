import React from 'react'

const TotalAmountDisplay = ({ totalAmountEUR, totalAmountPLN }) => {
    return(
        <div>
            <p>Suma transakcji:</p>
            {`${totalAmountEUR} euro / ${totalAmountPLN} złotych`}
        </div>
        
    )
}

export default TotalAmountDisplay