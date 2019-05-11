
// acum se printeaza in consola '1' '2' '3' '4' '5' .
// Vrem sa fie ordinea '3' '5' '2' '1' '4'
//hint setTimeout

const func1 = (number) => {
  setTimeout(function() {
    console.log('1');
  }, 4000);
}

const func2 = (number) => {
  setTimeout(function() {
    console.log('2');
  }, 3000);
}

const func3 = (number) => {
  setTimeout(function() {
    console.log('3');
  }, 1000);
}

const func4 = (number) => {
  setTimeout(function() {
    console.log('4');
  }, 5000);
}

const func5 = (number) => {
  setTimeout(function() {
    console.log('5');
  }, 2000);
}

func1();
func2();
func3();
func4();
func5();

