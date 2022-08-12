//EJERCICO SUMAR 1 A N----------------------------------------------------------------------------------------------------------------------
function sumatoria_ejercicio1() {
    let sumatoria_total = document.querySelector("#numero_ejercicio").value
    let operacion_total = 0
    for (let i = 1; i <= sumatoria_total; i++) {
        operacion_total = operacion_total + i
        document.querySelector("#total_sumatoria_resultado").innerHTML += `
            La sumatoria total es ${operacion_total}
        `
    }
}


//EJERCICO PIZZERIA-------------------------------------------------------------------------------------------------------------------------
var edadPizzeria = document.getElementById('edadPizzeria')
var generoPizzeria = document.getElementById('generoPizzeria')

var claseEdadPizzeria = document.querySelector('.edadPizzeria')
var claseGeneroPizzeria = document.querySelector('.generoPizzeria')

//FUNCION ERROR PIZERRIA
function activarErrorPizzeria(elemento, mensaje = '') {
    if (mensaje != '') {
        elemento.lastElementChild.innerHTML = `<span class="text-danger existe_error"> ${mensaje} </span>`
    } else {
        elemento.lastElementChild.innerHTML = mensaje
    }
}
function premioPizzeria(elemento, mensaje = '') {
    if (edadPizzeria.value != '') {
        activarErrorPizzeria(claseEdadPizzeria)
        console.log(edadPizzeria.value)
    } else {
        activarErrorPizzeria(claseEdadPizzeria, 'Esta casilla NO puede estar vacia, por favor ingrese su Edad.')
        console.error('El usuario no agregó informacion sobre su Edad en la pizzeria')
    }

    if (generoPizzeria.value != '') {
        activarErrorPizzeria(claseGeneroPizzeria)
        console.log(generoPizzeria.value)
    } else {
        activarErrorPizzeria(claseGeneroPizzeria, 'Esta casilla NO puede estar vacia, por favor ingrese un Genero.')
        console.error('El usuario no agregó informacion sobre su género en la pizzeria')
    }

    //COMPARACIONES PARA DAR EL PREMIO
    if (edadPizzeria.value <= 10 && generoPizzeria.value === 'Masculino') {
        document.querySelector(".mensajePremio").innerHTML = 'FELICITACIONES, por ser un niño menor de 10 años, puedes reclamar un Juguete de Regalo.'
    } else if (edadPizzeria.value >= 18 && generoPizzeria.value === 'Femenino') {
        document.querySelector(".mensajePremio").innerHTML = 'FELICITACIONES, por ser una bella mujer, puedes reclamar una cerveza y una Pizza Hawaina adicional.'
        // alert ('FELICITACIONES, puedes reclamar un Cerveza de Regalo') 
    } else if (edadPizzeria.value >= 18 && generoPizzeria.value === 'Masculino') {
        document.querySelector(".mensajePremio").innerHTML = 'FELICITACIONES, por ser una todo un Macho, puedes reclamar una POLA FRÍA Y una Pizza 3 carnes'
    } else {
        document.querySelector(".mensajePremio").innerHTML = 'GRACIAS POR PARTICIPAR, sigue intentando, no ganaste premio.'
    }
}

// EJERCICIO PAR O IMPAR 

function verificarImparPar (){
    var numero = document.querySelector('#numeroIngresado').value
    if ((numero % 2) === 0) {
        document.querySelector('.mensajeParImpar').innerHTML = 'Este número es PAR'
    } else {
        document.querySelector('.mensajeParImpar').innerHTML = 'Este número es IMPAR '
    }
}

//EJERCICO PROMEDIO MATRICULA ---------------------------------------------------------------------------------------------------

function calculaDescuentoMatricula() {
    var notasPromedio = document.querySelector('#promedioNotas').value
    var valorMatricula = document.querySelector('#valorMatricula').value

    if (notasPromedio >= 3 && notasPromedio <= 4) {
        var descuento = (5 * valorMatricula) / 100
        var valorFinalMatricula = valorMatricula-descuento
        document.querySelector('.mensajeDescuento').innerHTML = 'El valor a pagar de matricula es : $ ' + valorFinalMatricula
    } else if (notasPromedio >= 4.1 && notasPromedio <= 5) {
        var descuento = (50 * valorMatricula) / 100 
        var valorFinalMatricula = valorMatricula-descuento
        document.querySelector('.mensajeDescuento').innerHTML = 'El valor a pagar de matricula es : $ ' + valorFinalMatricula

    } else if (notasPromedio <= 1) {
        var valorFinalMatricula = valorMatricula
        document.querySelector('.mensajeDescuento').innerHTML = 'Ustes No tiene descuento, el valor a pagar de matriula es : $ ' + valorFinalMatricula
}
}