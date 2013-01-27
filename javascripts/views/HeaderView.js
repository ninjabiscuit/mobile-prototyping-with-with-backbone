define([
  'lib/underscore',
  'lib/backbone',
  'text!templates/header.ejs'
  ],
  function(_, Backbone, header) {

  return Backbone.View.extend({

    tagName : "div",
    className : "header",

    template : _.template(header),

    render : function() {
      this.$el.html(this.template(this.model));
      return this;
    },

    remove : function() {
      console.log("header");
    }

  });

});