const initialState = [
    { id: 0, description: 'dummy', euroAmount: 2 },
    { id: 11, description: 'Another transaction', euroAmount: 10 },
]

const reducer = (state = initialState, action) => {
    console.log('state now: ', state)
    console.log('action: ', action)
    switch (action.type) {
        case 'ADD_TRANSACTION':
            console.log(action.data)
            return [
                ...state,
                {
                    id: action.data.id,
                    description: action.data.description,
                    euroAmount: action.data.euroAmount,
                }
            ]
        case 'REMOVE_TRANSACTION':
            console.log(state)
            return state.filter(transaction => transaction.id !== action.id)
        default:
            return state
    }
}

export default reducer