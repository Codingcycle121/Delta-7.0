let countVowels=function(str){
    let count=0;
    let vowel=['a','e','i','o','u'];
    for(char of str)
    {
        if(vowel.includes(char))
        {
            count++;
        }
    }
    console.log(count);
}

countVowels("hello");