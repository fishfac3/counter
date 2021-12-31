const incrementButton = document.getElementById('increment-btn')
const decrementButton = document.getElementById('decrement-btn')
const resetButton = document.getElementById('save-btn')
let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let count = 0

incrementButton.addEventListener('click', function() {
    count += 1
    countEl.textContent = count 
})

decrementButton.addEventListener('click', function() {
    count -= 1
    countEl.textContent = count
})

resetButton.addEventListener('click', function() {
    saveEl.textContent += ` ${count} -`
    count = 0
    countEl.textContent = 0 
})

