// declaring variables 
var saveEl = document.getElementById("save-el")
var welcome = document.getElementById("welcome-message")
var countEl = document.getElementById("count-el")
var count = 0
var greeting = "Welcome"
var userName = "User"


welcome.innerText = greeting + ", " + userName + "!"
welcome.innerText += ":-)"

// increment function 
function increment() {
    count += 1
    countEl.innerText = count
    return(count)
}

// reset fuction
function reset() {
    count = 0
    countEl.innerText = count
    return(count)
}

// save function 
function save() {
    var countStr = count + " - "
    saveEl.innerText += countStr
}
