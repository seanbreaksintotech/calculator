class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
}
clear(){
this.currentOperand = ''
this.previousOperand = ''
this.operation = undefined

}
delete() {
    this.currentOperand = this.currentOperand.toString().slice(0,-1)

}
appendNumber (number){
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
}
chooseOperation (operation){
    if(this.currentOperand === '')return
    if(this.previousOperand !==''){
        this.compute()
    }
this.operation = operation
this.previousOperand = this.currentOperand
this.currentOperand = ""
}

 compute(){
     let computation
     const prev = parseFloat(this.previousOperand)
     const current = parseFloat(this.currentOperand)
     if (isNaN(prev)|| isNaN(current)) return
     switch (this.operation){
        case '+':
            computation = prev + current
            break
        case '-':
            computation = prev - current
            break
        case 'x':
            computation = prev * current
            break
        case '÷':
            computation = prev + current
             break
           default :
           return         
        
     }
this.currentOperand = computation
this.operation = undefined
this.previousOperand = ''

 }   
 getDisplayNumber(number){
     const stringNumber = number.toString()
     const integerDigits = parseFloat(stringNumber.split ('.')[0])
     const decimalDigits = stringNumber.split('.')[1]
     let integerDisplay = ''
     if (isNaN(integerDigits)) {
         integerDisplay =''
        
     }else {
         integerDisplay = integerDigits.toLocaleString('en',{
             maximumFractionDigits :0})
         }
         if (decimalDigits != null){
             return `${integerDisplay}.${decimalDigits}`
         }else {
             return integerDisplay
         }
     }

 
 
 updateDisplay(){
    this.currentOperandTextElement.innerText = 
    this.getDisplayNumber(this.currentOperand)
    if(this.operation != null){
    this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`

 }  else {
     this.previousOperandTextElement.innerText = ''
 }
}
}

const numberBttns = document.querySelectorAll('[data-number]')
const operationBttns = document.querySelectorAll('[data-operation]')
const equalsButtn = document.querySelector('[data-equals]')
const deleteButtn = document.querySelector('[data-delete]')
const allclearButtn = document.querySelector('[data-allclear]')
const previousOperandTextElement = document.querySelector('[data-prevop]')
const currentOperandTextElement = document.querySelector('[data-currentop]')


const calculator = new Calculator (previousOperandTextElement, currentOperandTextElement)

numberBttns.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})


operationBttns.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButtn.addEventListener('click', button => {
    
    calculator.compute()
    calculator.updateDisplay()
})

allclearButtn.addEventListener('click', button => {
    
    calculator.clear()
    calculator.updateDisplay()
})
 
deleteButtn.addEventListener('click', button => {
    
    calculator.delete()
    calculator.updateDisplay()
})