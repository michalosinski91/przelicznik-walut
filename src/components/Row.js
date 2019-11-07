import React from 'react'

const Row = ({ transaction, removeTransaction, euroExchangeRate }) => {
    const handleRemoveTransaction = () => {
        removeTransaction(transaction.id)
    }

    const plnAmount = (transaction.euroAmount*euroExchangeRate).toFixed(2)

    return(
        <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.description}</td>
            <td>{transaction.euroAmount.toFixed(2)}</td>
            <td>{plnAmount}</td>
            <td><button className='button negative' onClick={handleRemoveTransaction}>Usuń</button></td>
        </tr>
    )
}

export default Row