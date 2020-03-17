var intro = {
  init: function () {

    var playedOnce = false;
    window._wq = window._wq || [];
    _wq.push({
      id: "t0y1clqw1q",
      onReady: function (video) {
        video.bind("popoverhide", function () {
          $.fn.fullpage.moveTo(3);
        });
      }
    });

  }
}