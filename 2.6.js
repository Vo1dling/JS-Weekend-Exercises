function centuryFromYear(year){
    if(year % 100 != 0){
        
        return (Math.floor(year/100))
    }
    else if (year % 100 === 0){
        return(year/100)
    }
}
console.log(centuryFromYear(1890))