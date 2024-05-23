let str="";
let n=5;
for(let i=0;i<n;i++){
    if(i<=n){
        str=str+"*";
    }
    for(let j=0;j<i;j++){
        if(j==i-1){
            str = str+"*";
        }
        else{
            str = str+ "1"
        }
        str=str+" ";
    }
    str=str+"\n";
}


// down
for(let i=0;i<n;i++){
    if(i<=n){
        str=str+"*";
    }
    for(let j=0;j<n-i-1;j++){
        if(j==n-i-2){
            str = str+"*";
        }
        else{
            str=str+"1"
        }
        str=str+" ";
    }
    str=str+"\n";
}
console.log(str)