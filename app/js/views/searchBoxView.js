
define([
  'jquery',
  'underscore',
  'backbone',
  'models/searchBox'], function($, _, Backbone, SearchBox){

    var SearchBoxView = Backbone.View.extend({

      events: {
        "click #fireSearch" : "handleSearch"
      },

      handleSearch: function(){
        var searchTerm = $('#searchTerm').val(),
            searchHeader = $('#searchHeader span');
        imageFeed = 'http://api.flickr.com/services/feeds/photos_public.gne?tags='+searchTerm+'&tagmode=any&format=json&jsoncallback=?';
        console.log(imageFeed);
        searchHeader.text(searchTerm);
      },

      render: function(){

        this.$el.html('<input type="text" id="searchTerm"><button id="fireSearch" class="button">Go</button>');

        return this;
      }
    });

    return SearchBoxView;

});
