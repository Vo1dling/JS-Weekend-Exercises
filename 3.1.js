function growth(p0,percent,aug,p){
    let i = 0;
    let percentage = percent/100
    while(p0 < p){
    p0+=(p0*percentage+aug)
    i++
    }
    return(i)
}
console.log(growth(1000,2,50,1200))
