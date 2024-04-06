$(document).ready(function () {
  const $amenityIds = [];
  const $amenityNames = [];
  $(document).on('change', '.checkbox-amenity', function () {
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');
    // console.log(amenityId)
    if ($(this).is(':checked')) {
      $amenityIds.push(amenityId);
      $amenityNames.push(amenityName);
      console.log("added" + amenityId)
    } else {
      const index = $amenityIds.indexOf(amenityId);
      const indexName = $amenityNames.indexOf(amenityName)
      if (index !== -1) {
        $amenityIds.splice(index, 1);
        $amenityNames.splice(indexName, 1);
      }
      console.log("removed" + amenityId)
    }
    updateAmenitiesList();
  });
  function updateAmenitiesList () {
    const amenitiesList = $amenityNames.join(', ');
    var maxLength = 30;
    console.log(amenitiesList);
    if (amenitiesList.length === 0) {
      $('.amenities h4').html('&nbsp;');
    }else if (amenitiesList.length > 0 && amenitiesList.length > maxLength) {
      $('.amenities h4').text(amenitiesList.substring(0, maxLength) + '...');
    } else {
      $('.amenities h4').text(amenitiesList.substring(0, maxLength));
    }
  }
});
