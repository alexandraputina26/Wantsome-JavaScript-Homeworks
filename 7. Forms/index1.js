function checkFunction() {
    const checkBox = document.getElementById("myCheck");
    const text = document.getElementById("secondTextarea")
    if (checkBox.checked == true){
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
}


function validationEvent() {
    let text = document.getElementById("secondTextarea").value;
    if (text.length < 50) {
        alert("keep writing");
    } else if (text.length > 160) {
        alert("delete some ideas");
    } else {
        alert("your form is good to go!");
    }
}


function buttonEventHandler() {
    const selectedElement = document.getElementById("button").value;
    if (text.length <= 10) {
        selectedElement.getElementById("button").disabled = true;
    } else {
        selectedElement.getElementById("button").disabled = false;
    }
}
document.addEventListener("keydown", buttonEventHandler);


