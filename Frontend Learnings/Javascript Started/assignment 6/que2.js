let uniqueCharExtracter=function(str){
    let ans="";
    let arr=[];
    for(let i=0; i<str.length; i++)
    {
        if(!arr.includes(str[i]))
        {
           arr.push(str[i]);
           ans+=str[i];
        }
    }
    console.log(ans);
}
uniqueCharExtracter("aaabbcddddeefffhhhgg");