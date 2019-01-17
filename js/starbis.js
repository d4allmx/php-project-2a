/**
 * @file
 * Adds functionality for Starbis block.
 */

(function ($) {

   /**
   * Add animation class on item wrapper.
   */
  $(document).on('mouseover', '#starbis-block .item', function (e) {
    $(this).addClass('animation');
  });

  /**
   * Remove animation class on item wrapper.
   */
  $(document).on('mouseout', '#starbis-block .item', function (e) {
    $(this).removeClass('animation');
  });


})(jQuery);