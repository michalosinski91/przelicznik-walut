const initialState = [
    { id: 0, description: 'dummy', euroAmount: 2 },
    { id: 11, description: 'Another transaction', euroAmount: 10 },
    { id: 12, description: 'dummy', euroAmount: 2 },
    { id: 13, description: 'dummy', euroAmount: 2 },
    { id: 14, description: 'dummy', euroAmount: 2 },
    { id: 15, description: 'dummy', euroAmount: 2 },
    { id: 16, description: 'dummy', euroAmount: 2 },
    { id: 17, description: 'dummy', euroAmount: 2 },
    { id: 18, description: 'dummy', euroAmount: 2 },
    { id: 20, description: 'dummy', euroAmount: 2 },
    { id: 33, description: 'dummy', euroAmount: 2 },
    { id: 38, description: 'dummy', euroAmount: 2 },
    { id: 55, description: 'dummy', euroAmount: 2 },
    { id: 77, description: 'dummy', euroAmount: 2 },
    { id: 90, description: 'dummy', euroAmount: 2 },
    { id: 100, description: 'dummy', euroAmount: 2 },
    { id: 150, description: 'dummy', euroAmount: 2 },
    { id: 175, description: 'dummy', euroAmount: 2 },
    { id: 200, description: 'dummy', euroAmount: 2 },
    { id: 201, description: 'dummy', euroAmount: 2 },
    { id: 340, description: 'dummy', euroAmount: 2 },
    { id: 999, description: 'dummy', euroAmount: 2 },
    { id: 998, description: 'long long long long long description', euroAmount: 2 },
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