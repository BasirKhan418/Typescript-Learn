//OOPS IN TYPESCRIPT
//class types in typescript
class Basiri {
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
}
let obj1 = new Basiri("Basir Khan",88);
console.log(obj1);
//access modifier in typescript classes
class Bk{
    public name:string;
    private age:number;
    protected email:string;
    constructor(name:string,age:number,email:string){
        this.name = name;
        this.age = age;
        this.email = email;
    }
}
let obj2 = new Bk("Basir Khan",88,"khanbasir8@gmail.com");
console.log(obj2.name);
//console.log(obj2.age); //it gives us an error because age is private
//console.log(obj2.email); //it gives us an error because email is protected //it is only accessible in derived classes