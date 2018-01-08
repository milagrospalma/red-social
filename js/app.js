// cargando todo el árbol de nodos del DOM
$(document).ready(function() {
  var $buttonNewUser = $('#newUser');
  console.log($buttonNewUser);
  var $buttonLogIn = $('#logIn');
});
// agregando evento click para los botones
$buttonNewUser.on('click', function() {
  window.location.href = 'signup.html';
});
$buttonLogI.on('click', function() {
  window.location.href = 'login.html';
});
