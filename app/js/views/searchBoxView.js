
define([
  'jquery',
  'underscore',
  'backbone',
  'models/searchBox'], function($, _, Backbone, SearchBox){

    var SearchBoxView = Backbone.View.extend({

      events: {
        "click #fireSearch" : "handleSearch",
        "onkeypress": "handleSearch"
      },

      handleSearch: function(e){
        var searchTerm = $('#searchTerm').val(),
            searchHeader = $('#searchHeader span');
        this.tag = searchTerm;
        Backbone.Events.trigger('search-tag-changed', searchTerm);
        // imageFeed = 'http://api.flickr.com/services/feeds/photos_public.gne?tags='+searchTerm+'&tagmode=any&format=json&jsoncallback=?';
        // console.log(imageFeed);
        // searchHeader.text(searchTerm);
        // photoPanels.fetch();
      },

      getTag: function() {
        return this.tag;
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
