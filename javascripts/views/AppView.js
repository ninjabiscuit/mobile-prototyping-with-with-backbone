define([
  'lib/underscore',
  'lib/backbone'
  ], function(_, Backbone) {

  return Backbone.View.extend({

    el : "#app_container",

    events : {
      "click a" : "handleHistoryClicks"
    },

    current_view : undefined,

    initialize : function() {
      this.render();
    },

    show : function(view, direction) {

      direction || (direction = "right");

      if (!_.isUndefined(this.current_view)) {
        this.current_view.deactivate({trans:direction});
      }

      view.render().$el.appendTo(this.$el);
      view.activate({trans:direction});
      this.current_view = view;
    },

    render: function() {
      return this;
    },

    handleHistoryClicks : function(event) {
      event.preventDefault();
      Backbone.history.navigate(event.currentTarget.getAttribute('href'), { trigger: true });
    }

  });
});