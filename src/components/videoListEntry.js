angular.module('video-player')
.component('videoListEntry', {
  templateUrl: 'src/templates/videoListEntry.html',
  bindings: {
    video: '<',
    clickerFxn: '<'
  },
  controller: function($scope, $element, $attrs) {

  }
});
