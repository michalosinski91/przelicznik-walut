import React from 'react'
import store from './store/store'
import { connect } from 'react-redux'
import { increment, decrement } from './store/actions'

const App = ({ state, dispatch }) => {
    const handleIncrement = () => {
        console.log('hi')
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }
    return(
        <div>
            <div>
                {state}
            </div>
            <button onClick={handleIncrement}>plus</button>
            <button onClick={handleDecrement}>minus</button>
        </div>
    )
}

const mapStateToProps = state => ({
    state
})


export default connect(mapStateToProps)(App)