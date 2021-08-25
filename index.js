(function () {
  console.log("Happy Birthday !!!");
  const $letter = $(".letter");
  const $boxLetter = $(".box-letter");
  const $gift = $(".gift");
  const $video = $(".video");
  const $boxCircle = $(".box-circle");

  const ICON = {
    letter: '<i class="fas fa-envelope"></i>',
    letterOPen: '<i class="fas fa-envelope-open icon-letter"></i>',
  };

  let state = {
    letter: false,
    video: {
        src: './public/videos/1.mp4'
    },
    next: false
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
    animation();
  });

  var count = 1;

  const animation = function () {
    setTimeout( () => {
      $boxCircle.show();
      state.next = true;
    }, 1000);

    var animate = setInterval(() => {
      count++;
      $boxCircle.find('.img')[0].src = `./public/imgs/${count}.jpg`
      if(count == 3) {      
        clearInterval(animate);
        setTimeout(() => {
          $boxCircle.remove();
          setTimeout(() => {
            $video.show();
          }, 1000);
        }, 1000);
      }
    }, 2000);
  }

  // function common
  const timeRemoveLetter = function (openLetter, selector) {
    if (openLetter) {
      setTimeout(() => {
        selector.remove();
      }, 800);
    }
  };

  $(function() {
    $boxCircle.hide();
    $video.hide();
  })

})();
