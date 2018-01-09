// cargando todo el árbol de nodos del DOM
$(document).ready(function() {
  var $nickName = $('#nick-name');
  var $password = $('#password');
  var $btnFrase = $('#btn-frase');
  var $btnRegistro = $('.button-registro');
  // CREANDO FUNCION QUE VALIDA LOS DATOS DEL IMPUT PASSWORD
  $password.on('input', function() {
    // CREANDO VARIABLE QUE VERIFICA NUMERO DE TELEFONO
    if ($password .val().length >= 6) {
      $btnFrase.attr('disabled', false);
    } else {
      $btnFrase.attr('disabled', true);
    }
  });
  $btnFrase.on('click', function() {
    var min = 1;
    var max = 5;
    var aleatorio = Math.floor(Math.random() * (max - (min - 1))) + min;
    var imagePhrase = $('<img src=" + frases[aleatorio]+">');
    imagePhrase.addClass('phrase-style');
    var phraseContainer = $('.frase'); // div que contiene el botón de frase y almacenará el img-frase
    phraseContainer.append(imagePhrase);
  });
});
