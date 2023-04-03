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

var botaoAdd = document.querySelector("#adicionar-paciente");

botaoAdd.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
})