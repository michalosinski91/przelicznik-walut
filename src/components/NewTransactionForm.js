import React, { useState } from 'react'

const NewTransactionForm = ({ handleAddTransaction }) => {
    const [description, setDescription] = useState('')
    const [euroAmount, setEuroAmount] = useState(0)

    const handleFormClear = () => {
        setDescription('')
        setEuroAmount(0)
    }

    return(
        <div className='container large'>
            <h3>Nowa transakcja</h3>
            <form className='form' 
                onSubmit={event => handleAddTransaction(event, description, euroAmount, handleFormClear)}
            >
                <label>Nazwa:</label>
                <input 
                    className="text-input"
                    type="text" 
                    name="description" 
                    value={description} 
                    onChange={({ target }) => setDescription(target.value)}
                />
                <label>Kwota: </label>
                <input
                    type="number" 
                    step="0.01" 
                    name="euroAmount"
                    value={euroAmount}
                    onChange={({ target }) => setEuroAmount(target.value)}
                />
                Euro
                <button className="button positive" type="submit">Dodaj</button>
            </form>
        </div>
    )
}

export default NewTransactionForm