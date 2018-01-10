$(document).ready(function() {
  var $textarea = $('#insert-text');
  var $btnPosting = $('.btn-posting');
  var $divContainerPosts = $('#div-posts');
  //  agregando funcion para realizar una publicación
  $textarea.on('input', function() {
    $textarea.val();
  });
  //  agregando evento al boton para guardar las publicaciones en un contene
  $btnPosting.on('click', function() {
    //  agregando hora de publicación
    $divContainerPosts .append($textarea.val());
    $divContainerPosts .append(moment().format('LLLL'));
  });
});
