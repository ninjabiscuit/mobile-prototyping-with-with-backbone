define([
  'lib/underscore',
  'lib/backbone',
  'app/Page',
  'views/PageOne/ChildView'
  ],
  function(_, Backbone, Page, ChildView) {

  return Page.extend({

    header : {
      title : "Page 1",
      next : {
        path : "page-two",
        name : "Page 2"
      },
      previous : {
        path : "",
        name : "Home"
      }
    },

    id : "home_page",
    tagName : "div",
    className : "page-1 page full-screen",

    initialize : function() {
      this.addChildView(ChildView);
    },

    render : function() {
      return this;
    }

  });

});