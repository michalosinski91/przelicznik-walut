import React from 'react'

const ExchangeRateForm = ({ euroExchangeRate, setEuroExchangeRate }) => {

    return(
        <div className='container small'>
            <h3>Kurs</h3>
            <form className='form'>
                1 Euro =
                <input 
                    type="number" 
                    step="0.01" 
                    name="exchangeRate" 
                    value={euroExchangeRate}
                    onChange={({ target }) => setEuroExchangeRate(target.value)}
                />
                złotych
            </form>
        </div>
    )
}

export default ExchangeRateForm