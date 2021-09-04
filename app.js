let heldValue = null

let heldOperation = null

let nextValue = null


// Two

function setHeldOperation(operation) {
    if (heldOperation !== null) {
        heldValue = heldOperation (heldValue, nextValue)
    } else if (nextValue !== null && heldOperation === null){
        heldValue = nextValue
    }
    heldOperation = operation 
    nextValue = null
}


function showValue(location, value) {
    if (value === null) {
        $(location).text('')
    } else {
        $(location).text(Number(value))
    }
}


function updateDisplay() {
    showValue('.held-value', heldValue)
    showValue('.next-value', nextValue)

    
}

$('.digits button').click(function () {
    if (nextValue === null){
        nextValue = 0
    } 
    nextValue += $(this).text()
    updateDisplay();
})

$('.add').click(function (){
    setHeldOperation(add)
    $('.next-operation').text('+')
    updateDisplay()
})

$('.subtract').click(function (){
    setHeldOperation(subtract)
    $('.next-operation').text('-')
    updateDisplay()
})

$('.multiply').click(function (){
    setHeldOperation(multiply)
    $('.next-operation').text('*')
    updateDisplay()
})

$('.divide').click(function (){
    setHeldOperation(divide)
    $('.next-operation').text('/')
    updateDisplay()
})

$('.equals').click(function (){
    setHeldOperation(null)
    $('.next-operation').text('')
    updateDisplay()
})

$('.clear-all').click(function (){
    heldValue = null
    heldOperation = null
    nextValue = null

    updateDisplay();
})

$('.clear-entry').click(function (){
    nextValue = null

    updateDisplay();
})


// Three

function add(x, y) {
    return Number(x) + Number(y)
}

function subtract(x, y) {
    return Number(x) - Number(y)
}

function multiply(x, y) {
    return Number(x) * Number(y)
}

function divide(x, y) {
    return Number(x) / Number(y)
}

