import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './store/actions'

const App = ({ counter, increment, decrement }) => {
    const handleIncrement = () => {
        console.log(counter)
        increment()
    }

    const handleDecrement = () => {
        decrement()
    }
    return(
        <div>
            <div>
                {counter}
            </div>
            <button onClick={handleIncrement}>plus</button>
            <button onClick={handleDecrement}>minus</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const matchDispatchToProps = {
    increment,
    decrement
}


export default connect(mapStateToProps, matchDispatchToProps)(App)