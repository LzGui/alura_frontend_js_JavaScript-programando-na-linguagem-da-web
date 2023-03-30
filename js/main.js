/* var altura = document.querySelector(".info-altura");
var peso = document.querySelector(".info-peso");
var imc = document.querySelector(".info-imc");

imc.textContent = altura.textContent / (peso.textContent * peso.textContent);


console.log(imc) */

var paciente = document.querySelector("#primeiro-paciente");
var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;
var tdImc = paciente.querySelector(".info-imc");

/* if (peso > 0 & peso < 200 & altura > 0 & altura < 2.5) {
    imc = peso / (altura * altura);
    tdImc.textContent = imc;
} else {
    alert("Parâmetros inválidos")
} */

var vPeso = true;
var vAltura = true;

if (peso < 0 || peso > 250) {
    vPeso = false;
    tdImc.textContent = "Peso inválido!"
}

if (altura < 0 || altura > 2.5) {
    vAltura = false;
    tdImc.textContent = "Altura Inválidos!"
}

if (vPeso && vAltura) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}