import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTransaction, removeTransaction } from './store/actions'

import Transaction from './components/Transaction'

const App = ({ transactions, addTransaction, removeTransaction }) => {
    const [euroExchangeRate, setEuroExchangeRate] = useState(0)
    const [description, setDescription] = useState('')
    const [euroAmount, setEuroAmount] = useState(0)
    const [transactionId, setTransactionId] = useState(1)

    const maxAmount = transactions.reduce((prev, current) => (prev.euroAmount > current.euroAmount) ? prev : current, 1)
    const totalAmountEUR = transactions.reduce((acc, current) => (acc + current.euroAmount), 0)
    const totalAmountPLN = transactions.reduce((acc, current) => (acc + current.euroAmount*euroExchangeRate), 0)
    
    const handleAddTransaction = event => {
        event.preventDefault()
        let id = transactionId
        const content = {
            id,
            description,
            euroAmount,
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
                    <label>Kurs wymiany</label>
                    <input type="number" step="0.01" name="exchangeRate" value={euroExchangeRate} onChange={({target}) => setEuroExchangeRate(target.value)} />
                </form>
            </div>
            <div>
                <form onSubmit={event => handleAddTransaction(event)}>
                    <label>Opis</label>
                    <input type="text" name="description" value={description} onChange={({target}) => setDescription(target.value)} />
                    <label>Kwota Euro</label>
                    <input type="number" step="0.01" name="euroAmount" value={euroAmount} onChange={({target}) => setEuroAmount(target.value)} />
                    <button type="submit">Dodaj</button>
                </form>
            </div>
            <div>
                <p>Lista transakcji</p>
                {transactions 
                ? transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} removeTransaction={removeTransaction} euroExchangeRate={euroExchangeRate} />)
                : null
                }
            </div>
            <div>
                <p>Najwyższa kwota:</p>
                {`${maxAmount.description}, ${maxAmount.euroAmount} euro, ${maxAmount.euroAmount*euroExchangeRate} złotych`}
            </div>
            <div>
                <p>Suma transakcji</p>
                {`${Number(totalAmountEUR)} euro / ${totalAmountPLN} złotych`}
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
    removeTransaction,
}


export default connect(mapStateToProps, matchDispatchToProps)(App)