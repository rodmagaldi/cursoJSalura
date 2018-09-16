var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    if (!validaPeso(peso)) {
        pesoValido = false;
        tdImc.textContent = "Peso inválido!"
        paciente.classList.add("paciente-invalido")
    }

    var alturaValida = true;
    if (!validaAltura(altura)) {
        alturaValida = false;
        tdImc.textContent = "Altura inválida!"
        paciente.classList.add("paciente-invalido")
    }

    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }

    function calculaImc(p, a) {
        var imc = p / (a * a);
        return imc.toFixed(2)
    }
}

function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura < 3) {
        return true
    } else {
        return false
    }
}