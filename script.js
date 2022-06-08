function clear(){
    alert("yes")
    currentOperation = null;
    currentNum = null;
    result.value = "";
}
let result = document.getElementById("result");

let currentOperation;

function addChar(currentChar){
    result.innerHTML += parseInt(currentChar);
}

function currentOp(operation){
    if(result.innerHTML == null) return;
    currentOperation = operation;
    currentNum = parseInt(result.innerHTML);
    result.innerHTML = result.value.slice(-1);
    result.innerHTML = result.value.slice(0,-1);
}

function removeAll(){
    result.innerHTML = result.value.slice(-1);
    result.innerHTML = result.value.slice(0,-1);
}


function removeChar(){
    result.innerHTML = result.value.slice(0,-1);
}

function calculate(){
    switch(currentOperation){
        case '+':
            result.innerHTML = parseInt(result.innerHTML) + currentNum;
        break;
        case '-':
            result.innerHTML = parseInt(result.innerHTML) - currentNum;
        break;
        case '*':
            result.innerHTML = parseInt(result.innerHTML) * currentNum;
        break;
        case '/':
            result.innerHTML = parseInt(result.innerHTML) / currentNum;
        break;
    }
}