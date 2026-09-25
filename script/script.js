function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}


let numberOne;
let numberTwo;
let operator="";

function operate(a,b,operator){
    if(operator==="+"){
        return add(a,b);
    }else if(operator==="-"){
        return subtract(a,b);
    }else if(operator==="*"){
        return multiply(a,b);
    }else{
        return divide(a,b);
    }
}

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

buttons.forEach(button =>{
    button.addEventListener("click",()=>{
        if(button.textContent==="="){
            if(display.textContent.includes("+")){
                const numbersArray = display.textContent.split("+");
                operator = "+";
                numberOne = Number(numbersArray[0]);
                numberTwo = Number(numbersArray[1]);
                const result = operate(numberOne,numberTwo,operator);
                display.textContent = result;
            }else if(display.textContent.includes("-")){
                const numbersArray = display.textContent.split("-");
                operator = "-";
                numberOne=Number(numbersArray[0]);
                numberTwo=Number(numbersArray[1]);
                const result = operate(numberOne,numberTwo,operator);
                display.textContent = result;
            }else if (display.textContent.includes("*")){
                const numbersArray = display.textContent.split("*");
                operator= "*";
                numberOne = Number(numbersArray[0]);
                numberTwo = Number(numbersArray[1]);
                const result = operate(numberOne,numberTwo,operator);
                display.textContent= result;
            }else if(display.textContent.includes("/")){
                const numbersArray=display.textContent.split("/");
                operator = "/";
                numberOne = Number(numbersArray[0]); 
                numberTwo = Number(numbersArray[1]);
                const result = operate(numberOne,numberTwo,operator);
                display.textContent=result;

            }
            }else if(button.textContent==="Clear"){
            display.textContent="";
            operator="";
            }else if (
            button.textContent === "+" ||
            button.textContent === "-" ||
            button.textContent === "*" ||
            button.textContent === "/"
            ){
            if(operator === ""){
            operator= button.textContent;
            numberOne = Number(display.textContent);
            display.textContent = display.textContent + operator;
            }else{
            const oldOperator = operator;
            const numbersArray = display.textContent.split(oldOperator);
            numberTwo = Number(numbersArray[1]);
            const result = operate(numberOne,numberTwo,oldOperator);
            numberOne = result;
            operator = button.textContent;
            display.textContent = result + operator;
            
        }

    }else{
         display.textContent= display.textContent + button.textContent;
        }
        
    
        
    });   
});