'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'models/photoPanel',
  'views/photoPanelView'], function($, _, Backbone, PhotoPanel, PhotoPanelView){

    var PhotoPanelsView = Backbone.View.extend({
      id: "flickr",

      // initialize: function(opts){
      //   if(!(opts && opts.model))
      //     throw new Error("model is not defined.");
      // },


      render: function(){
        var self = this;

        this.model.each(function(photoPanel){
          var view = new PhotoPanelView({model: photoPanel});
          self.$el.append(view.render().$el);
        });

        return this;
      }
    });

    return PhotoPanelsView;

  });
