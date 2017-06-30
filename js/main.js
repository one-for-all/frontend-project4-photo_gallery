/**********************************
  Create image divs
**********************************/
captions = [
  `Hay Bales<br>
  I love hay bales. Took this snap on a drive through the countryside past some straw fields.`,
  `Lake<br>
  The lake was so calm today. We had a great view of the snow on the mountains from here.`,
  `Canyon<br>
  I hiked to the top of the mountain and got this picture of the canyon and trees below.`,
  `Iceberg<br>
  It was amazing to see an iceberg up close, it was so cold but didn’t snow today.`,
  `Desert<br>
  The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.`,
  `Fall<br>
  Fall is coming, I love when the leaves on the trees start to change color.`,
  `Plantation<br>
  I drove past this plantation yesterday, everything is so green!`,
  `Dunes<br>
  My summer vacation to the Oregon Coast. I love the sandy dunes!`,
  `Countryside Lane<br>
  We enjoyed a quiet stroll down this countryside lane.`,
  `Sunset<br>
  Sunset at the coast! The sky turned a lovely shade of orange.`,
  `Cave<br>
  I did a tour of a cave today and the view of the landscape below was breathtaking.`,
  `Bluebells<br>
  I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.`
];

for (var i = 1; i <= 12; i++) {
  var imgNum = "";
  if (i < 10) {
    imgNum = '0' + i;
  } else {
    imgNum = i;
  }
  $photoDiv = $(`
    <div class="photo-div">
    <a href="photos/${imgNum}.jpg" data-lightbox='photo-gallery' data-title="${captions[i-1]}">
      <img src="photos/thumbnails/${imgNum}.jpg" alt="photo ${imgNum}">
    </a>
  </div>`);
  $('main').append($photoDiv);
}
/**********************************
  End: Create image divs
**********************************/

// Search function
$('.search-box').keyup(function() {
  var searchString = $(this).val().toLowerCase();
  if (searchString === '') {
    $('.photo-div').show(1000);
  } else {
    $('.photo-div').each(function() {
      var caption = $(this).children("[data-lightbox='photo-gallery']").attr('data-title').toLowerCase();
      caption = caption.replace('<br>', '');
      if (!caption.includes(searchString)) {
        $(this).hide(1000);
      } else {
        $(this).show(1000);
      }
    });
  }
});

// Lightbox configuration
lightbox.option({
  'wrapAround': true,
  'showImageNumberLabel': false,
  'alwaysShowNavOnTouchDevices': true,
});
