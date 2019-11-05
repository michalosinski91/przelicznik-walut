const reducer = (state = 0, action) => {
    console.log('state now: ', state)
    console.log('action: ', action)
    switch (action.type) {
        case 'INCREMENT':
            console.log('increment')
            return state + 1
        case 'DECREMENT':
            console.log('decrement')
            return state - 1
        default:
            return state
    }
}

export default reducer