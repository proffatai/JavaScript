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

//let's add some new properties the object of the class
person2.gender="female" // method 1
person2['Marital status']=0  // method 2

person2.display()
console.log(`With a gender of ${person2.gender} and a marital status of `+person2['Marital status'])
console.log("My total attributes of the class is "+Persons.length)


//deleting some attributes of the object
delete[person2.myage]
person2.display()