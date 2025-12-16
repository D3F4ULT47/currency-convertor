import {useEffect,useState} from "react"

function useCurrencyInfo(currency){
  const [currData,setCurrData]=useState({})
useEffect(()=>{
fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
).then((res)=>
  res.json()
).then((res)=>setCurrData(res[currency])
).catch((err) => {
  console.error("Currency API error:", err);
});
},[currency])
return currData

}
export default useCurrencyInfo
