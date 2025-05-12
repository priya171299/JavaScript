let myDate = new Date();
// console.log(myDate);//2025-05-12T09:43:11.790Z
// console.log(myDate.toString());//Mon May 12 2025 09:46:05 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Mon May 12 2025 
// console.log(myDate.toLocaleString());//5/12/2025, 9:48:32 AM
// console.log(typeof myDate);//oject

// console.log(typeof Math);//object








// let myNewDate = new Date(2023, 0, 23)
// console.log(myNewDate.toLocaleString());//1/23/2023, 12:00:00 AM

// let myNewDate = new Date(2023, 0, 23,5, 3)
// console.log(myNewDate.toLocaleString());//1/23/2023, 5:03:00 AM
// let myNewDate = new Date("2023-01-14")
// console.log(myNewDate.toLocaleString());//1/14/2023, 12:00:00 AM
let myNewDate = new Date("01-14-2023")
// console.log(myNewDate.toLocaleString());//1/14/2023, 12:00:00 AM




let myTimeStamp = Date.now()
// console.log(myTimeStamp);//1747044254939 milisecond
// console.log(myNewDate.getTime());//1673654400000 milisecond
// console.log(Math.floor(Date.now()/1000));//1747044856 seconds

let newDate = new Date()
// console.log(newDate.getMonth());//output : 4 it's 5th month (it start count month from 0)

// console.log(newDate.getMonth() + 1);//op: 5
// console.log(newDate.getDay());//op : 1 (it's monday)


let vab = newDate.toLocaleString('default', {weekday:"long",month: "long", year:"numeric"})
console.log(vab);//May 2025 Monday












