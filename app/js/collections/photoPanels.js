'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'models/photoPanel'], function($, _, Backbone, PhotoPanel){

    var PhotoPanels = Backbone.Collection.extend({
      model: PhotoPanel,

      initialize: function(models, options) {
        // this.searchBox = options.searchBox;

        var self = this;
        Backbone.Events.on('search-tag-changed', function(term) {
          self.tag = term;
          self.fetch();
        });
      },

      url: function() {
        return "http://api.flickr.com/services/feeds/photos_public.gne?tags="+this.tag+"&tagmode=any&format=json&jsoncallback=?"
      },

      fetch: function() {
        Backbone.Collection.prototype.fetch({
          success: function() {
            $("#flickrData").append(photoPanelsView.render().$el);
          }
        });
      },

      // Clean up data here:
      // parse: function(data) {
      //   data.title = data.title.replace('a', 'b');
      //
      //   return data;
      // }
    });

    return PhotoPanels;

  });
