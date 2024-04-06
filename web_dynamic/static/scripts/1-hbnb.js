$(document).ready(function () {
  start();
});

function start () {
  const amenityIds = [];
  const amenityNames = [];

  $(document).on('change', 'input[type="checkbox"]', function () {
    if ($(this).is(':checked')) {
      amenityIds.push($(this).attr('data-id'));
      amenityNames.push($(this).attr('data-name'));
    } else {
      const indexId = amenityIds.indexOf($(this).attr('data-id'));
      if (indexId !== -1) {
        amenityIds.splice(indexId, 1);
        amenityNames.splice(indexId, 1);
      }
    }
    if (amenityNames.length === 0) {
      $('.amenities h4').html('&nbsp;');
    } else {
      $('.amenities h4').text(amenityNames.join(', '));
    }
  });
}
