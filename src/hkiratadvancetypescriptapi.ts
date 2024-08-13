interface User{
    name:string,
    email:string,
    age:number,
    password:string
}
const ageSum= (u1:User,u2:User):number=>{
    return u1.age+u2.age;
}
const user1:User={
    name:"Basir",
    email:"jshsu",
    age:55,
    password:"jshsu"
}
const user2:User={
    name:"Basir",
    email:"jshsu",
    age:55,
    password:"jshsu"
}
console.log(ageSum(user1,user2));
//Pick in type script
type PickSome = Pick<User,"name"|"email">
const obju:PickSome={
    name:"Bassir",
    email:"qkkjkdj",
}
console.log(obju);
//partial in type script
interface bUser {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};
const objb:bUser={
    name:"Basir",
    age:"55",
    email:"jshsu",
    password:"jshsu",
    id:"jshsu"
}
console.log(objb);
type ObtionalBuser=Partial<bUser>;
const objb2:ObtionalBuser={

} // allthings are worked beacuse all properties now optinal
console.log(objb2);
//READONLY in type scrip
interface ruser{
    readonly name:string,
    age:number
}
const objr:ruser={
    name:"Basir",
    age:55
}
//objr.name="khan" //error it gives us an error because we can not change the value of readonly property
//Records and Map in typescript
type Userrr={
    name:string,
    age:number
}
type ObjKeyuu = {
    [key:string]:Userrr
}
const objkii:ObjKeyuu={
    "user1":{
        name:"Basir",
        age:55
    },
    "user2":{
        name:"Basir",
        age:55
    }
}
console.log(objkii);
//with records
type ObjkeyRecord = Record<string,Userrr>
type ObjkeyRecord2 = Record<number,{name:string}>
const objkii2:ObjkeyRecord2={
    1:{
        name:"Basir"
    },
    2:{
        name:"Basir"
    }
}
console.log(objkii2);
const onj2:ObjkeyRecord={
    "dd":{name:"dkdhid",age:55},
}
console.log(onj2);
//map in typescript
const mmap = new Map<string,Userrr>();
mmap.set("user1",{name:"Basir",age:55});
mmap.set("user2",{name:"Basir",age:55});
console.log(mmap);
//exclude in typescript
type EventType = "click"|"scroll"|"mouseover";
type dropEvent = Exclude<EventType,"scroll">
//const drop:dropEvent = "scroll" //it gives us an error because we exclude the scroll event
//type inference in zod
// const drop:dropEvent = "click" //it works fine
// const userProfileSchema = z.object({
//     name: z.string().min(1, { message: "Name cannot be empty" }),
//     email: z.string().email({ message: "Invalid email format" }),
//     age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
//   });
