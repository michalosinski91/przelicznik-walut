let transactionId = 1

const handleAddTransaction = (description, euroAmount) => {
    if (description.trim().length < 1) {
        return false
    }
    if (!euroAmount || typeof(euroAmount) != "number") {
        return false
    }
    let id = transactionId
    const content = {
        id,
        description,
        euroAmount: +(parseFloat(euroAmount).toFixed(2)),
    }
    id++
    return content
}

const euroExchangeRate = 4.27

const transactions = [
    { id: 0, description: 'Pierwsza transakcja', euroAmount: 5.00 },
    { id: 1, description: 'Druga transakcja', euroAmount: 10.00 },
    { id: 2, description: 'Trzecia transakcja', euroAmount: 50.00 },
]

describe('handleAddTransaction function', () => {
    it('should not accept empty description', () => {
        expect(handleAddTransaction('', 1)).toEqual(false)
        expect(handleAddTransaction('  ', 1)).toEqual(false)
    })
    it('should not accept empty or 0 euro value', () => {
        expect(handleAddTransaction('test')).toEqual(false)
        expect(handleAddTransaction('test', 0)).toEqual(false)
        expect(handleAddTransaction('test', 'testNumber')).toEqual(false)
    })
    it('should generate a content object to pass to action creator', () => {
        expect(handleAddTransaction('test', 2.00)).toEqual({
            id: 1,
            description: "test",
            euroAmount: 2.00
        })
    })
})

const maxAmountEUR = transactions.reduce((prev, current) => (prev.euroAmount > current.euroAmount) ? prev : current, 1)

describe('maxAmountEUR function', () => {
    it('should return the highest transaction from an array of objects', () => {
        expect(maxAmountEUR).toEqual({
            id: 2, description: 'Trzecia transakcja', euroAmount: 50.00
        })
    })
})

const maxAmountPLN = (maxAmountEUR.euroAmount*euroExchangeRate).toFixed(2)

describe('maxAmountPLN function', () => {
    it('should return the highest value in PLN from an array of objects', () => {
        expect(maxAmountPLN).toEqual("213.50")
    })
})

const totalAmountEUR = (transactions.reduce((acc, current) => (acc + current.euroAmount), 0)).toFixed(2)

describe('totalAmountEUR function', () => {
    it('should return the total value of transactions in Euro', () => {
        expect(totalAmountEUR).toEqual("65.00")
    })
})

const totalAmountPLN = (transactions.reduce((acc, current) => (acc + current.euroAmount*euroExchangeRate), 0)).toFixed(2)

describe('totalAmountPLN function', () => {
    it('should return the toal value of transactions in złoty', () => {
        expect(totalAmountPLN).toEqual("277.55")
    })
})