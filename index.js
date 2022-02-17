// declaring variables 
var countEl = document.getElementById("count-el")
var count = 0

// increment function 
function increment() {
    count = count + 1
    countEl.innerText = count
    return(count)
}

function reset() {
    count = 0
    countEl.innerText = count
    return(count)
}