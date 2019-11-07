import React, { useState } from 'react'

const NewTransactionForm = ({ handleAddTransaction }) => {
    const [description, setDescription] = useState('')
    const [euroAmount, setEuroAmount] = useState(0)

    const handleFormClear = () => {
        setDescription('')
        setEuroAmount(0)
    }

    return(
        <div className='container'>
            <form className='form' 
                onSubmit={event => handleAddTransaction(event, description, euroAmount, handleFormClear)}
            >
                Nowa transakcja o nazwie 
                <input 
                    className="text-input"
                    type="text" 
                    name="description" 
                    value={description} 
                    onChange={({ target }) => setDescription(target.value)}
                />
                na kwotę
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