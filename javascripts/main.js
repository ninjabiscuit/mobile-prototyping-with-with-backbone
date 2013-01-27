require.config({
  baseUrl: 'javascripts',
  paths: {
    "text" : "lib/text"
  },
  shim: {
    'lib/underscore': {
      exports: '_'
    },
    'lib/backbone': {
      deps: ['lib/underscore'],
      exports: 'Backbone'
    }
  }
});

require([
  'lib/backbone',
  'app/AppRouter'
  ],
  function(Backbone, AppRouter){

    $(document.body).ready(function(){

      new AppRouter();
      Backbone.history.start({pushState: true, root: "/~circularpiecesofmusic/mobile-prototyping-with-with-backbone/"});
    });
  }
);