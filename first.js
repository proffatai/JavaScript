console.log("Hello world")
console.log("Hello world 2")

var myname ="Fatai"; // variable declaration
const age = 21
let height = 23.22
/* This is a multi line comment */
console.log(myname+ " has height of " + height + " and age is "+age)

//Another way of creating strings using tilde

const message = `Hello, ${myname} ! `
console.log(message)

console.log(typeof height)

let unde;

console.log(unde)
console.log("Happy man")


//Objects in javascripts

let person ={
    name:"ibrahim",
    age:32
}
console.log(typeof person)
console.log(person)
console.log(person.name)


console.log(32 === (30+2))

for (let i=0; i<11 ; i++){
    if (i%2==0)
        {console.log(i)}
}

// functions in JS

let result=function Addition (a,b)
{
    return a+b;
}

console.log("Sum of these numbers is "+result(2,2))

const add =(a1,b1)=>{
    return a1+b1;
}

console.log(add(22,22))

const greet =(a,b)=>{console.log("Hello World"+(a+b))}
greet(2,3)


const gret = ()=>{
    console.log("Hello")
}

console.log(Boolean(true)) 

const sage= [3,4,5,6,7]

for (num of sage){
    console.log(num**num)
}


for ( num in sage){
    console.log(num*num)
}