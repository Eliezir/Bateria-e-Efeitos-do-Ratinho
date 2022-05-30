var drum = true;

function TocarMusica(som, arquivo) {
    
    var som = new Audio(arquivo);
    som.play();
}

for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var key = this.innerHTML;
        fazerSom(key);
        buttonAnimation(key);
    })
}

document.addEventListener("keydown", function (event) {
    fazerSom(event.key);
    buttonAnimation(event.key);
});

function fazerSom(key) {
    if (drum === true) {
        switch (key) {
            case "w":
                TocarMusica("tom1", "sounds/tom-1.mp3")
                break;
            case "a":
                TocarMusica("tom2", "sounds/tom-2.mp3")
                break;
            case "s":
                TocarMusica("tom3", "sounds/tom-3.mp3")
                break;
            case "d":
                TocarMusica("tom4", "sounds/tom-4.mp3")
                break;
            case "j":
                TocarMusica("crash", "sounds/crash.mp3")
                break;
            case "k":
                TocarMusica("kick", "sounds/kick-bass.mp3")
                break;
            case "l":
                TocarMusica("snare", "sounds/snare.mp3")
                break;
            default:
                console.log(key);
        }
    } else {
        switch (key) {
            case "z":
                TocarMusica("tom1", "sounds/pare.wav")
                break;
            case "x":
                TocarMusica("tom2", "sounds/uepa.wav")
                break;
            case "c":
                TocarMusica("tom3", "sounds/ratinho.wav")
                break;
            case "v":
                TocarMusica("tom4", "sounds/iha.wav")
                break;
            case "b":
                TocarMusica("crash", "sounds/rapaz.wav")
                break;
            default:
                console.log(key);
        }
    }
}

function buttonAnimation(keyPressed) {
    var btnAtivo = document.querySelector("." + keyPressed);
    btnAtivo.classList.add("pressed");
    setTimeout(function () {
        btnAtivo.classList.remove("pressed");
    }, 100)
}

function pagNova() {
    var ratinho = document.querySelector("#ratinho");
    var drumKit = document.querySelector("#drum-kit");
    ratinho.classList.toggle("off");
    drumKit.classList.toggle("off");
    if (drum === true) {
        drum = false;
    } else {
        drum = true;
    }
}