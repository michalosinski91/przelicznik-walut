import React from 'react'

const Transaction = ({ transaction, removeTransaction }) => {
    const handleRemoveTransaction = () => {
        console.log('clicked', transaction.id)
        removeTransaction(transaction.id)
    }
    return (
        <div>
            {`${transaction.description} - ${transaction.euroAmount} euro = ${transaction.plnAmount} złotych`}
            <button onClick={handleRemoveTransaction}>Usuń</button>
        </div>
    )
}

export default Transaction