let longestCountryName=function(countries){
    let max=0;
    let ans;
    for(country of countries)
    {
        if(country.length>max)
        {
            max=country.length;
            ans=country;
        }
    }
    return ans;
}

let countries=["Australia","Germany","Republic of India"];
console.log(longestCountryName(countries));