define([
  'lib/underscore',
  'lib/backbone',
  'text!templates/childView.ejs'
  ], function(_, Backbone, childViewTemplate) {

  return Backbone.View.extend({

    template: _.template(childViewTemplate),

    className : "child-view-item",
    tagName : "div",

    initialize: function() {
      // this.listenTo(this.model, 'remove', this.remove.bind(this));
    },

    render: function() {
      // this.$el.html(this.template());
      return this;
    }

  });
});