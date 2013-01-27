define([
  'lib/underscore',
  'lib/backbone',
  'app/Page',
  'views/PageTwo/ChildView',
  'views/HeaderView'
  ],
  function(_, Backbone, Page, ChildView, HeaderView) {

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
    className : "page-2 page",

    initialize : function() {
      // this.listenTo(this.collection, "add", this.renderUser.bind(this));
      this.addChildView(new ChildView());
    },

    render : function() {
      this.addChildView(new HeaderView({model:this.header}));
      return this;
    },

    remove : function() {
      console.log("pagetwo");
    }

  });

});