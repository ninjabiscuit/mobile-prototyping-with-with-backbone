define([
  'lib/underscore',
  'lib/backbone',
  'app/Page'
  ],
  function(_, Backbone, Page) {

  return Page.extend({

    header : {
      title : "Home",
      next : {
        path : "page-one",
        name : "Page 1"
      }
    },

    id : "home_page",
    tagName : "div",
    className : "home-page page full-screen",

    render : function() {
      return this;
    }

  });

});