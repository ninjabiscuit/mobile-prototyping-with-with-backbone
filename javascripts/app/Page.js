define([
  'lib/underscore',
  'lib/backbone',
  'lib/gfx',
  'lib/gfx.effects'
  ],
  function(_, Backbone) {

    var Page = function (options) {
      this.child_views = [];
      Backbone.View.apply(this, [options]);
    };

    _.extend(Page.prototype, Backbone.View.prototype, {

      addChildView : function(child, args) {
        child = new child(args);
        this.$el.append(child.el);
        this.child_views.push(child);
        return child;
      },

      close : function() {
        this.child_views.forEach(function(view) {
          view.unbind().remove();
        });
        this.unbind().remove();
        this.child_views = [];
      },

      effectDefaults : {
        duration: 450,
        easing: 'cubic-bezier(.25, .1, .25, 1)'
      },

      effectOptions : function(options) {
        return _.extend({}, this.effectDefaults, options || {});
      },

      activate : function(direction) {
        if (direction) {
          return this.effects[direction].apply(this);
        }
      },

      deactivate : function(direction) {
        if (direction) {
          return this.reverseEffects[direction].apply(this);
        }
        this.close();
      },

      effects : {
        left: function() {
          this.$el.gfxSlideIn(this.effectOptions({
            direction: 'left'
          }));
        },

        right: function() {
          this.$el.gfxSlideIn(this.effectOptions({
            direction: 'right'
          }));
        }
      },

      reverseEffects : {
        left: function() {
          this.$el.gfxSlideOut(this.effectOptions({
            direction: 'right'
          }));
          return this.$el.queueNext(this.close.bind(this));
        },

        right: function() {
          this.$el.gfxSlideOut(this.effectOptions({
            direction: 'left'
          }));
          return this.$el.queueNext(this.close.bind(this));
        }
      }

    });

    Page.extend = Backbone.View.extend;

    return Page;

  });