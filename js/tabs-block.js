$(document).ready(function (e) {
  $('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  });
});
