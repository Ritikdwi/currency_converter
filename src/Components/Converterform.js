import {useState} from 'react';
import './Converterform.css';
import FlagByCurrency from './CurrencySelect';


const Converterform = () => {
  const [amount ,setAmount]=useState(100);
  const [fromCurrency,setFromCurrency]= useState("USD");
  const [toCurrency,setToCurrency]= useState("IND");

  //function to fetch the api
  const getExchangeRate= async ()=>{
  const API_KEY=import.meta.env.API_KEY || 'a2f5611b12f1f072a682844b';
  const API_URL=`https://cors-anywhere.herokuapp.com/https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}/${toCurrency}`;

    try {
      const response=await fetch(API_URL);
      if(!response.ok)throw new Error(`Something went wrong!: ${response.status}`);
      
      const data=await response.json() ;
      const rate=(data.conversion_rate *amount).toFixed();
      console.log(rate);
     } catch (error) {
      console.error('ERROR FETCHING EXCHANGE RATE',error);
     }
}

//handle for submission
const handleFormSubmit=(e)=>{
  e.preventDefault();
  getExchangeRate();
}

  return (
  
    <form className='converter-form'onSubmit={handleFormSubmit}>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <div className="container"> <h2>Currency Converter</h2>
       
        <div>
          <p>Enter Amount</p>
        <input value={amount} type={"number"} className="form-input" onChange={e=>setAmount(e.target.value)} required/>
        </div>
        <div className="dropdown" >
          <div className="from"><p>From</p>
          < FlagByCurrency
            selectedCurrency={fromCurrency}
           handleCurrencyChange={e=>setFromCurrency(e.target.value)}
          />
          </div>
          <i className="fa-solid fa-arrow-right-arrow-left"></i>
          <div className="to"><p>To</p>
           <FlagByCurrency
           selectedCurrency={toCurrency}
           handleCurrencyChange={e=>setToCurrency(e.target.value)}
           />
          </div>
        </div>
        <div className="msg">1USD =80 INR</div>
        <button className='getExchangeRate'>Get Exchange Rate</button>
        </div>
        </form>
  )
}

export default Converterform;