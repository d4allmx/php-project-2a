/**
 * @file
 * Add functionality for tabs block.
 */

/**
 * Add animation class on item wrapper.
 */
$(document).on('mouseover', '#tabs-block .item', function (e) {
  $(this).addClass('animation');
});

/**
 * Remove animation class on item wrapper.
 */
$(document).on('mouseout', '#tabs-block .item', function (e) {
  $(this).removeClass('animation');
});
