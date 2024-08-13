//Type Alias in typescript
type User = {
    name:string,
    age:number
}
const obji:User={
    name:"Basir Khan",
    age:88,
}
console.log(obji);
//optional properties in typescript
type Basir = {
    name:string,
    email?:string,
    age:number
}
const obji1:Basir={
    name:"basir",
    age:55,
    //here email is optional
}
console.log(obji1);
//Readonly properties in typescript
type rs = {
    name:string,
    readonly bol:string
}
let bk2 : rs= {
    name:"dlkd",
    bol:"hindi"
}
// bk2.bol = "english" //it gives us an error because it is readonly object
console.log(bk2)