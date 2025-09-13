let max=prompt("enter a maximum number:-");
let num=Math.floor(Math.random()*max)+1;
let ans=prompt("enter your guess:-");
while(ans!=num)
{
    if(ans=="quit")
    {
        console.log("Game quitting");
        break;
    }
    else if(ans==num)
    {
        console.log(`Congratulations! your guess is correct. Correct number is ${num}`);
        break;
    }
    else if(ans>num)
    {
        alert(`number is smaller than ${ans}`);
        ans=prompt("Wrong guess! enter your guess again:-");
    }
    else if(ans<num)
    {
        alert(`number is greater than ${ans}`);
        ans=prompt("Wrong guess! enter your guess again:-");
    }
}