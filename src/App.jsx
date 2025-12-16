import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertedAmount,setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo || {})
  function swapToFrom(){
    setFrom((prevvalue)=> to) // no need of extra variable because both the setStates are paired they will perform only when entire function is executed
    setTo((prevvalue)=>from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert =()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
    >
        <div className="w-full max-w-2xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">
                    Currency Converter
                </h1>
                <p className="text-white/80 text-lg">Convert currencies with real-time rates</p>
            </div>
            
            {/* Main Converter Card */}
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    {/* From Currency */}
                    <div className="mb-6">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onAmountChange={(amount) => setAmount(amount)}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                        />
                    </div>
                    
                    {/* Swap Button */}
                    <div className="relative flex justify-center mb-6">
                        <button
                            type="button"
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-white/30"
                            onClick={swapToFrom}
                        >
                            <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                            </svg>
                            Swap Currencies
                        </button>
                    </div>
                    
                    {/* To Currency */}
                    <div className="mb-8">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    
                    {/* Convert Button */}
                    <button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-200 text-lg"
                    >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
                
                {/* Result Display */}
                {convertedAmount > 0 && (
                    <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                        <p className="text-center text-gray-700">
                            <span className="text-2xl font-bold text-green-700">
                                {amount.toLocaleString()} {from.toUpperCase()}
                            </span>
                            <span className="mx-4 text-xl">=</span>
                            <span className="text-2xl font-bold text-green-700">
                                {convertedAmount.toLocaleString(undefined, {maximumFractionDigits: 2})} {to.toUpperCase()}
                            </span>
                        </p>
                    </div>
                )}
            </div>
            
            {/* Footer */}
            <div className="text-center mt-8">
                <p className="text-white/70 text-sm">
                    Powered by real-time exchange rates
                </p>
            </div>
        </div>
    </div>
);
}

export default App
