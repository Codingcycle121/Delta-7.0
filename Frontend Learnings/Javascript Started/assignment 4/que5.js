let arr=[54,34,36,2,35,66,26,122,52,62,762,66,23,66,21,65];
let max=-1;
for(let i=0; i<arr.length; i++)
{
    if(max<arr[i])
    {
        max=arr[i];
    }
}
console.log(max);