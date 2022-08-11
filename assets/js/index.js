//EJERCICO SUMAR 1 A N-------------------------------------------------------------------------
// function sumatoria_ejercicio01 () {
//     let sumatoriaTotal = document.querySelector ('#numeroEjercicio01').value
    


//EJERCICO PIZZERIA-------------------------------------------------------------------------
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

//EJERCICO PROMEDIO MATRICULA -------------------------------------------------------------------------
var notasPromedio = document.queryCommandValue('#numeroEjercicio01')
var valorMatricula = document.queryCommandValue('#valorMatricula')
var valorDescuento = document.querySelector('#valorDescuento')
var descuentoCinco = 5 

function calculaDescuentoMatricula (valorMatricula, descuentoCinco){
    if (notasPromedio > 3 ){
        return (valorDescuento = (valorMatricula % descuentoCinco) )
        console.log(valorDescuento.value)
        


    }
    
}

//Variables para datos de Peli
var peliAccion = document.getElementById('peli_accion')


//Boton registrate
var btnEnviar = document.getElementById('btn-enviar')
//Clases para manejar ERRORES DE VALIDACION 
var claseNombre = document.querySelector('.nombre')
var claseApellido = document.querySelector('.apellido')
var claseCelular = document.querySelector('.celular')
var claseCorreo = document.querySelector('.correo')
var claseFecha = document.querySelector('.fecha_nacimiento')
var claseGenero = document.querySelector('.genero')
var claseContrasena = document.querySelector('.contrasena')
var claseVerificarContrasena = document.querySelector('.verificarContrasena')
var claseTipoPelicula = document.querySelector('.tipoPelicula')
var claseVerificarPelicula = document.querySelector('.verificartipoPelicula')

//VARIABLES PARA DEJAR INGRESAR USUARIO
var mensajeNombre = document.querySelector('.mensajeNombre')

//VARIABLES PARA EXPRESIONES REGULARES
var validarContrasena = /^[A-Za-z0-9]/

//FUNCION REGISTRO DE USUARIO
function activarError(elemento, mensaje = '') {
    if (mensaje != '') {
        elemento.lastElementChild.innerHTML = `<span class="text-danger existe_error"> ${mensaje} </span>`
    } else {
        elemento.lastElementChild.innerHTML = mensaje
    }
}

//FUNCION INGRESAR USUARIO NUEVO 
function accesoUsuario() {
    var ingresar_bienvenida = !!document.querySelector(".existe_error")
    if (ingresar_bienvenida == false) {
        location.href = "bievenida.html"
    }
}

function registroUsuario() {
    //Validar campo NOMBRE 
    if (nombre.value != '') {
        activarError(claseNombre)
        console.log(nombre.value)
    } else {
        activarError(claseNombre, 'Esta casilla NO puede estar vacia, por favor ingrese su Nombre.')
        console.error('El usuario no agregó informacion sobre su Nombre')
    }
    //Validar campo APELLIDO
    if (apellido.value != '') {
        activarError(claseApellido)
        console.log(apellido.value)
    } else {
        activarError(claseApellido, 'Esta casilla NO puede estar vacia, por favor ingrese su Apellido.')
        console.error('El usuario no agregó informacion sobre su Apellido ')
    }
    //Validar campo CELULAR
    if (celular.value != '') {
        activarError(claseCelular)
        console.log(celular.value)
    } else {
        activarError(claseCelular, 'Esta casilla NO puede estar vacia, por favor ingrese su Número Celular.')
        console.error('El usuario no agregó informacion sobre su Celular')
    }
    //Validar campo CORREO
    if (correo.value != '') {
        activarError(claseCorreo)
        console.log(correo.value)
    } else {
        activarError(claseCorreo, 'Esta casilla NO puede estar vacia, por favor ingrese su Correo.')
        console.error('El usuario no agregó informacion sobre su Correo')
    }
    //Validar campo FECHA
    if (fecha.value != '') {
        activarError(claseFecha)
        console.log(fecha.value)
    } else {
        activarError(claseFecha, 'Esta casilla NO puede estar vacia, por favor ingrese su Fecha de Nacimiento.')
        console.error('El usuario no agregó informacion sobre su Fecha de Nacimiento')
    }
    //Validar campo GENERO 
    if (genero.value === '') {
        activarError(claseGenero, 'Selecciona un género')
        console.error('El usuario no agregó su género')
    } else if (genero.value === 'Masculino' || genero.value === 'Femenino') {
        activarError(claseGenero)
        console.log(genero.value)
    }
    //Validad CONTRASEÑA
    if (contrasena.value === '') {
        activarError(claseContrasena, 'Esta casilla NO puede estar vacia, por favor ingrese un Contraseña.')
    } else if (validarContrasena.test(contrasena.value)) {
        activarError(claseContrasena)
        console.log(contrasena.value)
    } else {
        activarError(claseContrasena, 'La contraseña debe contener mayúsculas, minusculas y un número para ser válida.')
    }
    //NO ME SIRVE LA VALIDADCION DE MAYUSCILAS MIN Y DEMAS
    //Validar verificar CONTRASEÑA 
    if (contrasena.value === verificarContrasena.value) {
        activarError(claseVerificarContrasena)
        console.log(verificarContrasena.value)
    } else {
        activarError(claseVerificarContrasena, 'Las contraseñas no coinciden')
    }

    //Verificar que se seleccione alguna clase de genero de pelicula
    if (peliAccion.checked == false && peliDrama.checked == false && peliAventura.checked == false && peliFiccion.checked == false && peliAnimadas.checked == false && peliOtras.checked == false) {
        // activarError(claseVerificarPelicula, 'DEBE seleccionar pelis' )
        alert('Debe seleccionar mínimo un 1 género de Peliculas.')
    }


    //Revisar que generos de peliculas le gustan al usuario 
    if (peliAccion.checked == true) {
        console.log(peliAccion.value)
    }
    if (peliDrama.checked == true) {
        console.log(peliDrama.value)
    }
    if (peliAventura.checked == true) {
        console.log(peliAventura.value)
    }
    if (peliFiccion.checked == true) {
        console.log(peliFiccion.value)
    }
    if (peliAnimadas.checked == true) {
        console.log(peliAnimadas.value)
    }
    if (peliOtras.checked == true) {
        console.log(peliOtras.value)
    }
    accesoUsuario()
}
// NO ME SIRVE LA VALIDACION DE CONTRASEÑA

//Seleccion de Peliculas






//AGREGAR LOS DATOS AL LOCALSTORGE

var validar_formulario = !!document.querySelector(".existe_error")
console.log(validar_formulario)
if (validar_formulario == false) {
    localStorage.setItem("nombre", nombre.value)
    localStorage.setItem("apellido", apellido.value)
    localStorage.setItem("celular", celular.value)
    localStorage.setItem("correo", correo.value)
    localStorage.setItem("fecha_nacimiento", fecha.value)
    localStorage.setItem("genero", genero.value)
    localStorage.setItem("contrasena", contrasena.value)
}



