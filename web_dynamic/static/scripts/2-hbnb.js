$(document).ready(function () {
  start();
  avalability();
});

/* this function will check the status (api/v1/views/index) */
function avalability () {
  $.ajax({
    type: 'GET',
    url: 'http://0.0.0.0:5001/api/v1/status',
    success: function (data) {
      if (data.status === 'OK') {
        console.log('add');
        $('div#api_status').addClass('available');
      } else {
        console.log('remove');
        $('div#api_status').removeClass('available');
      }
    }
  });
}

/* this function keeps track of the changes happening in the check boxes */
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
