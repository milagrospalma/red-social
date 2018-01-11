$(document).ready(function() {
  var $textarea = $('#insert-text');
  var $btnPosting = $('.btn-posting');
  var $divContainerPosts = $('#div-posts');
  var $btnFollow = $('.btn-follow a');
  var $divContainerFollowers = $('#followers');

  //  agregando EVENTO para realizar una publicación
  $textarea.on('input', function() {
    // El botón no debe habilitarse si no hay contenido
    // TODO: validar que no permita el ingreso solo de espacios en la publicación
    if ($textarea.val().length === 0) {
      $btnPosting.attr('disabled', true);
    } else {
      $btnPosting.attr('disabled', false);
    }
  });

  //  agregando evento al boton para guardar las publicaciones en un contenedor
  $btnPosting.on('click', function() {
    //TODO: las última publicación debe aparecer al incio
    //  agregando hora de publicación
    $divContainerPosts.append('<div class="container-posts">' + $textarea.val() + '</div>');
    $divContainerPosts.append('<div class="time">' + moment().format('LLLL') + '</div>');
    // Reseteando el textarea y el botón
    $textarea.val('');
    $(this).attr('disabled', 'disabled');
  });

  //  agregando EVENTO Seguir (al botón seguir)
  $btnFollow.on('click', function() {
    //TODO: regresar al color inicial cuando se deje de seguir al usuario
    if ($(this).hasClass('.follow')) {
      $(this).text('seguir');
    } else {
      $(this).removeClass('follow');
      $(this).text('siguiendo');
    }
  });

  // En la sección de seguidores se debería visualizar un número o algún contenido 
});
