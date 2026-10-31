



$(function() {
  // Initialise the accordion:
  $('#accordion').accordion({
    heightStyle: 'content',
    collapsible: true,
    active: false,
    header: 'h1'
  });
  // Get the #hash in the URL:
  var hash = window.location.hash;
  hash = hash.slice(1);
  var active = false;
  // Activate appropriate accordion item and scroll to it:
  if (hash === 'research') {
    active = 0;
  } else if (hash === 'pubs') {
    active = 1;
  } else if (hash === 'reviews') {
    active = 2;
  } else if (hash === 'coded') {
    active = 3;
  }
  if (hash) {
    $('#accordion').accordion('option', 'active', active);
    $('html,body').animate({
      scrollTop: $('#accordion').offset().top
    });
  }

});
