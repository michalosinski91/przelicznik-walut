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
                <div className='input-container'>
                    <div className='form-field'>
                        <label>Nazwa transakcji:</label>
                        <input 
                            className="text-input"
                            type="text" 
                            name="description" 
                            value={description} 
                            onChange={({ target }) => setDescription(target.value)}
                        />
                    </div>
                    <div className='form-field'>
                        <label>Kwota w Euro:</label>
                        <input
                            type="number" 
                            step="0.01" 
                            name="euroAmount"
                            value={euroAmount}
                            onChange={({ target }) => setEuroAmount(target.value)}
                        />
                    </div>
                </div>
                <button className="button positive" type="submit">Dodaj</button>
            </form>
        </div>
    )
}

export default NewTransactionForm