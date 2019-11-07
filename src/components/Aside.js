import React from 'react'
import HighestAmountDisplay from './HighestAmountDisplay'
import TotalAmountDisplay from './TotalAmountDisplay'

const Aside = ({ totalAmountEUR, totalAmountPLN, description, euroAmount, plnAmount }) => {
    return (
        <div className='container aside'>
            <TotalAmountDisplay 
                totalAmountEUR={totalAmountEUR} 
                totalAmountPLN={totalAmountPLN}
            />
            <HighestAmountDisplay 
                description={description} 
                euroAmount={euroAmount} 
                plnAmount={plnAmount} 
            />
        </div>
    )
}

export default Aside