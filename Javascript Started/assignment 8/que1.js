let finalArr=(arr)=>{
    let squareArr= arr.map((el)=>(el*el));
    let final=squareArr.reduce((sum,el)=>(sum+el));
    console.log(final/arr.length);
};
finalArr([1,2]);