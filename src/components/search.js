angular.module('video-player')
  .controller('SearchCtrl', function () {
    this.handleClick = () => {
      this.debounceSearch();
    };

    this.handleKeyPress = ($event) => {
      if (this.input !== '') {
        this.debounceSearch();
      }

      if ($event.key === 'Enter') {
        this.input = '';
      }
      //console.log($event);

    };

    this.debounceSearch = _.debounce(() => {
      this.service.search(this.input, (data) => {
        this.result(data);
      });
    },500);
  })
  .component('search', {
    bindings: {
      result: '<',
      service: '<'
    },
    controller: 'SearchCtrl',
    templateUrl: "src/templates/search.html"
  });
