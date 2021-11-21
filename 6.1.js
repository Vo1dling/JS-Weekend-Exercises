function mumble(string){
    let strArray = Array.from(string)
    let accumstr = []
    accumstr = strArray.map (function (character,index){
       return character.toUpperCase() + character.repeat(index)
    })
    accumstr = accumstr.join('-')
    return accumstr
}
console.log(mumble('abcd'))