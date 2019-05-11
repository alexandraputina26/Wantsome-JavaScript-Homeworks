
function wantsomeStudent(nume, prenume, varsta, telefon) {
    this.nume = nume;
    this.prenume = prenume;
    this.varsta = varsta;
    this.telefon = telefon;

this.getName = function() {
        return this.nume + " " + this.prenume;
    }
this.getNumber = function() {
        return this.prenume + " are numarul " + this.telefon + ".";
    }
this.ageToRetire = function() {
        return this.prenume + ' mai are ' + (50 - this.varsta) + " ani before retiring."
    }
}

let student = new wantsomeStudent('Putina', 'Alexandra', 27, 123456)

console.log(student.getName())
console.log(student.getNumber())
console.log(student.ageToRetire())

wantsomeStudent.nationality = 'romana';

console.log(wantsomeStudent.prototype)



  // The Car and the Truck class have similar behavior and properties.
  // Rewrite them in a way such that they share those properties.

//   var Vehicle = function(driver) {
//     this.driver = driver;
//     this.speed = 0;
//     this.drive = function(mph) {
//       this.speed = mph;
//       return this.driver + ' driving at ' + mph + ' miles per hour';
//     };
//   };

//   var Car = function(driver) {
//     this.driver = driver;
//     this.speed = 0;
//     this.drive = function(mph) {
//       this.speed = mph;
//       return this.driver + ' driving at ' + mph + ' miles per hour';
//     };
//   };

//   var Truck = function(driver) {
//     this.driver = driver;
//     this.speed = 0;
//     this.cargo = [];
//     this.drive = function(mph) {
//       this.speed = mph;
//       return this.driver + ' driving at ' + mph + ' miles per hour';
//     };

//     this.loadCargo = function(cargo) {
//       this.cargo.push(cargo);
//       return this;
//     };

//     this.unloadCargo = function() {
//       return this.cargo.pop();
//     };
//   };


function Vehicle(driver, speed, drive) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function(mph) {
        this.speed = mph;
        return this.driver + ' is driving at ' + mph + ' miles per hour';
    }

}

let truck = new Vehicle('alexandra', 200)

truck.cargo = [];
truck.loadCargo = function(cargo) {
    this.cargo.push(cargo);
    return this;
} 
truck.unloadCargo = function() {
    return this.cargo.pop();
}

console.log(truck.loadCargo(200))





//Creati un obiect numit Trainer care sa fie derivat din obiectul Person si implementati o metoda teach() ce primeste un string numit subject si printeaza
// [nume trainer] is now teaching [subject]

const Person = function() {

};

Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}

let Trainer = function() {
    this.teach = function(subject) {
        console.log(`${this.name} is now teaching ${subject}`)
    }
}

Trainer.prototype = new Person();
let trainer = new Trainer();

trainer.initialize("Ovi", 29);
trainer.teach("Prototypes");

// trainer.prototype.teach = function() {
//     this.subject = subject;
//     this.teach = function() {
//         return this.name + ' is now teaching ' + this.subject;
//     }
// }

console.log(trainer)