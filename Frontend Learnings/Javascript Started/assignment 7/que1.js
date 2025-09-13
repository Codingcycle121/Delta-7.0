let arrayAverage=(arr)=>{
    let sum=0;
    for(num of arr){
        sum+=num;
    }
    return sum/arr.length;
};
console.log(arrayAverage([10,25,14,25,98,14,65,72]));