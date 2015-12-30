'use strict';
var PhotoPanels = Backbone.Collection.extend({
  model: PhotoPanel,

  url: "http://api.flickr.com/services/feeds/photos_public.gne?tags=storm&tagmode=any&format=json&jsoncallback=?"
});
