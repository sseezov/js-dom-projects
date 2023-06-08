const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('#btn')
const color = document.querySelector('.color')

const gerRandomInteger = (array) => Math.floor(Math.random()*array.length)

btn.addEventListener('click', ()=>{
  document.body.style.backgroundColor = colors[gerRandomInteger(colors)]
  color.textContent = colors[2]
})