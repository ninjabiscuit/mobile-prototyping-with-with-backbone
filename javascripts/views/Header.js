define([
  'lib/underscore',
  'lib/backbone',
  'app/Page',
  'text!templates/header.ejs'
  ],
  function(_, Backbone, Page, header) {

  return Page.extend({

    tagName : "div",
    className : "page-header",

    template : _.template(header),

    initialize : function() {
      if (_.isUndefined(this.model)) { return this; }
      this.template = _.template(header);
    },

    render : function() {
      this.$el.html(this.template(this.model));
      return this;
    },

    onBackClick : function(evt) {
      evt.preventDefault();
      window.history.back();
    }

  });

});