var counterValue = 0;

document.addEventListener("click", function (event){

    var button = event.target.classList[1];

    if (button === "decrease") {
        counterValue--;
    } else if (button === "increase"){
        counterValue++;
    } else if (button === "reset") {
        counterValue = 0;
    };

    if (counterValue < 0){
        document.querySelector(".value").setAttribute("style", "color: red");
    } else if (counterValue > 0){
        document.querySelector(".value").setAttribute("style", "color: green");
    } else {
        document.querySelector(".value").setAttribute("style", "color: #404040");
    };

    document.querySelector("h2").innerHTML = counterValue;
});

document.querySelector(".e-e").addEventListener("click", function(){
    alert("You found me!🎉 I'm an easter egg! 🥚");
});