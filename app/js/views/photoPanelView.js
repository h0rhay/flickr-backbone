'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'models/photoPanel'], function($, _, Backbone, Mustache, PhotoPanel){

    var PhotoPanelView = Backbone.View.extend({
      //className: "mod",

      initialize: function(opts){
        // if(!(opts && opts.model))
        //   throw new Error("model is not speified");

        //this.model.on("change", this.render, this);
      },

      render: function(){
        var template = $("#image-template").html();
        var html = Mustache.render(template, this.model.toJSON());
        this.$el.html(html);

        return this;
      }
    });

    return PhotoPanelView;

});
