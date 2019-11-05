/*export const updateExchangeRate = data => ({
    type: 'UPDATE_EXCHANGE_RATE',
    data
})
*/

export const addTransaction = data => ({
    type: 'ADD_TRANSACTION',
    data
})

export const removeTransaction = id => ({
    type: 'REMOVE_TRANSACTION',
    id
})