$(document).ready(function() {
  // funcionalidad para el modal 'comentar'
  var $iconComment = $('.icon-comment');
  // evento para el icono 'comment'
  $iconComment.on('click', function() {
    $('.section-modal').removeAttr('hidden');    
    var $input = $('div.add-comment>input');
    // evento para el input
    $input.on('keyup', function(event) {
      var $inputValue = $('div.add-comment>input').val();
      $('.button-modal').removeAttr('disabled'); 
      // condicion que deshabilita el button del modal
      if ($inputValue === '' || event.keyCode === 69 && $inputValue.lenght <= 1) {
        $('.button-modal').attr('disabled', 'disabled');
      }
    });
    // funcionalidad para el button del modal
    $('.button-modal').on('click', function() {
      var $inputValue = $('div.add-comment>input').val();
      $('.comments').append('<p class="color-p">' + $inputValue + '</p>' + '<br>');
    });
    $('.icon-close').on('click', function() {
      $('.section-modal').attr('hidden', 'hidden');
    });
  });
  // funcionalidad para el modal 'publicar'
  var $iconAdd = $('div.card-image>a');
  // evento para el icono add(+) 
  $iconAdd.on('click', function() {
    $('.section-modal2').removeAttr('hidden');
    // evento para el icono 'close'
    $('.icon-close').on('click', function() {
      $('.section-modal2').attr('hidden', 'hidden');
    });
    
    $('.icon-input-text').on('mouseover', function() {
      $('.input-text').removeAttr('hidden');
      $('.input-field').attr('hidden', 'hidden');
      var $inputText = $('div.input-text>input');

      $inputText.on('keyup', function(event) {
        var $inputTextValue = $inputText.val();
        $('.button-modal').removeAttr('disabled');  
        if ($inputTextValue === '' || event.keyCode === 69 && $inputTextValue.lenght <= 1) {
          $('.button-modal').attr('disabled', 'disabled');
        }
        $('.button-modal').on('click', function() {
          $('#test-swipe-1').append('<p>'+ $inputTextValue +'</p>');
        });

      });
    });

    $('.icon-input-file').on('mouseover', function() {
      $('.input-field').removeAttr('hidden');
      $('.input-text').attr('hidden', 'hidden');
      var $inputFile = $('div.input-field>input');
      $inputFile.on('click', function(event) {
        $('.button-modal').removeAttr('disabled');
        // $('.button-modal').attr('disabled', 'disabled');
      });
    });

    $('.button-modal').on('click', function() {});
  });
});