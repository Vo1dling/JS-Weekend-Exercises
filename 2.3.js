function nextSquare(num){
    if(Number.isInteger(Math.sqrt(num)) === true){
    for(var i = num+1; Number.isInteger(Math.sqrt(i)) === false; i++){
    }
    return(i)
    }
    
    else if (Number.isInteger(Math.sqrt(num)) === false){
        return (`-1`)
    }
}
let square = nextSquare(121)
console.log(square)