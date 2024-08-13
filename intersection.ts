//Intersection in type script
type basir={
    name:string,
    age:number
}
type emp = {
    id:string,
    nums:number
}
type neww =  basir & emp;
// const orobj :basir &emp = {
//     name:"Basir Khan",
//     age:88,
//     id:"123",
//     nums:123
// }
const orobj :neww={
    name:"Basir Khan",
    age:88,
    id:"123",
    nums:123
}
console.log(orobj);