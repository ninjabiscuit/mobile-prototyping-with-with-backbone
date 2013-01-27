define([
  'lib/underscore',
  'lib/backbone',
  'app/Page',
  'views/HeaderView'
  ],
  function(_, Backbone, Page, HeaderView) {

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
    className : "home-page page",

    render : function() {
      // this.addChildView(new HeaderView({model:this.header}));
      return this;
    },

    remove : function() {
      console.log("homeview");
    }

  });

});