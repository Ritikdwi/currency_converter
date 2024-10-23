const currencyCodes = [
    "USD", "EUR", "GBP", "INR", "AUD", "CAD", "JPY", "CNY", "BRL", "ZAR",
    "RUB", "MXN", "CHF", "SEK", "NOK", "DKK", "NZD", "KRW", "SGD", "ARS", 
    "TRY", "PLN", "THB", "IDR", "MYR", "HKD", "PHP", "VND", "PKR", "ILS", 
    "SAR", "AED", "EGP", "NGN", "CLP", "COP", "PEN", "CZK", "HUF", "RON", 
    "BGN", "HRK", "ISK", "MAD", "LKR", "KWD", "BHD", "QAR", "OMR", "JOD"
  ];
  
  const CurrencySelect = ({selectedCurrency,handleCurrency }) => {
    const countryCode=selectedCurrency;
  return (
    <div className='currency-select'>
     <img src={`https://flagsapi.com/${countryCode}/flat/64.png`} />
    <select 
        onChange={handleCurrency}
        className="Currency-dropdown"
        value={selectedCurrency}>
        {currencyCodes.map(currency=>(
            <option key={currency}value={currency}>{currency}</option>
        ))}
    </select>
    </div>
  )
}
export default CurrencySelect;
