import React from 'react'

const Row = ({ transaction, removeTransaction, euroExchangeRate }) => {
    const handleRemoveTransaction = () => {
        removeTransaction(transaction.id)
    }

    const plnAmount = (transaction.euroAmount*euroExchangeRate).toFixed(2)

    return(
        <tr className='table-row' key={transaction.id}>
            <td>{transaction.description}</td>
            <td className='right'>€{transaction.euroAmount.toFixed(2)}</td>
            <td className='right'>{plnAmount}zł</td>
            <td><button className='button negative' onClick={handleRemoveTransaction}>Usuń</button></td>
        </tr>
    )
}

export default Row