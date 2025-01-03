function somar(...valores){
    let res=0
    for(v of valores){
        res+=v
    }
    return res
}

console.log(somar(10,20))