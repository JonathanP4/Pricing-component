const time = document.querySelector('#time');
const prices = document.querySelectorAll('.price');
const sliderThumb = document.querySelector('.slider-thumb')

const basePrices = [19.99, 24.99, 39.99]

if (window.innerHeight > 733) {
   document.body.style.height = `${window.innerHeight}px`
}

const setPrices = cond => {
   console.log(cond);
   prices.forEach((p, i) => {
      p.textContent = `${cond === true ? ((basePrices[i] * 10) + 0.09).toFixed(2) : basePrices[i]}`
   });
}
time.addEventListener('click', () => {
   sliderThumb.classList.toggle('slider-thumb--active')
   const cond = sliderThumb.classList.contains('slider-thumb--active')

   setPrices(cond)
})
window.addEventListener('resize', () => {
   if (window.innerHeight > 733) {
      document.body.style.height = `${window.innerHeight}px`
   }
})