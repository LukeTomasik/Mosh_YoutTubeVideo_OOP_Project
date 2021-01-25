/*
        function Person(salary,name,age)  {
                this.personsName = name,
                this.personsAge = age,
                this.personsSalary = salary

        }

        function Sushi(roll,fish,dippingSauce) {
            this.roll = roll
            this.fish = fish
            this.dippingSauce = dippingSauce

            this.order = function() {
                console.log(`I want ${this.roll}, and also ${this.dippingSauce}... that magical Sauce!!`)
            }
        }



        let dragonRoll = new Sushi('Dragon Roll','tuna','Spicy mayo')
        let spicyTuna= new Sushi('SpicyTuna','tuna','Soy')
        let californiaRoll = new Sushi('california Roll','salmon','')

        console.log(dragonRoll)


        const adult = {
            baseSalary: 30000,
            age: 25,

            whoAmI: function () {
                console.log(`Hi, my name is ${this.name}`)
            }
        }
        console.log(adult.name)
        console.log(adult.whoAmI())




        const person = {
            baseSalary: 30000,
            name:'John',
            age: 25,

            whoAmI: function () {
                console.log(`Hi, my name is ${this.name}`)
            }
        }
        console.log(person.name)
        console.log(person.whoAmI())
*/



// function that creates a factory - object constructors

// const Circle1= new Function('radius', `
//     this.radius = radius,
//     this.draw = function() {
    //     console.log('Draw!')
    //     }`
    // )
    
    
    
    /*
    // HEY GO BACK TO THIS SECTIon 28:00 on YT video
    Circle.call({},1)
    Circle.apply({}, [1,2,3])
    
    const another = new Circle(1)
    
    // NEW SECTION
    
    let obj  = {
        value: 10
    }
    
    function increase(obj) {
        obj.value++
    }
    
    increase(obj)
    console.log(obj)
    */


/*
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log(`draw!`)
        }
    }
}

// constructor function
function Circle(radius) {
    
    let color = 'red'


    this.radius = radius
    // REWATCH from 45min
    let defaultLocation = {
        x:0,
        y:0
    }
    this.draw = function() {
        this.computeOptimumLocation(.1)
        console.log('Draw!')
    }
    this.computeOptimumLocation = function(factor) {
      //...
    }
}
const circle = new Circle(10)

circle.computeOptimumLocation(.1)
circle.draw()




for (let key in circle) {
   
    if(typeof circle[key] !== 'function')
    console.log(key,circle[key])
}

const keys = Object.keys(circle)
console.log(keys)
circle.location = {
    x:1
}

// const propertyName = 'center-location'
// circle[propertyName] = {x:1}

// delete circle['location']
*/






/*



*/

function StopWatch() {
    this.duration = 0
    this.init = 0
    this.end = 0
    // this.addTime= 0

    this.start = function () {
        if(this.init > 0) {
            // this.addTime = this.init;
            console.log(`start time has been alrdy running`)
        } else {
            this.init = new Date().getTime() 
        }
    }

    this.stop = function () {
        if (this.init === 0) {
            // this.duration = ((this.end - this.addTime)/1000)
            console.log(`Stop Watch hasnt been started`)
        } else {
            this.end = new Date().getTime()
            this.duration += ((this.end - this.init)/1000)
                // if statement in one line below
            // if (this.duration === 0)
            //     this.duration = 0 + ((this.end - this.init)/1000)
            // else if (this.duration > 0) {
            //     this.duration += ((this.end - this.init)/1000)
            // }
            this.init = 0
            
        }
    }
    this.reset = function () {
        this.init = 0
        this.duration = 0
        this.end = 0
    }

}






