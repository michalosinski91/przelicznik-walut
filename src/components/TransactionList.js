import React from 'react'
import Row from './Row'

const TransactionList = ({ transactions, removeTransaction, euroExchangeRate }) => {
    return(
        <div className='container large'>
            <h3>Lista Transakcji</h3>
            {!transactions.length
            ? <p>Brak transakcji</p>
            : <table className='table'>
                <tbody>
                    <tr>
                        <th>Nazwa</th>
                        <th className='right'>EUR</th>
                        <th className='right'>PLN</th>
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
            }
        </div>
    )
}

export default TransactionList