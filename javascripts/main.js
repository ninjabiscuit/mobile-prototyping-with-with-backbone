require.config({
  baseUrl: 'javascripts',
  paths: {
    "text" : "lib/text",
    "jquery": "lib/jquery-custom-1.9.0"
  },
  shim: {
    'gfx': {
      deps: ['jquery'],
      exports: '$'
    },
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
  'app/AppRouter',
  'views/AppView',
  'lib/FastClick'
  ],
  function(Backbone, AppRouter, AppView){

    $(document.body).ready(function(){

      new FastClick(this);
      new AppRouter(new AppView());

      // allow :active styles to work in your CSS on a page in Mobile Safari
      // http://css-tricks.com/snippets/css/remove-gray-highlight-when-tapping-links-in-mobile-safari/
      document.addEventListener("touchstart", function(){}, true);

      Backbone.history.start({pushState: true, root: "/~circularpiecesofmusic/mobile-prototyping-with-with-backbone/"});

    });
  }
);