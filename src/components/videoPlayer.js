angular.module('video-player')
  .controller('VideoPlayerCtrl', function () {
    this.getVideoUrl = () => {
      return this.video ? `https://www.youtube.com/embed/${this.video.id.videoId}` : '';
    };
  })
.component('videoPlayer', {
  bindings: {
    video: '<'
  },
  controller: 'VideoPlayerCtrl',
  templateUrl: 'src/templates/videoPlayer.html',
});
