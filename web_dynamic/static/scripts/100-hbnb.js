const amenityIds = [];
const stateIds = [];
const cityIds = [];
const stateNames = [];
const cityNames = [];
$(document).ready(function () {
  start();
  avalability();
  makePlaces();
  checkStateCity();
  $('button[type="button"]').on('click', makePlaces);
});

function makePlaces () {
  console.log('run');
  $.ajax({
    type: 'Post',
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    contentType: 'application/json',
    data: JSON.stringify({ amenities: amenityIds, states: stateIds, cities: cityIds }),
    success: function (places) {
      $('section.places').empty();
      for (const place of places) {
        appendToSection(place);
      }
    }
  });
}

/* this function will check the status (api/v1/views/index) */
function avalability () {
  $.ajax({
    type: 'GET',
    url: 'http://0.0.0.0:5001/api/v1/status',
    success: function (data) {
      if (data.status === 'OK') {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    }
  });
}

/* this function keeps track of the changes happening in the check boxes */
function start () {
  const amenityNames = [];

  $(document).on('change', '.amenity_checkbox', function () {
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

function appendToSection (place) {
  let guestS = ' Guest'; let roomS = ' Bedroom'; let bathroomS = ' Bathroom';
  if (place.max_guest !== 1) { guestS += 's'; }
  if (place.number_rooms !== 1) { roomS += 's'; }
  if (place.number_bathrooms !== 1) { bathroomS += 's'; }
  $('section.places').append(`
  <article>
  <div class="title_box">
  <h2>${place.name}</h2>
  <div class="price_by_night">$${place.price_by_night}</div>
  </div>
  <div class="information">
    <div class="max_guest">${place.max_guest} ${guestS}</div>
          <div class="number_rooms">${place.number_rooms} ${roomS}</div>
          <div class="number_bathrooms">${place.number_bathrooms} ${bathroomS}</div>
</div>
    <div class="description">${place.description}</div>
  </acrticle>`);
}

function checkStateCity () {
  $(document).on('change', '.state_checkbox', function () {
    if ($(this).is(':checked')) {
      console.log('state checked');
      stateIds.push($(this).attr('data-id'));
      stateNames.push($(this).attr('data-name'));
    } else {
      const indexId = stateIds.indexOf($(this).attr('data-id'));
      if (indexId !== -1) {
        console.log('state unchecked');
        stateIds.splice(indexId, 1);
        stateNames.splice(indexId, 1);
      }
    }
    if (stateNames.length === 0 && cityIds.length === 0) {
      $('div.locations h4').html('&nbsp;');
    } else if (stateNames.length === 0 && cityIds.length !== 0) {
      $('div.locations h4').text('Cities: ' + cityNames.join(', '));
    } else {
      $('div.locations h4').text('States: ' + stateNames.join(', '));
    }
  });
  $(document).on('change', '.city_checkbox', function () {
    if ($(this).is(':checked')) {
      console.log('city checked');
      cityIds.push($(this).attr('data-id'));
      cityNames.push($(this).attr('data-name'));
    } else {
      const indexId = cityIds.indexOf($(this).attr('data-id'));
      if (indexId !== -1) {
        console.log('city unchecked');
        cityIds.splice(indexId, 1);
        cityNames.splice(indexId, 1);
      }
    }
    if (cityNames.length === 0 && stateIds.length === 0) {
      $('div.locations h4').html('&nbsp;');
    } else if (cityNames.length !== 0 && stateIds.length === 0) {
      $('div.locations h4').text('Cities: ' + cityNames.join(', '));
    } else {
      $('div.locations h4').text('States: ' + stateNames.join(', '));
    }
  });
}
