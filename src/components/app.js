angular.module('video-player')
  .controller('AppCtrl', function(youTube) {

    this.searchService = youTube;
    this.youTubeCallback = (result) => {
      console.log(result);
      this.videos = result.data.items;
      this.currentVideo = result.data.items[0];
    };

    /*
    this.onClick = ($event) => {
      console.log('app.onClick event =',$event);
      if ($event.srcElement.className === 'video-list-entry-title ng-binding') {
        this.currentVideo = this.videos.filter(function(cur) {
          //console.log('inner text on clk is:', cur.snippet.title, cur.id.videoId);
          //console.log(cur.snippet.title,$event.srcElement.innerText,cur.snippet.title === $event.srcElement.innerText);
          return cur.snippet.title === $event.srcElement.innerText
        })[0];
        console.log(this.currentVideo);
      }
    };
    */

    this.selectVideo = (video) => {
      this.currentVideo = video;
    };

    this.searchResults = (data) => {
      console.log('searchResults: ',data);
      this.videos = data;
      this.currentVideo = this.videos[0];
    };

    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    youTube.search('test query', this.searchResults);
    console.log(this);

  })
  .component('app', {
    controller: 'AppCtrl',
    templateUrl: 'src/templates/app.html'

  });


