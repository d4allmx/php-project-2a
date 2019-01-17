/**
 * @file
 * Add functionality for tabs block.
 */

/**
 * Add animation class on item wrapper.
 */
$(document).on('mouseover', '.image-with-caption', function (e) {
  var wWidth = parseInt($(window).width(), 10);

  if (wWidth >= 992) {
    $(this).addClass('animation');
  }
});

/**
 * Remove animation class on item wrapper.
 */
$(document).on('mouseout', '.image-with-caption', function (e) {
  var wWidth = parseInt($(window).width(), 10);

  if (wWidth >= 992) {
    $(this).removeClass('animation');
  }
});
