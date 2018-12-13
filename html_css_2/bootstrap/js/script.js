// Script modal
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});

// Script tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
