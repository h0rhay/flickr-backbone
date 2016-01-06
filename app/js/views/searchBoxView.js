
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

      },

      render: function(){

        this.$el.html('<input type="text" id="searchTerm"><button id="fireSearch" class="button">Go</button>');

        return this;
      }
    });

    return SearchBoxView;

});
