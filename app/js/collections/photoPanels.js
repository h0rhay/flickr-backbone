'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'models/photoPanel'], function($, _, Backbone, PhotoPanel){

    var PhotoPanels = Backbone.Collection.extend({
      model: PhotoPanel,

      url: "http://api.flickr.com/services/feeds/photos_public.gne?tags=storm&tagmode=any&format=json&jsoncallback=?"
    });

    return PhotoPanels;

  });
