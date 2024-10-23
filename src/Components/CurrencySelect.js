import { useState } from "react";
const currencyToCountry = {
    USD: "US",
    EUR: "EU",  // For Euro, you can use EU or a specific country like FR (France)
    GBP: "GB",
    INR: "IN",
    AUD: "AU",
    CAD: "CA",
    JPY: "JP",
    CNY: "CN",
    BRL: "BR",
    ZAR: "ZA",
    RUB: "RU",
    MXN: "MX",
    CHF: "CH",
    SEK: "SE",
    NOK: "NO",
    DKK: "DK",
    NZD: "NZ",
    KRW: "KR",
    SGD: "SG",
    ARS: "AR",
    TRY: "TR",
    PLN: "PL",
    THB: "TH",
    IDR: "ID",
    MYR: "MY",
    HKD: "HK",
    PHP: "PH",
    VND: "VN",
    PKR: "PK",
    ILS: "IL",
    SAR: "SA",
    AED: "AE",
    EGP: "EG",
    NGN: "NG",
    CLP: "CL",
    COP: "CO",
    PEN: "PE",
    CZK: "CZ",
    HUF: "HU",
    RON: "RO",
    BGN: "BG",
    HRK: "HR",
    ISK: "IS",
    MAD: "MA",
    LKR: "LK",
    KWD: "KW",
    BHD: "BH",
    QAR: "QA",
    OMR: "OM",
    JOD: "JO"
};

function FlagByCurrency() {
    const [selectedCurrency, setSelectedCurrency] = useState("USD");
  
    // Handle currency selection
    const handleCurrencyChange = (event) => {
      setSelectedCurrency(event.target.value);
    };
  
    // Get country code for selected currency
    const countryCode = currencyToCountry[selectedCurrency] || "US"; // Default to "US" if not found
  
    return (
      <div>
        <h1>Select a Currency</h1>
        {/* Dropdown to select currency */}
        <select onChange={handleCurrencyChange} value={selectedCurrency}>
          {Object.keys(currencyToCountry).map((currencyCode) => (
            <option key={currencyCode} value={currencyCode}>
              {currencyCode}
            </option>
          ))}
        </select>
  
        {/* Display flag based on selected currency's country */}
        <div style={{ marginTop: "20px" }}>
          <h2>Flag:</h2>
          <img
            src={`https://flagsapi.com/${countryCode}/flat/64.png`}
            alt={`${countryCode} flag`}
          />
        </div>
      </div>
    );
  }
  
  export default FlagByCurrency;
