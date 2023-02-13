const time = document.querySelector('#time');
const prices = document.querySelectorAll('.price');

const basePrices = [19.99, 24.99, 39.99]

time.value = 2

if (window.innerHeight > 733) {
   document.body.style.height = `${window.innerHeight}px`
}

const setPrices = val => {
   console.log(val);
   prices.forEach((p, i) => {
      p.textContent = `${val === 1 ? ((basePrices[i] * 10) + 0.09).toFixed(2) : basePrices[i]}`
   });
}

time.addEventListener('click', () => {
   setPrices(+time.value)
})
time.addEventListener('touchend', () => {
   setPrices(+time.value)
})
window.addEventListener('resize', () => {
   if (window.innerHeight > 733) {
      document.body.style.height = `${window.innerHeight}px`
   }
})