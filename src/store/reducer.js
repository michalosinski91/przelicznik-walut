const initialState = [
    { id: 0, description: 'Pierwsza transakcja', euroAmount: 5.00 },
]

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return [
                ...state,
                {
                    id: action.data.id,
                    description: action.data.description,
                    euroAmount: action.data.euroAmount,
                }
            ]
        case 'REMOVE_TRANSACTION':
            return state.filter(transaction => transaction.id !== action.id)
        default:
            return state
    }
}

export default reducer