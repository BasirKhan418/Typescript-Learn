//Object Types in Typescript
//Object annotation
const obj :{firstname:string;lastname:string;age:number}={
    firstname:"basir",
    lastname:"khan",
    age:18 //if i commentout it gives us an error
}
console.log(obj)
//Fuctions that returns object
const bkfunc = (name:string,age:number):{name:string;age:number,islIFT:boolean}=>{
    return{
        name:name,
        age:age,
        islIFT:true
    }
}
console.log(bkfunc("basir",85));