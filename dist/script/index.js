const time=document.querySelector("#time"),prices=document.querySelectorAll(".price"),basePrices=[19.99,24.99,39.99],setPrices=(time.value=1,i=>{console.log(i),prices.forEach((e,t)=>{e.textContent=""+(1===i?(10*basePrices[t]+.09).toFixed(2):basePrices[t])})});time.addEventListener("click",()=>{setPrices(+time.value)}),time.addEventListener("touchend",()=>{setPrices(+time.value)});