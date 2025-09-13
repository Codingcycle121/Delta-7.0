function doubleAndReturnArgs(arr, ...args){
   let doubledArr=args.map(el=> el*2);
   let newArr=[...arr,...doubledArr];
   console.log(newArr);
};
doubleAndReturnArgs([1,2,3,4,5],5,5,6,7,8,9);