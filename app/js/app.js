/* jshint devel:true */

'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'models/photoPanel',
  'models/searchBox',
  'collections/photoPanels',
  //'collections/searchBoxes',
  'views/photoPanelView',
  'views/photoPanelsView',
  'views/searchBoxView'], function($, _, Backbone, Mustache, PhotoPanel, SearchBox, PhotoPanels, PhotoPanelView, PhotoPanelsView, SearchBoxView){

      var initialize = function(){

              // var imageFeed = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=storm&tagmode=any&format=json&jsoncallback=?',
              var flickrFun = {};

              /*-----------------------------------------------------------------------------------
              :: INIT
              ---------------------------------------------------------------------------------- */

              flickrFun.init = function () {
                  $(document).on('ready', flickrFun.ready);

                  $(window).on('resize', flickrFun.resize);

                  $(window).on('load', flickrFun.load);

                  $(window).on('scroll', flickrFun.scroll);
              };


              /*-----------------------------------------------------------------------------------
              :: READY
              ---------------------------------------------------------------------------------- */

              flickrFun.ready = function () {
                  var searchWord = "storm";
                  // Init Backbone views
                  var searchBox = new SearchBox();
                  //var searchBox = new SearchBox({ model: searchBox });
                  var searchBoxView = new SearchBoxView({ searchWord: searchWord });
                  //var searchBoxView = new SearchBoxView({ model: searchBoxView });
                  var photoPanels = new PhotoPanels([], { searchWord: searchWord });

                  $(".searchWrap").append(searchBoxView.render().$el);

                  photoPanels.fetch({
                    success: function(){
                      var photoPanelsView = new PhotoPanelsView({
                        model: photoPanels
                        //searchWord: searchword
                      });
                      $("#flickrData").append(photoPanelsView.render().$el);
                      // Manipulations
                      flickrFun.swapSrc();
                      flickrFun.removeUnwanted();
                      flickrFun.fixAuthorLinks();
                    }
                  });


                  //flickrFun.pollFlickrBuild();

                  //$('html').on('click','#fireSearch', flickrFun.getSetSearch);
                  //$('html').on('keypress', function(e) {
                  //    if(e.which === 13) {
                  //        flickrFun.getSetSearch();
                  //    }
                  //});
              };


              /*-----------------------------------------------------------------------------------
              :: RESIZE
              ---------------------------------------------------------------------------------- */

              flickrFun.resize = function () {
                  //flickrFun.myFunx();
              };


              /*-----------------------------------------------------------------------------------
              :: LOAD
              ---------------------------------------------------------------------------------- */

              flickrFun.load = function () {
                  //flickrFun.myFunx();

              };

              /*-----------------------------------------------------------------------------------
              :: SCROLL
              ---------------------------------------------------------------------------------- */

              flickrFun.scroll = function () {
                  flickrFun.swapSrc();
              };


              /*-----------------------------------------------------------------------------------
              :: MY FUNCTIONS
              ---------------------------------------------------------------------------------- */

              /*---  Way of the Jquery ---*/
              // flickrFun.pollFlickrBuild = function (){
              //     var imageStack='';
              //     $.getJSON( 'http://api.flickr.com/services/feeds/photos_public.gne?tags=storm&tagmode=any&format=json&jsoncallback=?', function( data ) {
              //         $(data.items).each(function(i, o) {
              //             imageStack += '<div class="mod"><figure><div class="imgWrap"><img class="lazy" src="'+o.media.m+'"/></div> <figcaption>'+o.title+'</figcaption></figure></div>';
              //             //imageStack += '<div class="mod"><figure><div class="imgWrap"><img class="lazy" src="images/loader.gif" data-src="'+o.media.m+'"/></div> <figcaption>'+o.title+'</figcaption></figure></div>';
              //         });
              //         if (imageStack==='') {
              //             $('#flickr').html('Error');
              //             return;
              //         }
              //         $('#flickr').append(imageStack);
              //     });
              // };

              /*---  Way of the Mustache = Better! ;) ---*/
              // flickrFun.pollFlickrBuild = function (){
              //     $.getJSON(imageFeed, function(data) {
              //         var template = $('#image-template').html(),
              //             info = Mustache.to_html(template, data);
              //         $('#flickr').html(info);
              //         flickrFun.swapSrc();
              //         flickrFun.removeUnwanted();
              //         flickrFun.fixAuthorLinks();
              //     });
              // };

              // Get rid of the nobody@flickr business for author links
              flickrFun.removeUnwanted = function (){
                  $('.flickrAuthor').each(function (i,o){
                      var $this = $(o);
                      if($this.html().indexOf("nobody@flickr.com ")!=-1)
                      $this.html($this.html().replace("nobody@flickr.com ", ""));
                  });
              }

              // A quick fix to get around flickr API's 'nobody@flickr.com' security policy
              // This chops off the image id from the title link creating a usable author link for now.. ;)
              flickrFun.fixAuthorLinks = function (){
                  var goodLink = '';
                  $('.flickrTitle').each(function(i,o){
                      goodLink = $(o).attr('href');
                      goodLink = (goodLink.substr(0, goodLink.length - 1));
                      goodLink = (goodLink.substr(0, goodLink.lastIndexOf('/')));
                      $(o).next().attr('href',goodLink);
                  });
              }

              // Fire search
              // flickrFun.getSetSearch = function (){
              //
              // };

              // Check if viz for lazy loading
              flickrFun.checkViz = function ( elm, ev ) {
                  var ev = ev || 'visible';
                  var vpH = $(window).height(), // Viewport Height
                      st = $(window).scrollTop(), // Scroll Top
                      y = $(elm).offset().top,
                      elementHeight = $(elm).height();

                  if (ev === 'visible') return ((y < (vpH + st)) && (y > (st - elementHeight)));
                  if (ev === 'above') return ((y < (vpH + st)));
              }

              // Lazy loading - Swap src
              flickrFun.swapSrc = function(){
                  $('.mod').each(function(i,o){
                      var $this = $(o),
                          $thisImg = $this.find('img'),
                          nuImage = $thisImg.attr('data-src');
                      if (flickrFun.checkViz($this)) {
                          $thisImg.attr('src', nuImage);
                      }
                  });
              }

              return flickrFun.init();

      }

      return {
          initialize: initialize
      };

  });
