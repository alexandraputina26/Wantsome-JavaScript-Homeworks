// 1. Creati o clasa Person care sa aiba firstName si lastName in constructor

class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    displayPersonName() { return this.firstName + ' ' + this.lastName; }
  }
  
  let persoana = new Person('Jon', 'Snow')
  console.log(persoana.displayPersonName())
  
//  2.aduagati o metoda displayPersonName care sa returneze numele complet
  
//  3. creati o persoana cu noua clasa unde dati un nume si-un prenume si apelati metoda respectiva

//1. Creati o clasa Animal care sa aiba in constructor name si weight

// class Animal {
//     constructor (name, weight) {
//       this.name = name;
//       this.weight = weight;
//     }
//     get eatFood() {return this.name + 'is eating'}
//     get sleep() {return this.name + 'is sleeping'}
//     get waking() {return this.name + 'is waking up'}
//   }
  
//   class Elephant extends Animal {
//     constructor(name) {
//     super(name);
//     }
//     speak() {
//       console.log(`${this.name} eatFood`)
//     }
//   }
  
//   let eleph = new Elephant ('Mitzie')
//   eleph.speak();
  
  //2. Creati urmatoarele metode: eatFood, sleep, weakingUp - fiecare metoda o sa returneze un string '$name is eating' '$name is sleeping' '$name is weaking up'
  //3. Creati o clasa noua care sa faca extend la clasa Animal si sa ia numele si weight-ul de la el(tip: super) - ex: class Elephant, class Lion etc
  //4. Adaugati 4 metode noi:
  //   walking - $name is walking
  //   rage - $name is rageing 
  //   showBehaviour - returnati metodele eatFood si rage
  //   dailyRoutine - returnati metodele weakingUp, rage, eatFood si sleep
  
  //5. Creati o constanta noua din clasa cu numele de animal pe care ati scris-o mai sus( NU DIN clasa Animal ci din clasa Elephant, Monkey, Lion etc etc);
  //6. Accesati toate cele 4 metode de pe noul animal. 


  //1. Creati o clasa Animal care sa aiba in constructor name si weight

class Animal {
  constructor (name, weight) {
    this.name = name;
    this.weight = weight;
  }
  get eatFood() {return this.name + 'is eating'}
  get sleep() {return this.name + 'is sleeping'}
  get waking() {return this.name + 'is waking up'}
}

// let eleph = new Animal("Elephant", 200)
// console.log(eleph.sleep())
// console.log(eleph.waking())

class Elephant extends Animal {
  constructor(name) {
  super(name);
  }
  speak() {
    console.log(`${this.name} eatFood`)
  }
  constructor(weight) {
    super(weight);
  }
  sleaps() {
    console.log(`${this.name} sleep`)
  }
}

let eleph = new Elephant ('Mitzie')
eleph.speak();

//2. Creati urmatoarele metode: eatFood, sleep, weakingUp - fiecare metoda o sa returneze un string '$name is eating' '$name is sleeping' '$name is weaking up'
//3. Creati o clasa noua care sa faca extend la clasa Animal si sa ia numele si weight-ul de la el(tip: super) - ex: class Elephant, class Lion etc
//4. Adaugati 4 metode noi:
//   walking - $name is walking
//   rage - $name is rageing 
//   showBehaviour - returnati metodele eatFood si rage
//   dailyRoutine - returnati metodele weakingUp, rage, eatFood si sleep

//5. Creati o constanta noua din clasa cu numele de animal pe care ati scris-o mai sus( NU DIN clasa Animal ci din clasa Elephant, Monkey, Lion etc etc);
//6. Accesati toate cele 4 metode de pe noul animal. 


//1. Creati o clasa Animal care sa aiba in constructor name si weight

class Animal {
  constructor (name, weight) {
    this.name = name;
    this.weight = weight;
  }
  eatFood() {
    return `${this.name} is eating`
  };
  sleep() {return this.name + 'is sleeping'};
  waking() {return this.name + 'is waking up'};
}

// let eleph = new Animal("Elephant", 200);
// console.log(eleph.eatFood())


//2. Creati urmatoarele metode: eatFood, sleep, weakingUp - fiecare metoda o sa returneze un string '$name is eating' '$name is sleeping' '$name is weaking up'
//3. Creati o clasa noua care sa faca extend la clasa Animal si sa ia numele si weight-ul de la el(tip: super) - ex: class Elephant, class Lion etc

class Elephant extends Animal {
  constructor(name) {
  super(name);
  }
  walking() {
    console.log(`${this.name} is walking`)
  }
  rage() {
   return `${this.name} is rageing`
  }
  showBehaviour() {
    console.log(`${super.eatFood()} ${this.rage()}`)
  }
}

let eleph = new Elephant('Mitzie')
eleph.showBehaviour();

//4. Adaugati 4 metode noi:
//   walking - $name is walking
//   rage - $name is rageing 
//   showBehaviour - returnati metodele eatFood si rage
//   dailyRoutine - returnati metodele weakingUp, rage, eatFood si sleep

//5. Creati o constanta noua din clasa cu numele de animal pe care ati scris-o mai sus( NU DIN clasa Animal ci din clasa Elephant, Monkey, Lion etc etc);
//6. Accesati toate cele 4 metode de pe noul animal. 