import {useState} from 'react';
import './Converterform.css';
import CurrencySelect from './CurrencySelect';


const Converterform = () => {
  const [fromCurrency,setFromCurrency]= useState("USD");
  const [toCurrency,setToCurrency]= useState("IND");
  return (
  
    <form>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <div className="container"> <h2>Currency Converter</h2>
       
        <div>
          <p>Enter Amount</p>
        <input defaultValue="100" type={"text"}/>
        </div>
        <div className="dropdown" >
          <div className="from"><p>From</p>
          <CurrencySelect 
            selectedCurrency={fromCurrency}
           handleCurrency={e=>setFromCurrency(e.target.value)}
          />
          </div>
          <i className="fa-solid fa-arrow-right-arrow-left"></i>
          <div className="to"><p>To</p>
           <CurrencySelect
           selectedCurrency={toCurrency}
           handleCurrency={e=>setToCurrency(e.target.value)}
           />
          </div>
        </div>
        <div className="msg">1USD =80 INR</div>
        <button>Get Exchange Rate</button>
        </div>
        </form>
  )
}

export default Converterform;