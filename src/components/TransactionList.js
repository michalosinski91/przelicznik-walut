import React from 'react'
import Transaction from './Transaction'

const TransactionList = ({ transactions, removeTransaction, euroExchangeRate }) => {
    return(
        <div>
            <h3>Lista Transakcji</h3>
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