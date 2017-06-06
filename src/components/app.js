angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: ['youTube', function(youTube) {
      //$scope.videos = window.exampleVideoData;
      //console.log($scope);
      console.log(youTube);
      this.youTubeCallback = function(result) {
        console.log(result);
        this.videos = result.data.items;
        this.currentVideo = result.data.items[0];
      };
      youTube.searchYoutube('test query', this.youTubeCallback.bind(this));
      this.onClick = ($event) => {
        console.log('app.onClick event =',$event);
        if ($event.srcElement.className === 'video-list-entry-title ng-binding') {
          this.currentVideo = this.videos.filter(function(cur) {
            console.log('inner text on clk is:', cur.snippet.title, cur.id.videoId);
            console.log(cur.snippet.title,$event.srcElement.innerText,cur.snippet.title === $event.srcElement.innerText);
            return cur.snippet.title === $event.srcElement.innerText ? true : false;
          })[0];
          console.log(this.currentVideo);
        }
      };
      this.textBinding = 'oh hi';
      this.videos = window.exampleVideoData;
      this.currentVideo = window.exampleVideoData[0];
      //return $scope;
    }]
  });


