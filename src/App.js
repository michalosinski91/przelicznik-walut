import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTransaction, removeTransaction } from './store/actions'

import Transaction from './components/Transaction'

const App = ({ transactions, addTransaction, removeTransaction }) => {
    const [euroExchangeRate, setEuroExchangeRate] = useState(4.27)
    const [description, setDescription] = useState('')
    const [euroAmount, setEuroAmount] = useState(0)
    const [transactionId, setTransactionId] = useState(1)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const maxAmount = transactions.reduce((prev, current) => (prev.euroAmount > current.euroAmount) ? prev : current, 1)
    const totalAmountEUR = transactions.reduce((acc, current) => (acc + current.euroAmount), 0)
    const totalAmountPLN = transactions.reduce((acc, current) => (acc + current.euroAmount*euroExchangeRate), 0)
    
    const handleAddTransaction = event => {
        event.preventDefault()
        if (description.trim().length < 1) {
            setErrorMessage('Proszę podać nazwę transakcji')
            setTimeout(() => {
                setErrorMessage('')
            }, 5000)
            return
        }
        if (!euroAmount) {
            setErrorMessage('Proszę podać kwotę Euro')
            setTimeout(() => {
                setErrorMessage('')
            }, 5000)
            return
        }
        let id = transactionId
        const content = {
            id,
            description,
            euroAmount: parseFloat(euroAmount).toFixed(2),
        }
        addTransaction(content)
        setSuccessMessage('Transakcja została dodana!')
        setTimeout(() => {
            setSuccessMessage('')
        }, 5000)
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
                {transactions.length 
                ? transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} removeTransaction={removeTransaction} euroExchangeRate={euroExchangeRate} />)
                : 'Brak transakcji'
                }
            </div>
            <div>
                <p>Najwyższa kwota:</p>
                {transactions.length
                ? <p>{`${maxAmount.description}, ${maxAmount.euroAmount} euro, ${(maxAmount.euroAmount*euroExchangeRate).toFixed(2)} złotych`}</p>
                : 'Brak transakcji'
                }
                
            </div>
            <div>
                <p>Suma transakcji</p>
                {transactions.length
                ? <p>{`${Number(totalAmountEUR)} euro / ${totalAmountPLN.toFixed(2)} złotych`}</p>
                : 'Brak transakcji'
                }
                
            </div>
            {errorMessage
            ? <p>{errorMessage}</p>
            : null
            }
            {successMessage
            ? <p>{successMessage}</p>
            : null
            }
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