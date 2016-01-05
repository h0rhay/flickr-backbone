require.config({
  paths: {
    jquery: '/libs/jquery-1.11.3.min',
    underscore: '/libs/underscore-min',
    backbone: '/libs/backbone.1.2.3-min',
    mustache: '/libs/mustache.min'
  }
});

define(['app'], function(App){
  App.initialize();
});
