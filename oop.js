// Using object literals

const person ={
    names:"Abiodun",
    age:32,
    location:{
        longitude: 000,
        latitude:000
    },
    updateInfo: function (newname, newage,newloc){
        this.age=newage
        this.names=newname
        this.location=newloc

        console.log("I have updated my information")
        console.log("I am "+this.names+" at the age of "+this.age)
        console.log('Here is my new location:',this.location)
    },
    display:function(){
        console.log("Here is my information")
        console.log("I am " + this.names + " at the age of " + this.age)
        console.log('Here is my location:', this.location)
    }
}
person.display()
person.updateInfo("Amarachi", 18, [-233,321])
person.display()

console.log()
console.log()
// Method 2: Using constructors

function Person(name,age,location){ 
// in constructor method, we can use this to specify the attributes and use the = rather than the : for assignment
//Also we used ; or nothing to separate two attributes instead , when compared to object literals
        this.myname = name
        this.myage = age
        this.mylocation = {
            longitude: location[0],
            latitude: location [1]
        }
        this.updateInfo = function (Name, Age, Mylocation) {

            this.myname = Name
            this.myage = Age
            this.mylocation = Mylocation
            console.log("I have updated my information")
            console.log("I am " + this.myname + " at the age of " + this.myage)
            console.log('Here is my new location:', this.mylocation)
        }
        this.display=()=>{
            console.log("Here is my information")
            console.log("I am " + this.myname + " at the age of " + this.myage)
            console.log('Here is my location:', this.mylocation)
        }
    }

const person1 = new Person("Ibrahim",32,[32,12]) //creating object using the function name
person1.display()
console.log();
person1.updateInfo("Fatai Abiodun", 27, [032,222])
console.log();
person1.display()


console.log()
console.log()

// Method 3: JavaScript classes

class Persons{
    
    constructor(name,age,location){ 
            this.myname = name
            this.myage = age
            this.mylocation = {
                longitude: location[0],
                latitude: location [1]
            }
            this.updateInfo = function (Name, Age, Mylocation) {
    
                this.myname = Name
                this.myage = Age
                this.mylocation = Mylocation
                console.log("I have updated my information")
                console.log("I am " + this.myname + " at the age of " + this.myage)
                console.log('Here is my new location:', this.mylocation)
            }
            this.display=()=>{
                console.log("Here is my information")
                console.log("I am " + this.myname + " at the age of " + this.myage)
                console.log('Here is my location:', this.mylocation)
            }
        }
    }
    
    const person2 = new Persons("Islamiyat",21,[320,112])
    person1.display()
    console.log();
    person1.updateInfo("Stargirl", 24, [1032,1222])
    console.log();
    person1.display()
    