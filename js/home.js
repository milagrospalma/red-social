$(document).ready(function() {
  var $iconComment = $('.comment');
  
  $iconComment.on('click', function() {
    var $input = $('<input>');
    var $button = $('<button class=" btn waves-effect waves-light">Publicar</button>');
    $('.div-input').addClass('style-div');
    $('.div-input').append($input);
    $('.div-input').append($button);
    $button.on('click', function() {
    });
  });
  
  
});