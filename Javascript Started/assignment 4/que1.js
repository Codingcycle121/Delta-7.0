let arr=[1,2,3,4,5,6,2,3];
let num=3;
while(arr.includes(num))
{
    arr.splice(arr.indexOf(num),1);
}
console.log(arr);