function basicMath(operation,value1,value2){
    if(operation.toString() === '+' || operation.toLowerCase() === 'addition'){
        return (value1 + value2)
    }
    else if(operation.toString() === '-' || operation.toLowerCase() === 'deduction'){
        return (value1 - value2)
    }
    else if(operation.toString() === '*' || operation.toLowerCase() === 'multplication'){
        return (value1 * value2)
    }
    else if(operation.toString() === '/' || operation.toLowerCase() === 'division'){
        return (value1 / value2)
    }
}
console.log(basicMath('+',1,2))