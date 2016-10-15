var headingText = ['Hello, ^1000 I am <span class="orange">Talha.</span>'];
var workText = ['I am a <span class="blue">coder,</span> ^1000at <a href="https://www.nextjump.com"><span class="orange">Next Jump.</span></a>']
var subworkText = ['I like <span class="blue">chicken tikka</span> and <span class="orange">nihari^1000.</span>']

$(document).ready(
  function() {
    $('div.body_container').show();
    initalize();
  }
);
function initalize() {
  var makeInstant;
  if (isSessionVisited()) { makeInstant=true; } else { makeInstant=false}

  initiateTyped($('#heading-typed'), headingText, 0, makeInstant);
  initiateTyped($('#work-typed'), workText, 3000, makeInstant);
  initiateTyped($('#subwork-typed'), subworkText, 6000, makeInstant);

  setTimeout( function() { $('.contact-img').fadeIn(800); }, 500)

}

var initiateTyped = function(element, strings, delay, instant) {
  if (typeof delay === 'undefined') { delay = delay*0.1; }
  if (typeof instant === 'undefined') { instant = true; }
  if (instant) {
    delay = 0;
    typeSpeed=-1000000;
    for (var i = 0; i < strings.length; i++) {
      strings[i] = strings[i].replace(/\^\d+/g,'');
    }

  } else {
    typeSpeed=0;
  }
  element.typed({
    strings: strings,
    startDelay: delay,
    typeSpeed: typeSpeed,
    showCursor: true,
    preStringTyped: function() {
      element.next().show();
    },
    callback: function() {
      element.next().hide();
    }
  });
  element.next().hide();
};

var isSessionVisited = function() {
    if (document.cookie.indexOf("visited") >= 0) {
        return true;
    } else {
        document.cookie = "visited";
        return false;
    }
};
