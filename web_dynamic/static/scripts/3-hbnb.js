$(document).ready(function () {
  start();
  avalability();
<<<<<<< HEAD
  placesSearch();
});

//This fuction is for retrieve places from API json using a post request.
function placesSearch() {
=======
  makePlaces();
});

function makePlaces() {
>>>>>>> radouane
  $.ajax({
    type: 'Post',
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    contentType: 'application/json',
    data: JSON.stringify({}),
    success: function (places) {
      for (let place of places) {
<<<<<<< HEAD
        appendArticle(place);
      }
    }
  });
};
// This function create a new element for place.
function appendArticle(place) {
  let guest = place.max_guest !== 1 ? 'Guests' : 'Guest';
  let room = place.number_rooms !== 1 ? 'Bedrooms' : 'Bedroom';
  let bathroom = place.number_bathrooms !== 1 ? 'Bathrooms' : 'Bathroom';
  $('.places').append('<article>' +
    '<div class="title_box">' +
      '<h2>'+place.name+'</h2>' +
      '<div class="price_by_night">$'+place.price_by_night+'</div>' +
    '</div>' +
    '<div class="information">' +
      '<div class="max_guest">'+ place.max_guest + guest +'</div>' +
      '<div class="number_rooms">'+ place.number_rooms + room +'</div>' +
      '<div class="number_bathrooms">'+ place.number_bathrooms + bathroom +'</div>' +
    '</div>' +
    '<div class="user">' +
    '</div>' +
    '<div class="description">' +
    '<p>'+ place.description + '</p>' +
    '</div>' +
  '</article>');
=======
        appendToSection(place);
      }
    }
  })
>>>>>>> radouane
}

/* this function will check the status (api/v1/views/index) */
function avalability() {
  $.ajax({
    type: 'GET',
    url: 'http://0.0.0.0:5001/api/v1/status',
    success: function (data) {
      if (data.status === 'OK') {
<<<<<<< HEAD
        console.log('add');
        $('div#api_status').addClass('available')
      } else {
        console.log('remove');
=======
        $('div#api_status').addClass('available')
      } else {
>>>>>>> radouane
        $('div#api_status').removeClass('available')
      }
    }
  })
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
<<<<<<< HEAD
=======

function appendToSection(place) {
  console.log(place.name)
  let guestS = ' Guest', roomS = ' Bedroom', bathroomS = ' Bathroom';
  if (place.max_guest !== 1) { guestS += 's' }
  if (place.number_rooms !== 1) { roomS += 's' }
  if (place.number_bathrooms !== 1) { bathroomS += 's' }
  $('section.places').append('<article>\
  <div class="title_box">\
  <h2>' + place.name + '</h2>\
  <div class="price_by_night">$' + place.price_by_night + '</div>\
  </div>\
  <div class="information">\
    <div class="max_guest">' + place.max_guest + guestS + '</div>\
          <div class="number_rooms">' + place.number_rooms + roomS + '</div>\
          <div class="number_bathrooms">' + place.number_bathrooms + bathroomS + '</div>\
</div>\
  <div class="user">\
          <b>Owner:</b>' + place.user_id + '\
        </div>\
        <div class="description">' + place.description + '</div>\
  </acrticle>');
}
>>>>>>> radouane
