import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTransaction, removeTransaction } from './store/actions'

import Header from './components/Header'
import ExchangeRateForm from './components/ExchangeRateForm'
import NewTransactionForm from './components/NewTransactionForm'
import TransactionList from './components/TransactionList'
import Aside from './components/Aside'
import Message from './components/Message'

const App = ({ transactions, addTransaction, removeTransaction }) => {
    const [euroExchangeRate, setEuroExchangeRate] = useState(4.27)
    const [transactionId, setTransactionId] = useState(1)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const maxAmountEUR = transactions.reduce((prev, current) => (prev.euroAmount > current.euroAmount) ? prev : current, 1)
    const maxAmountPLN = (maxAmountEUR.euroAmount*euroExchangeRate).toFixed(2)
    const totalAmountEUR = (transactions.reduce((acc, current) => (acc + current.euroAmount), 0)).toFixed(2)
    const totalAmountPLN = (transactions.reduce((acc, current) => (acc + current.euroAmount*euroExchangeRate), 0)).toFixed(2)

    const handleAddTransaction = (event, description, euroAmount, callback) => {
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
            euroAmount: +(parseFloat(euroAmount).toFixed(2)),
        }
        addTransaction(content)
        setSuccessMessage('Transakcja została dodana!')
        setTimeout(() => {
            setSuccessMessage('')
        }, 5000)
        id++
        setTransactionId(id)
        callback()
    }


    return(
        <div>
            <Header />
            <div className='wrapper'>
                <div className='container-flex'>
                    <ExchangeRateForm 
                        euroExchangeRate={euroExchangeRate}
                        setEuroExchangeRate={setEuroExchangeRate}
                    />
                    <NewTransactionForm 
                        handleAddTransaction={handleAddTransaction} 
                    />
                </div>
                <div className='container-flex'>
                    <Aside
                        totalAmountEUR={totalAmountEUR} 
                        totalAmountPLN={totalAmountPLN}
                        description={maxAmountEUR.description} 
                        euroAmount={maxAmountEUR.euroAmount} 
                        plnAmount={maxAmountPLN} 
                    />
                    <TransactionList 
                        transactions={transactions} 
                        removeTransaction={removeTransaction} 
                        euroExchangeRate={euroExchangeRate} 
                    />
                </div>
                <Message errorMessage={errorMessage} successMessage={successMessage} />
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