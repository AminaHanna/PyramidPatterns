let str=""
let n=8
for(let i=0;i<n;i++){
    if(i<=n){
        str=str+"*"
    }
    for(let j=0;j<i;j++){
        if(j==i-1){
            str = str+"*"
        }
        str=str+" "
    }
    str=str+"\n"
}
for (let k = 0; k < n+1; k++) {
    str = str + "*"
}
console.log(str)