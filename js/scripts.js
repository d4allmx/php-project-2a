var mmenu1;

$(document).ready(function() {
  $('#my-menu').mmenu();
  mmenu1 = $('#my-menu').data('mmenu');
});

$(document).on('click', '#menu-button', function () {
  if ($('html').hasClass('mm-wrapper_opening')) {
    mmenu1.close();
  }
  else {
    mmenu1.open();
  }
});

$(document).on('click', '.mm-wrapper_opening #header-mobile', function (e) {
  mmenu1.close();
});

var mmenu2;

$(document).ready(function() {
  $('#my-menu2').mmenu({
           "extensions": [
          "position-right"
       ]
  });
  mmenu2 = $('#my-menu2').data('mmenu');
});

$(document).on('click', '#menu-button2', function () {
  mmenu2.open();
});
