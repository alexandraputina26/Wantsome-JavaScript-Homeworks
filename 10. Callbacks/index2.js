//iterati peste toate butoanele si pentru fiecare in parte adaugati un eventListener
// pentru click si o functie callback care sa printeze in consola "button clicked!"


function buttonFunction() {
const buttons = document.getElementById('app');
buttons.addEventListener("click", function() {
    console.log("button_clicked!");
});

for (let i = 0; i < buttons.length; i++) {
    callback(buttons[i]);
    }
}

buttonFunction()