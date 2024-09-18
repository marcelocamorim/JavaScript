let num = 0;

while(num<20){
    if(num%2==0){
        num++
        continue
    }else if(num>11){
        break
    }
    console.log(num)
    num++
}