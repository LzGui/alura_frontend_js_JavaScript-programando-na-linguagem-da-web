var paciente = document.querySelectorAll(".paciente");

for (let i = 0; i < paciente.length; i++) {
    var peso = paciente[i].querySelector(".info-peso").textContent;
    var altura = paciente[i].querySelector(".info-altura").textContent;
    var tdImc = paciente[i].querySelector(".info-imc");

    var vPeso = true;
    var vAltura = true;

    if (peso < 0 || peso > 250) {
        vPeso = false;
        tdImc.textContent = "Peso inválido!";
        paciente[i].classList.add("dado-invalido");
    }

    if (altura < 0 || altura > 2.5) {
        vAltura = false;
        tdImc.textContent = "Altura Inválida!";
        paciente[i].classList.add("dado-invalido");
    }

    if (vPeso && vAltura) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }

}

