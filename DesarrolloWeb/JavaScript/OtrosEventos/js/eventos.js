function cambiarRadioButtons(){
  var estadoRB = document.getElementById('activar_rb').checked;
  if (estadoRB){
    var estado = "true"
    document.getElementById('animales').disabled=false
    document.getElementById('postres').disabled=false
    document.getElementById('musica').disabled=false
  }else {
    document.getElementById('animales').disabled=true
    document.getElementById('postres').disabled=true
    document.getElementById('musica').disabled=true
  }
}

function cargarPagina(){
  alert("Se ha cargado toda la pagina.");
}

document.getElementsByTagName("body")[0].onload=cargarPagina;

function eventOnFocus(event) {
  var seleccion = event.currentTarget.id;
  switch (seleccion) {
    case "animales":
      document.getElementById('sel_animales').disabled=false
      $(document).ready(function(){$('select').material_select();})
      break;
    case "postres":
      document.getElementById('sel_postres').disabled=false
      $(document).ready(function(){$('select').material_select();})
      break;
    case "musica":
      document.getElementById('sel_musica').disabled=false
      $(document).ready(function(){$('select').material_select();})
      break;

    default:
  }
}

function eventOnBlur(event){
  var seleccion = event.currentTarget.id;
  switch (seleccion) {
    case "animales":
      document.getElementById('sel_animales').disabled=true
      $(document).ready(function(){$('select').material_select();})
      break;
    case "postres":
      document.getElementById('sel_postres').disabled=true
      $(document).ready(function(){$('select').material_select();})
      break;
    case "musica":
      document.getElementById('sel_musica').disabled=true
      $(document).ready(function(){$('select').material_select();})
      break;

    default:
  }
}

function asignarEventosRB(){
  document.getElementById('animales').onfocus=eventOnFocus;
  document.getElementById('postres').onfocus=eventOnFocus;
  document.getElementById('musica').onfocus=eventOnFocus;

  document.getElementById('animales').onblur=eventOnBlur;
  document.getElementById('postres').onblur=eventOnBlur;
  document.getElementById('musica').onblur=eventOnBlur;

}

asignarEventosRB()
