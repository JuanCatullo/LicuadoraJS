var estadoLicuadora = "apagada";
var sonidolicuadora = document.getElementById ("blender-sound");
var botonlicuadora = document.getElementById ("blender-buttom-sound")
var licuadora = document.getElementById("blender");

function controlarLicuadora () {
if (estadoLicuadora == "apagada") {
estadoLicuadora = "encendida";
HacerBrrBrr();
licuadora.classList.add("active")
/*console.log ("me prendiste");*/
} else {
    estadoLicuadora = "apagada"
    HacerBrrBrr();
    licuadora.classList.remove ("active");
    /*console.log ("me apagaste");*/
}
}

function HacerBrrBrr(){
    if (sonidolicuadora.paused ) {
        botonlicuadora.play();
        sonidolicuadora.play(); 
    } else {
        botonlicuadora.play();
        sonidolicuadora.pause();
        sonidolicuadora.currentTime = 0;
    }
}
