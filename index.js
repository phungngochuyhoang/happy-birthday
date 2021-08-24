(function () {
  console.log("Happy Birthday !!!");
  const $letter = $(".letter");
  const $boxLetter = $(".box-letter");
  const $gift = $(".gift");
  const $video = $(".video");

  const ICON = {
    letter: '<i class="fas fa-envelope"></i>',
    letterOPen: '<i class="fas fa-envelope-open icon-letter"></i>',
  };

  let state = {
    letter: false,
    video: {
        src: './public/videos/1.mp4'
    }
  };

  $letter.children().on("click", function () {
    $letter.html(ICON.letterOPen);
    state.letter = true;
    timeRemoveLetter(state.letter, $letter);
    $letter.animate({ opacity: "0" }, 1000);
    $boxLetter.css({ display: "block" });
  });

  $gift.on("click", function () {
    $boxLetter.animate({ opacity: "0" }, 1000);
    setTimeout(() => {
      $boxLetter.remove();
    }, 1000);
    $video.show();
  });

  // function common
  const timeRemoveLetter = function (openLetter, selector) {
    if (openLetter) {
      setTimeout(() => {
        selector.remove();
      }, 800);
    }
  };

  $(function() {
    $video.hide();
  })

})();
