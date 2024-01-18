var counterValue = 0;

const valueClass = document.querySelector(".value");
const eeClass = document.querySelector(".e-e");


document.addEventListener("click", (event) => {

    var button = event.target.classList[1];

    if (button === "decrease") {
        counterValue--;
    } else if (button === "increase"){
        counterValue++;
    } else if (button === "reset") {
        counterValue = 0;
    };

    valueClass.style.color = counterValue < 0 ? "red" : counterValue > 0 ? "green" : "#404040";

    valueClass.innerHTML = counterValue;

    valueClass.style.transform = "scale(1.2)";

    setTimeout(() => {
        valueClass.style.transform = "scale(1)";
    }, 300);

    if (eeClass === event.target){
        alert("You found me!🎉 I'm an easter egg! 🥚");
    }
});

document.addEventListener("keydown", (event) => {

    var keyPressed = event.key;

    if (keyPressed === "-") {
        counterValue--;
    } else if (keyPressed === "+"){
        counterValue++;
    } else if (keyPressed === "0") {
        counterValue = 0;
    };

    valueClass.style.color = counterValue < 0 ? "red" : counterValue > 0 ? "green" : "#404040";

    valueClass.innerHTML = counterValue;

    valueClass.style.transform = "scale(1.2)";

    setTimeout(() => {
        valueClass.style.transform = "scale(1)";
    }, 300);

});



