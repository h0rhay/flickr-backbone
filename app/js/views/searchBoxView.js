
define([
  'jquery',
  'underscore',
  'backbone',
  'models/searchBox'], function($, _, Backbone, SearchBox){

    var SearchBoxView = Backbone.View.extend({

      initialize: function(options) {
        searchW = options.searchWord;
      },

      events: {
        "click #fireSearch" : "handleSearch"
        //"keydown" : "handleSearch OR keyAction"
      },

      handleSearch: function(){
        var newSearchTerm = $('#searchTerm').val(),
            searchHeader = $('#searchHeader span');
        imageFeed = 'http://api.flickr.com/services/feeds/photos_public.gne?tags='+newSearchTerm+'&tagmode=any&format=json&jsoncallback=?';
        console.log(imageFeed);
        searchHeader.text(newSearchTerm);
      },

      // keyAction: function(e) {
      //  var ENTER_KEY = 13;
      //   if (e.which === ENTER_KEY) {
      //     this.collection.add({text: this.$el.val()});
      //   }
      // },

      render: function(){

        this.$el.html('<h2 id="searchHeader">Tagged: <span>'+searchW+'</span></h2><input type="text" id="searchTerm"><button id="fireSearch" class="button">Go</button>');

        return this;
      }
    });

    return SearchBoxView;

});
