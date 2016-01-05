'use strict';

define([
  'underscore',
  'backbone'], function(_, Backbone){

  var PhotoPanel = Backbone.Model.extend({
    defaults: {

    },

    urlRoot: "http://api.flickr.com/services/feeds/photos_public.gne?tags=storm&tagmode=any&format=json&jsoncallback=?",

    // validate: function(attrs){
    //   if(!attrs.title)
    //     return "Title is required";
    // }
  });

  return PhotoPanel;

});
