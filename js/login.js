$(document).ready(function() {
  var $nickName = $('#nick-name');
  var $password = $('#password');
  var $btnLogin = $('.button-ir');
  // CREANDO FUNCION QUE VALIDA LOS DATOS DEL IMPUT NICK NAME DE SIGNUP
  $nickName.on('input', function() {
    if ($nickName .val() === ) {

    } else {

    }
  });
  // CREANDO FUNCION QUE VALIDA LOS DATOS DEL IMPUT PASSWORD DE SIGNUP
  $password.on('input', function() {
    if ($password .val() === ) {
      $btnLogin.attr('disabled', false);
    } else {
      $btnLogin.attr('disabled', true);
    }
  });
});
