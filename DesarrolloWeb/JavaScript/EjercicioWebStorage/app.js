
var formRegistro = document.getElementsByClassName('registro')[0],
    formReserva  = document.getElementsByClassName('reserva')[0];

// Almacenamos el objeto localStorage en una variable
var Storage = window.localStorage
// Verificar si localStorage tiene alguna
if (Storage.length > 0 && Storage.hasOwnProperty('usuario')) {
  // Si la llave usuario existe en localStorage mostrar el formulario de reserva
  formReserva.className = "reserva"
  formRegistro.className = "registro hide"
} else {
  // Si no existe se debe mostrar el formulario de regisro
  formRegistro.className = "registro"
  formReserva.className += "reserva hide"
}


var botonRegistro = document.getElementById('registrar'),
    botonReserva  = document.getElementById('reservar')
    inputDocumento = document.getElementById('numDocRes');

function guardarUsuario() {
  var usuario = {
    numeroDoc: document.getElementById('numDoc').value,
    nombreCompleto: document.getElementById('nombreCom').value,
    correo: document.getElementById('correo').value,
    nombreUsuario: document.getElementById('nombreUsuario').value,
    password: document.getElementById('password').value
  }
  localStorage.setItem('usuario', JSON.stringify(usuario))
  formReserva.className = "reserva"
  formRegistro.className = "registro hide"
}

function guardarReserva() {
  var reserva = {
    destino: document.getElementsByClassName('destino').value
  }
  localStorage.setItem('reserva', JSON.stringify(reservar))
  alert('Se guardo la reserva correctamente')
}

function consultarUsuario(documento) {
  var usuario = JSON.parse(localStorage.getItem('usuario'))
  if (usuario.numeroDoc === documento) {
    document.getElementById('nombreUsuarioRes').value = usuario.nombreUsuario
  }
}

botonRegistro.addEventListener('click', function(e) {
  e.preventDefault()

})

botonReserva.addEventListener('click', function(e) {
  e.preventDefault()

})

inputDocumento.addEventListener('keypress', function(e) {
  if (e.which === 13) {

  }
})
