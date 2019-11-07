import React from 'react'
import Transaction from './Transaction'

const TransactionList = ({ transactions, removeTransaction, euroExchangeRate }) => {
    return(
        <div>
            <p>Lista Transakcji</p>
            {transactions.map(transaction => <Transaction
                key={transaction.id}
                transaction={transaction}
                removeTransaction={removeTransaction} 
                euroExchangeRate={euroExchangeRate} 
            />)}
        </div>
    )
}

export default TransactionList