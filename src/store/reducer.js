const initialState = [
    { id: 0, description: 'dummy', euroAmount: 2, plnAmount: 4 },
]

const reducer = (state = initialState, action) => {
    console.log('state now: ', state)
    console.log('action: ', action)
    switch (action.type) {
/*        case 'UPDATE_EXCHANGE_RATE':
            return {
                ...state, exchangeRate: action.data
            }
*/
        case 'ADD_TRANSACTION':
            console.log(action.data)
            return [
                ...state,
                {
                    id: action.data.id,
                    description: action.data.description,
                    euroAmount: action.data.euroAmount,
                    plnAmount: action.data.plnAmount
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