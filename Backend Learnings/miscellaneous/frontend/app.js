class c1{
    c1(name,marks)
    {
        this.name=name;
        this.marks=marks;
    }
}
class c2 extends c1{
    name=c1.name;
    marks=c1.marks;
    printName = () => {
      return this.name;
    }
    printMarks= ()=>{
        return this.marks;
    }
}
let obj=new c1();
let obj1=new c2();
obj1.c1("krsihna",100);
console.log(obj1);
obj1.c1("parag",97);
console.log(obj1);