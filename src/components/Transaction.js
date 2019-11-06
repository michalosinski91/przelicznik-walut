import React from 'react'

const Transaction = ({ transaction, removeTransaction, euroExchangeRate }) => {
    const handleRemoveTransaction = () => {
        removeTransaction(transaction.id)
    }
    return (
        <div>
            {`${transaction.description} - ${transaction.euroAmount} euro = ${(transaction.euroAmount*euroExchangeRate).toFixed(2)} złotych`}
            <button onClick={handleRemoveTransaction}>Usuń</button>
        </div>
    )
}

export default Transaction