"use strict";
const objii = {
    name: "Basir khan",
    age: 55,
    bike: "bmw"
};
console.log(objii);
const FunctionofFunctor = (nam, age) => {
    console.log(nam, age);
};
FunctionofFunctor("Basir Khan", "88");
const objiifun = {
    name: "Basir Khan",
    age: 88,
    email: "khanbasir5@gmail.com",
    fun(name, funtype) {
        console.log(name, funtype);
    }
};
objiifun.fun("Basir Khan", "coding");
const bgmiObj = {
    name: "Basir",
    age: 55,
    greet(name) {
        console.log("Welcome to our lobby " + name);
    },
    email: "ab@gmail.com",
    playerid: 123456
};
console.log(bgmiObj);
bgmiObj.greet("Basir Khan");
class NewModel {
    start() {
        console.log("Car is started");
    }
    stop() {
        console.log("car is stopped");
    }
}
let md = new NewModel();
md.start();
md.stop();
const box = {
    bid: "557SKSJHSG",
    boxname: "BASIRBOX",
    start() {
        return "Box is started";
    },
    stop() {
        console.log("Box is stopped");
    }
};
console.log(box.start);
console.log(box);
box.stop();
