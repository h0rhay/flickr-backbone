'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'models/photoPanel'], function($, _, Backbone, PhotoPanel){
    // http://api.flickr.com/services/feeds/photos_public.gne?tags=storm&tagmode=any&format=json&jsoncallback=?
    var PhotoPanels = Backbone.Collection.extend({
      initialize: function(models, options) {
        this.url = "http://api.flickr.com/services/feeds/photos_public.gne?tags="+options.searchWord+"&tagmode=any&format=json&jsoncallback=?";
      },
      model: PhotoPanel
      // url: function(){
      //   //debugger;
      //   return "http://api.flickr.com/services/feeds/photos_public.gne?tags="+this.searchWord+"&tagmode=any&format=json&jsoncallback=?";
      // }
    });

    return PhotoPanels;

  });
