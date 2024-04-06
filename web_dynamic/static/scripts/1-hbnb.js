$(document).ready(function () {
  const $amenityIds = [];
  $(document).on('change', '.checkbox-amenity', function () {
    const amenityId = $(this).data('id');
    if ($(this).is(':checked')) {
      $amenityIds.push(amenityId);
    } else {
      const index = $amenityIds.indexOf(amenityId);
      if (index !== -1) {
        $amenityIds.splice(index, 1);
      }
    }
    updateAmenitiesList();
  });
  function updateAmenitiesList () {
    const amenitiesList = $amenityIds.join(', ');
    $('#amenities h4').text(amenitiesList);
  }
});
