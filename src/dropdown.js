import countryList from "./countries";

const BASE_URL= "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
  
const CurrrenySelector=()=>{
    return(<div className="select-container">
        
        <select name="from">
            {countryList.map(select=>(
                <option key={currency} value={currency}>{currency}</option>
            ))}

        </select>
        </div>
    )
}
export default CurrrenySelector;