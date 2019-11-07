import React from 'react'
import { shallow } from 'enzyme'
import Header from '../components/Header'
import ExchangeRateForm from '../components/ExchangeRateForm'
import Aside from '../components/Aside'
import HighestAmountDisplay from '../components/HighestAmountDisplay'
import Message from '../components/Message'
import TotalAmountDisplay from '../components/TotalAmountDisplay'
import NewTransactionForm from '../components/NewTransactionForm'
import TransactionList from '../components/TransactionList'
import App from '../App'
import { Provider } from 'react-redux'
import store from '../store/store'

describe('App', () => {
    it('renders without crashing', () => {
        shallow(<Provider store={store}><App /></Provider>)
    })
})


describe('Header', () => {
    it('renders without crashing', () => {
        shallow(<Header />)
    })
})

describe('ExchangeRateForm', () => {
    it('renders without crashing', () => {
        shallow(<ExchangeRateForm />)
    })
})

describe('Aside', () => {
    it('renders without crashing', () => {
        shallow(<Aside />)
    })
})

describe('HighestAmountDisplay', () => {
    it('renders without crashing', () => {
        shallow(<HighestAmountDisplay />)
    })
})


describe('Message', () => {
    it('renders without crashing', () => {
        shallow(<Message />)
    })
})


describe('TotalAmountDisplay', () => {
    it('renders without crashing', () => {
        shallow(<TotalAmountDisplay />)
    })
})


describe('NewTransactionForm', () => {
    it('renders without crashing', () => {
        shallow(<NewTransactionForm />)
    })
})


describe('TransactionList', () => {
    it('renders without crashing', () => {
        shallow(<TransactionList transactions={1} />)
    })
})

