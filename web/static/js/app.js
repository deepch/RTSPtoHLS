

$(document).ready(function() {
  var suuid = $('#suuid').val();
  $('#'+suuid).addClass('active');
  var video = document.getElementById('livestream');
  var videoSrc = '/play/hls/'+suuid+'/index.m3u8';
  if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoSrc;
  } else if (Hls.isSupported()) {
    var hls = new Hls({
      autoStartLoad: true,
      debug: true,
      manifestLoadingTimeOut : 20000
    });
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
  }

});
