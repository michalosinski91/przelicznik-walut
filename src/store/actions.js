export const addTransaction = data => ({
    type: 'ADD_TRANSACTION',
    data
})

export const removeTransaction = id => ({
    type: 'REMOVE_TRANSACTION',
    id
})