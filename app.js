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

}
appendNumber (number){
    this.currentOperand = number

}
chooseOperation (operation){

}

 compute(){

 }   
 
 updateDisplay(){
    this.currentOperandTextElement.innerText = this.currentOperand
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

 