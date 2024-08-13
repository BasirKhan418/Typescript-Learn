//interfaces are used to define the structure of an object or shape of a function etc.
interface Basr{
    name:string,
    age:number,
    bike:string
}
const objii:Basr={
    name:"Basir khan",
    age:55,
    bike:"bmw"
}
console.log(objii);
// //interface with functions
interface Functor {
    (name:string,age:string):void
}
const FunctionofFunctor:Functor=(nam,age)=>{
console.log(nam,age)
}
FunctionofFunctor("Basir Khan","88");
//interface with objects and functions
interface bkl{
    name:string,
    age:number,
    email:string,
    fun(name:string,funtype:string):void
}
const objiifun:bkl={
    name:"Basir Khan",
    age:88,
    email:"khanbasir5@gmail.com",
    fun(name,funtype){
        console.log(name,funtype)
    }
}
objiifun.fun("Basir Khan","coding");
////interface extends
interface bgmi{
    name:string,
    age:number
    greet(name:string):void
}
interface bgmipl extends bgmi{
    email:string
    playerid:number
}
const bgmiObj:bgmipl={
    name:"Basir",
    age:55,
    greet(name){
        console.log("Welcome to our lobby " + name)
    },
    email:"ab@gmail.com",
    playerid:123456
}
console.log(bgmiObj)
bgmiObj.greet("Basir Khan")
//interfaces in class based components

interface Car{
    start():void,
    stop():void
}
class NewModel implements Car{
    start(): void {
        console.log("Car is started")
    }
    stop(): void {
        console.log("car is stopped")
    }
}
let md = new NewModel();
md.start();
md.stop();
//Declaration Merging
//you can rewrite the interface this is called also interface opening
interface Box{
    bid:string,
    start():string
}
interface Box{
    boxname:string,
    stop():void
}
const box:Box={
    bid:"557SKSJHSG",
    boxname:"BASIRBOX",
    start(){
        return "Box is started"
    },
    stop(){
        console.log("Box is stopped")
    }
}
console.log(box.start)
console.log(box);
box.stop();