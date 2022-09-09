let scoreEl = document.getElementById("score")
let scoreCount = 0

let score1El = document.getElementById("score1")
let score1Count = 0

function btn11(){
    scoreCount +=1
    scoreEl.textContent = scoreCount
    
}

function btn22() {
    scoreCount +=2
    scoreEl.textContent = scoreCount
}

function btn33() {
    scoreCount +=3
    scoreEl.textContent = scoreCount
}

function gbtn1() {
    score1Count +=1
    score1El.textContent = score1Count
}

function gbtn2() {
    score1Count +=2
    score1El.textContent = score1Count
}

function gbtn3() {
    score1Count +=3
    score1El.textContent = score1Count
}