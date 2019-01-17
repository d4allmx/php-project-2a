/**
 * @file
 * Add functionality for tabs block.
 */

/**
 * Add animation class on item wrapper.
 */
$(document).on('mouseover', '#tabs-block .item', function (e) {
  var wWidth = parseInt($(window).width(), 10);

  if (wWidth >= 992) {
    $(this).addClass('animation');
  }
});

/**
 * Remove animation class on item wrapper.
 */
$(document).on('mouseout', '#tabs-block .item', function (e) {
  var wWidth = parseInt($(window).width(), 10);

  if (wWidth >= 992) {
    $(this).removeClass('animation');
  }
});
