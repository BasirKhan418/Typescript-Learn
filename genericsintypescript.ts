//generics in typescript
function UniqueData<T>(x:T):T{
    return x ;
}
console.log(UniqueData<string>("Basir Khan"));
console.log(UniqueData<number>(55))
//second example
const un= <Ti>(x:Ti):[Ti,Ti]=>{
return [x,x]
}
console.log(un<string>("Basir Khan"));