document.getElementById('reveal-button').addEventListener('click', function() {
    document.getElementById('hidden-message').classList.toggle('hidden');
});
function flip(id) {
  // get a handle on the flippable region
  var front = getElement('front');
  var back = getElement('back');

  // again, just a simple way to see what the state is
  var classes = front.className.split(' ');
  var flipped = classes.indexOf('flipped');

  if (flipped >= 0) {
    // already flipped, so return to original
    front.className = 'normal';
    back.className = 'flipped';
    FLIPPED = false;
  } else {
    // do the flip
    front.className = 'flipped';
    back.className = 'normal';
    FLIPPED = true;
  }
}
