import * as actions from '../store/actions'
import reducer from '../store/reducer'

describe('Action', () => {
    it('should create an action to add a new transaction', () => {
        const data = {
            id: 5,
            description: 'test',
            euroAmount: 2.00
        }
        const expectedAction = {
            type: 'ADD_TRANSACTION',
            data
        }

        expect(actions.addTransaction(data)).toEqual(expectedAction)
    })
})

describe('Action', () => {
    it('should remove a transaction', () => {
        const id = 2
        const expectedAction = {
            type: 'REMOVE_TRANSACTION',
            id
        }

        expect(actions.removeTransaction(id)).toEqual(expectedAction)
    })
})


describe('Transaction reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([
            { id: 0, description: 'Pierwsza transakcja', euroAmount: 5.00 }
        ])
    })
    
    it('should handle ADD_TRANSACTION', () => {
        expect(
            reducer([], {
                type: 'ADD_TRANSACTION',
                data: {
                    id: 5,
                    description: 'test',
                    euroAmount: 2.00
                }
            })
        ).toEqual([
            {
                id: 5,
                description: 'test',
                euroAmount: 2.00
            }
        ])
        expect(
            reducer(
                [
                    { id: 0, description: 'Pierwsza transakcja', euroAmount: 5.00 }
                ],
                {
                    type: 'ADD_TRANSACTION',
                    data: {
                        id: 5,
                        description: 'test',
                        euroAmount: 2.00
                    }
                }
            )
        ).toEqual([
            { 
                id: 0, 
                description: 'Pierwsza transakcja', 
                euroAmount: 5.00 
            },
            {
                id: 5,
                description: 'test',
                euroAmount: 2.00
            }
        ])
    })
    it('should handle REMOVE_TRANSACTION', () => {
        expect(
            reducer(
                [
                    { id: 0, description: 'Pierwsza transakcja', euroAmount: 5.00 }
                ],
                {
                    type: 'REMOVE_TRANSACTION',
                    id: 0
                }
            )
        ).toEqual([])
    })
})