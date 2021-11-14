function toWeirdCase(string){
    string = string.toLowerCase().split(' ')
    for(let i = 0; i < string.length; i++){
        string[i] = string[i].split('')

    for(let o = 0; o < string[i].length; o++){
        if(o % 2 == 0){
            string[i][o] = string[i][o].toUpperCase()
        }
    }
    string[i] = string[i].join('')
    }
    return(string.join(' '))
}
console.log(toWeirdCase('string'))