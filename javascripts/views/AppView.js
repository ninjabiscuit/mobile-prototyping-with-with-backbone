define([
  'lib/underscore',
  'lib/backbone',
  'views/Header',
  'jquery'
  ], function(_, Backbone, Header) {

  return Backbone.View.extend({

    el : "#app_container",

    events : {
      "click a.navigate" : "handleHistoryClicks"
    },

    current_page   : undefined,
    current_header : undefined,

    initialize : function() {
      this.render();
    },

    show : function(view) {
      if (!_.isUndefined(this.current_page)) {
        this.current_page.deactivate("right");
      }

      if (!_.isUndefined(this.current_header)) {
        this.current_header.deactivate("right");
      }

      if (!_.isUndefined(view.header)) {
        var header = new Header({
          model: typeof view.header === "function" ? view.header.call(view) : view.header
        });
        this.current_header = this.activateView(header);
      }
      
      this.current_page = this.activateView(view);
    },

    activateView : function(view) {
      this.$el.append(view.render().$el);
      view.activate("right");
      return view;
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