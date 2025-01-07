function* contator(){
    let i=0
    while(true)
        yield   i++
}

const itc=contator()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)