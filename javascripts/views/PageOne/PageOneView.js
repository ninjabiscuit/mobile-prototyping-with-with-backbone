define([
  'lib/underscore',
  'lib/backbone',
  'app/Page',
  'views/PageOne/ChildView',
  'views/HeaderView'
  ],
  function(_, Backbone, Page, ChildView, HeaderView) {

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
    className : "page-1 page",

    initialize : function() {
      // this.listenTo(this.collection, "add", this.renderUser.bind(this));
      this.addChildView(new ChildView());
    },

    render : function() {
      // this.addChildView(new HeaderView({model:this.header}));
      return this;
    },

    remove : function() {
      console.log("pageone");
    }

  });

});