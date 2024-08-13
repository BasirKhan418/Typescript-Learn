//unions in typescript // unions alloeing multiple types
// let myvar:number| string = "basir";
 let myvar:number| string = 55;
 //let myvar:number| string = true; // it gaves us an error
type oh = {
    name:string,
    age:number
}
type ha = {
    oid:number,
    bid:string
}
// let catobj:oh | ha = {
//     name:"pussy",
//     age:55
// }
let catobj : oh|ha={
    oid:55,
    bid:"6dldkiuedi"
}
console.log(catobj)
let normalarr :(string | number)[] = ["hello",5,6]
console.log(normalarr);

