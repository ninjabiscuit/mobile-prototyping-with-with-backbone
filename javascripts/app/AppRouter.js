define([
  'lib/underscore',
  'lib/backbone',

  'views/AppView',
  'views/HomeView',
  'views/PageOne/PageOneView',
  'views/PageTwo/PageTwoView'

  ], function(_, Backbone, AppView, HomeView, PageOneView, PageTwoView) {

    return Backbone.Router.extend({

      routes: {
        "" : "homepage",
        "page-one": "page_one",
        "page-two": "page_two"
      },

      initialize : function() {
        this.app = new AppView();
      },

      homepage : function() {
        this.app.show(new HomeView());
      },

      page_one: function() {
        this.app.show(new PageOneView());
      },

      page_two: function() {
        this.app.show(new PageTwoView());
      }

    });

  });