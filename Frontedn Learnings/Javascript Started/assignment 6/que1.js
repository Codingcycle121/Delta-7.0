let largeNum=function(arr,num){
    let newArr=[];
    for(let i=0; i<arr.length; i++)
    {
       if(arr[i]>num)
       {
         newArr.push(arr[i]);
       }
    }
    return newArr;
}

let arr=[3,2,1,6,4,7,8,4,9,11];
let num=11;
console.log(largeNum(arr,num));