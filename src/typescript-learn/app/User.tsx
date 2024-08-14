"use client"
//1st way
// import React from 'react'

// const User = (props:{name:string;age:number}) => {
//   return (
//     <div>
//       <h1>
//         {props.name} is {props.age} years old
//       </h1>
//     </div>
//   )
// }

// export default User
//second way
// import React from 'react'
// //either type or interface
// // type UserProps = {
// //     name:string;
// //     age:number;
// // }
// interface UserProps{
//     name:string;
//     age:number;
// }
// const User = (props:UserProps) => {
//   return (
//     <div>
//       <h1>
//         {props.name} is {props.age} years old
//       </h1>
//     </div>
//   )
// }

// export default User
//thirdway destuctring

//either type or interface
// type UserProps = {
//     name:string;
//     age:number;
// }
//destructuring way
// interface UserProps{
//     name:string;
//     age:number;
// }
// const User = ({name,age}:UserProps) => {
//   return (
//     <div>
//       <h1>
//         {name} is {age} years old
//       </h1>
//     </div>
//   )
// }
// export default User
//chikdern types
// type Cil = {
//     children:ReactNode;
// }
// import React, { ReactNode } from 'react'
// const User = ({children}:Cil) => {
//   return (
//     <div>
//       {children}
//     </div>
//   )
// }
// export default User
//alternative way to define props through fc
import React, { FC } from 'react'
type UserShape = {
    name:string;
    age:number;
}
//this is generics
const User:FC<UserShape> = ({name,age}) => {
  return (
    <div>
     {name} is {age} years old
    </div>
  )
}
export default User
