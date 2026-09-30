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
let justCalculated = false;

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
                if (numbersArray[1]===""){
                    return;
                }
                numberOne = Number(numbersArray[0]);
                numberTwo = Number(numbersArray[1]);
                const result = operate(numberOne,numberTwo,operator);
                const roundResult = Math.round(result * 10000) / 10000;
                display.textContent = roundResult;
                 numberOne = undefined;
                 numberTwo = undefined;
                 operator = "";
            }else if(display.textContent.includes("-")){
                const numbersArray = display.textContent.split("-");
                operator = "-";
                numberOne=Number(numbersArray[0]);
                numberTwo=Number(numbersArray[1]);
                const result = operate(numberOne,numberTwo,operator);
                const roundResult = Math.round(result * 10000) / 10000;
                display.textContent = roundResult;
                 numberOne=undefined;
                 numberTwo= undefined;
                 operator = "";
            }else if (display.textContent.includes("*")){
                const numbersArray = display.textContent.split("*");
                operator= "*";
                numberOne = Number(numbersArray[0]);
                numberTwo = Number(numbersArray[1]);
            
                const result = operate(numberOne,numberTwo,operator);
                const roundResult = Math.round(result * 10000) / 10000;
                display.textContent= roundResult;
                 numberOne = undefined;
                 numberTwo = undefined;
                 operator = "";
            }else if(display.textContent.includes("/")){
                const numbersArray=display.textContent.split("/");
                operator = "/";
                numberOne = Number(numbersArray[0]); 
                numberTwo = Number(numbersArray[1]);
                if (numberTwo ===0){

                     display.textContent = "ERROR!";
                     numberOne = undefined;
                     numberTwo = undefined;
                     operator = "";
                     justCalculated = false;

                     return;

                }
                const result = operate(numberOne,numberTwo,operator);
                const roundResult = Math.round(result * 10000) / 10000;
                display.textContent=roundResult;
                 numberOne = undefined;
                 numberTwo = undefined;
                 operator = ""; 
                 

            }
                justCalculated = true;
            }else if(button.textContent==="Clear"){
            display.textContent="";
            operator="";
            numberOne = undefined;
            numberTwo = undefined;
            justCalculated = false;
            }else if (
            button.textContent === "+" ||
            button.textContent === "-" ||
            button.textContent === "*" ||
            button.textContent === "/"
            ){
                if(justCalculated===true){
                    numberOne=Number(display.textContent);
                    operator=button.textContent;
                    display.textContent=display.textContent+operator;
                    justCalculated=false;


                }else if(operator === ""){
                    operator= button.textContent;
                    numberOne = Number(display.textContent);
                    display.textContent = display.textContent + operator;
                    }else{
                    const oldOperator = operator;
                    const numbersArray = display.textContent.split(oldOperator);
                    if (numbersArray[1]===""){
                    return;
                    }
                    numberTwo = Number(numbersArray[1]);
                    const result = operate(numberOne,numberTwo,oldOperator);
                    const roundResult = Math.round(result * 10000) / 10000;
                    numberOne = roundResult;
                    operator = button.textContent;
                    display.textContent = roundResult + operator;
                }

            }else if(button.textContent==="."){
                if (operator === "") {

                    if (display.textContent.includes(".")) {
                        return;
                    }

                    display.textContent = display.textContent + button.textContent;

                } else {

                    const numbersArray = display.textContent.split(operator);

                    if (numbersArray[1].includes(".")) {
                        return;
                    }

                     display.textContent = display.textContent + button.textContent;
                }
            }else if(button.textContent==="Backspace"){

                display.textContent = display.textContent.slice(0,-1);
        }else{
            if (display.textContent === "ERROR!") {        
            display.textContent = button.textContent;     
        } else {
            if (justCalculated === true) {    
                display.textContent = button.textContent;
                justCalculated = false;
            }else{
                display.textContent = display.textContent + button.textContent;
            }
                
    }
}
        
    
        
    });   
});

document.addEventListener("keydown", (event) => {
    buttons.forEach(button=>{
        if(button.textContent===event.key){
            button.click();
        }
    });
});