define([
  'lib/underscore',
  'lib/backbone',
  'app/Page',
  'views/PageTwo/ChildView'
  ],
  function(_, Backbone, Page, ChildView) {

  return Page.extend({

    header : {
      title : "Page two",
      previous : {
        path : "page-one",
        name : "Page 1"
      }
    },

    id : "home_page",
    tagName : "div",
    className : "page-2 page full-screen",

    initialize : function() {
      this.addChildView(ChildView);
    },

    render : function() {
      return this;
    }

  });

});