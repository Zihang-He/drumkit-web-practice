var numButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numButtons; i++){

    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonName = this.innerHTML;
        makeSound(buttonName);
    });
}

document.addEventListener("keydown", function(e){
    makeSound(e.key);
});

// document.addEventListener("keydown",(event) => {
//     var name = event.key;
//     var code = event.code;
//     // Alert the key name and key code on keydown
//     alert(`Key pressed ${name} \r\n Key code value: ${code}`);
//   }, false);


function makeSound(buttonName){
    switch (buttonName) {
        case "s":
            var audio = new Audio("./sounds/kick-bass.mp3");
            break;
        case "d":
            var audio = new Audio("./sounds/snare.mp3");
            break;
        case "f":
            var audio = new Audio("./sounds/tom-1.mp3");
            break;
        case "j":
            var audio = new Audio("./sounds/tom-2.mp3");
            break;
        case "k":
            var audio = new Audio("./sounds/tom-3.mp3");
            break;
        case "l":
            var audio = new Audio("./sounds/tom-4.mp3");
            break;
        case " ":
            var audio = new Audio("./sounds/crash.mp3");
            break;
        case "_":
            var audio = new Audio("./sounds/crash.mp3");
            break;
        default:
            console.log(buttonName);
            alert(buttonName);
            break;
    }
    audio.play();
}