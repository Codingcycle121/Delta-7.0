let number=2811147896325;
let count=0;
while(number!=0)
{
    count++;
   number=parseInt(number/10);
}
console.log(count);