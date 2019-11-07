import React from 'react'
import Transaction from './Transaction'
import Row from './Row'

const TransactionList = ({ transactions, removeTransaction, euroExchangeRate }) => {
    return(
        <div className='container large'>
            <h3>Lista Transakcji</h3>
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Nazwa</th>
                        <th>EUR</th>
                        <th>PLN</th>
                        <th></th>
                    </tr>
                    {transactions.map(transaction => <Row 
                        key={transaction.id}
                        transaction={transaction}
                        removeTransaction={removeTransaction} 
                        euroExchangeRate={euroExchangeRate} 
                    />)}
                </tbody>
            </table>
        </div>
    )
}

export default TransactionList