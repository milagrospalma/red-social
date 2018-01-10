$(document).ready(function() {
  var $textarea = $('#insert-text');
  var $btnPosting = $('.btn-posting');
  var $divContainerPosts = $('#div-posts');
  //  agregando funcion para realizar una publicación
  $textarea.on('input', function() {
    $textarea.val();
  });
  //  agregando evento al boton para guardar las publicaciones en un contenedor
  $btnPosting.on('click', function() {
    //  agregando hora de publicación
    $divContainerPosts .append('<div class="container-posts">' + $textarea.val() + '</div>');
    $divContainerPosts .append('<div class="time">' + moment().format('LLLL') + '</div>');
  });
});
