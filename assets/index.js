var headingText = 'Hello, ^1000 I am <span class="orange">Talha.</span>';
var workText = ['I am a <span class="blue">coder,</span> ^1000at <a href="https://www.nextjump.com"><span class="orange">Next Jump</span></a>']
var subworkText = ['I like <span class="blue">chicken tikka</span> and <span class="orange">nihari^1000.</span>']

$(document).ready(
  function() {
    initalize();
  }
);
function initalize() {
  $('#heading-typed').typed({
    strings: [headingText],
    typeSpeed: 0,
    showCursor: true,
    callback: function() {
      $('.heading-container .typed-cursor').hide();
    }
  });

  $('#work-typed').typed({
    strings: workText,
    startDelay: 3000,
    typeSpeed: 0,
    showCursor: true,
    preStringTyped: function() {
      $('.work-container .typed-cursor').show();
    },
    callback: function() {
      $('.work-container .typed-cursor').hide();
    }
  });
  $('#subwork-typed').typed({
    strings: subworkText,
    startDelay: 6000,
    typeSpeed: 0,
    showCursor: true,
    preStringTyped: function() {
      $('.subwork-container .typed-cursor').show();
    },
    callback: function() {
      setTimeout( function() { $('.contact-bar').fadeIn(800); }, 2000)
    }
  });
  $('.contact-bar').hide();
  $('.work-container .typed-cursor').hide(); // This comes after the typed.js initialization above, but because of the delay mentioned in options above, it is processed before the typing.
  $('.subwork-container .typed-cursor').hide(); // This comes after the typed.js initialization above, but because of the delay mentioned in options above, it is processed before the typing.
}
