import React from 'react'

const TotalAmountDisplay = ({ totalAmountEUR, totalAmountPLN }) => {
    return(
        <div>
            <h3>Suma transakcji:</h3>
            {`${totalAmountEUR} euro / ${totalAmountPLN} złotych`}
        </div>
        
    )
}

export default TotalAmountDisplay