function mergeObjects(obj1,obj2){
     console.log({...obj1,...obj2});
};
const obj1={
    name1:"parag",
    age1:22,
    marks1:82.2,
    country1:"India"
};
const obj2={
    name:"Krishna",
    age:16,
    marks:99,
    country:"India"
};
mergeObjects(obj1,obj2);