import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTransaction, removeTransaction } from './store/actions'

import Transaction from './components/Transaction'

const App = ({ transactions, addTransaction, removeTransaction }) => {
    const [euroExchangeRate, setEuroExchangeRate] = useState(0)
    const [description, setDescription] = useState('')
    const [euroAmount, setEuroAmount] = useState(0)
    const [transactionId, setTransactionId] = useState(1)

    const handleUpdateExchangeRate = event => {
        event.preventDefault()
        console.log('clicked exchange rate')
    }

    const maxAmount = transactions.reduce((prev, current) => (prev.euroAmount > current.euroAmount) ? prev : current, 1)

    const handleAddTransaction = event => {
        event.preventDefault()
        let id = transactionId
        const plnAmount = euroAmount*euroExchangeRate
        const content = {
            id,
            description,
            euroAmount,
            plnAmount,
        }
        addTransaction(content)
        id++
        setTransactionId(id)
        setDescription('')
        setEuroAmount(0)
    }


    return(
        <div>
            <div>
                <form onSubmit={event => handleUpdateExchangeRate(event)}>
                    <input type="number" step="0.01" name="exchangeRate" value={euroExchangeRate} onChange={({target}) => setEuroExchangeRate(target.value)} />
                    <button type="submit">Aktualizuj Wszystkie Transakcje</button>
                </form>
            </div>
            <div>
                <form onSubmit={event => handleAddTransaction(event)}>
                    <input type="text" name="description" value={description} onChange={({target}) => setDescription(target.value)} />
                    <input type="number" step="0.01" name="euroAmount" value={euroAmount} onChange={({target}) => setEuroAmount(target.value)} />
                    <button type="submit">Dodaj</button>
                </form>
            </div>
            <div>
                {transactions 
                ? transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} removeTransaction={removeTransaction} />)
                : null
                }
            </div>
            <div>
                <p>Najwyższa kwota:</p>
                {`${maxAmount.description}, ${maxAmount.euroAmount} euro, ${maxAmount.plnAmount} złotych`}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        transactions: state
    }
}

const matchDispatchToProps = {
    addTransaction,
    removeTransaction
}


export default connect(mapStateToProps, matchDispatchToProps)(App)