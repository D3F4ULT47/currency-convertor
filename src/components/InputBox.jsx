import React, { useId } from 'react'

function InputBox({
  label,
  amount,
  onChange,
 // onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectCurrency="usd",
  amountDisable=false,
  currencyDisable=false,

  className = "",
}) {
  const amountInputId= useId()

  return (
      <div className={`bg-white/80 backdrop-blur-sm p-4 rounded-xl text-sm flex ${className} shadow-md border border-white/50`}>
          <div className="w-1/2">
              <label htmlFor={amountInputId} className="text-gray-600 mb-2 inline-block font-medium">
                 {label}
              </label>
              <input
                  key={amountInputId}
                  className="outline-none w-full bg-transparent py-2 text-lg font-semibold text-gray-800 placeholder-gray-400"
                  type="number"
                  placeholder="Enter amount"
                  disabled={amountDisable}
                  value={amount}
                //  onChange={(e)=>{
                 // onAmountChange && onAmountChange(Number(e.target.value))
                 // }}
                 onChange={onChange}
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-gray-600 mb-2 w-full font-medium">Currency Type</p>
              <select
                  className="rounded-lg px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-200 cursor-pointer outline-none border border-gray-300 text-gray-800 font-medium hover:from-gray-200 hover:to-gray-300 transition-all duration-200"
                  value={selectCurrency}
               onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
               disabled={currencyDisable}
              >
                     {currencyOptions.map(item=>(
                       <option key={item} value={item} className="bg-white text-gray-800">
                       {item.toUpperCase()}
                   </option>
                     ))}              
              </select>
          </div>
      </div>
  );
}

export default InputBox;
