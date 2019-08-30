const newTyper = (duration, elementId, strs) => {
  return {
    Text: strs,
    Duration: duration,
    ElementId: elementId
  };
};
const typedText = {
  heading: newTyper(1000, "heading-typed", [
    'Hello, ^1000 I am <span class="orange">Talha.</span>'
  ]),
  work: newTyper(4000, "work-typed", [
    'I am a <span class="blue">coder,</span> ^1000at <a href="https://www.glassdoor.com/Overview/Working-at-Devoted-Health-EI_IE2183017.11,25.htm" target="_blank"><span class="purple underlineOnHover">Devoted Health.</span></a>'
  ]),
  other: newTyper(7000, "subwork-typed", [
    'I like <span class="blue">lamb chops</span> and <a href="https://en.wikipedia.org/wiki/Nihari" target="_blank"><span class="orange">nihari^1000.</span></a>^1000',
    'I also like ^500tinkering with^500 <a href="https://golang.org/" target="_blank">Go.</a>^1000',
    'You can check out^500 my Github at^500 <a href="https://github.com/teejays" target="_blank">github.com/teejays.</a>'
  ]),
  convo: newTyper(20000, "convo-typed", [
    "^10000",
    "I am not going to be^500 typing forever,^1000 in case you are wondering...^5000",
    "^...^500",
    "I meant it.^1000.. I have things to do..^1000 Important things!",
    "Like^400...^500playing Fifa...^500 :/ ^2000",
    "Aghh... well,^1000 if you don't trust me,^500 you can check^500 the source code for this webpage.^2000",
    'You can see in the <a href="assets/index.js" target="_blank">index.js</a> file that^500 this is literally the ^1000(second) last line I will type.^3000',
    "This one being the last. Bubye now!^1000 :) ^2000",
    "^18000",
    "(the cursor will keep on flashing...^500 doesn't mean I am going to type)^1000",
    "^8000",
    "...fine, ^500 I lied about that being the last line.^1000",
    "But hey! you never checked the source code...^1000 did you?^1000",
    "I think^100But hey! you never check^100The cursor is going to keep on flashing... doesn't mean I am ^100But hey! you never checked the^100But hey! you never checked the^2000",
    "S^500h^500i^500t^500t^500!^500!^1000 Seems like there is a bug in this code! :( ^2000 I should go fix it...^1000000",
    "^1000 "
  ])
};

$(document).ready(function() {
  $("#bg-img").imagesLoaded(function() {
    $("body").css("background-image", "url(" + "assets/bg_paper1.png" + ")");
    $("div.body_container").show();
    initalize();
  });
});

function initalize() {

  // Fade In the Profile Picture
  setTimeout(function() {
    $(".profile-img-container").fadeIn(800);
  }, 100);

  // Initialize the typings
  Object.keys(typedText).map((key, i) => {
    const item = typedText[key];
    initiateTyped(item.ElementId, item.Text, item.Duration, false);
  });
}

var initiateTyped = function(elementId, strings, delay, instant) {
  if (typeof delay === "undefined") {
    delay = delay * 0.1;
  }
  if (typeof instant === "undefined") {
    instant = true;
  }
  if (instant) {
    delay = 0;
    typeSpeed = -1000000;
    for (var i = 0; i < strings.length; i++) {
      strings[i] = strings[i].replace(/\^\d+/g, "");
    }
  } else {
    typeSpeed = 30;
  }
  const element = $(`#${elementId}`);
  var typed = new Typed(`#${elementId}`, {
    strings: strings,
    // contentType: "html",
    startDelay: delay,
    typeSpeed: typeSpeed,
    showCursor: true,
    preStringTyped: function() {
      element.next().show();
    },
    onComplete: function() {
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
