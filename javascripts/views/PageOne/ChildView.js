define([
  'lib/underscore',
  'lib/backbone',
  'text!templates/childView.ejs'
  ], function(_, Backbone, childViewTemplate) {

  return Backbone.View.extend({

    template: _.template(childViewTemplate),

    className : "child-view-item",
    tagName : "div",

    initialize: function() {},

    render: function() {
      return this;
    }

  });
});