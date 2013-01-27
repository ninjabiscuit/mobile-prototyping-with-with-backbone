define([
  'lib/underscore',
  'lib/backbone',
  'lib/gfx',
  'lib/gfx.effects'
  ],
  function(_, Backbone) {

    var Page = function (options) {
      Backbone.View.apply(this, [options]);
    };

    _.extend(Page.prototype, Backbone.View.prototype, {

      addChildView : function(child) {
        child.listenTo(this, "remove", child.remove.bind(child));
        this.$el.append(child.$el);
        child.render();
      },

      close : function() {
        this.trigger("remove");
        this.remove();
      },

      effectDefaults : {
        duration: 450,
        easing: 'cubic-bezier(.25, .1, .25, 1)'
      },

      effectOptions : function(options) {
        options = options || {};
        return _.extend({}, this.effectDefaults, options);
      },

      activate : function(args) {
        args = args || {};
        var effect = args.transition || args.trans;

        if (effect) {
          return this.effects[effect].apply(this);
        }
      },

      deactivate : function(args) {
        args = args || {};
        var effect = args.transition || args.trans;

        if (effect) {
          return this.reverseEffects[effect].apply(this);
        }
        this.close();
      },

      effects : {
        left: function() {
        //   this.$el.gfxSlideIn(this.effectOptions({
        //     direction: 'left'
        //   }));
        },

        right: function() {
          // this.$el.gfxSlideIn(this.effectOptions({
          //   direction: 'right'
          // }));
        }
      },

      reverseEffects : {
        left: function() {
          // this.$el.gfxSlideOut(this.effectOptions({
          //   direction: 'right'
          // }));
          // return this.$el.queueNext(this.close.bind(this));
          this.close();
        },

        right: function() {
          // this.$el.gfxSlideOut(this.effectOptions({
          //   direction: 'left'
          // }));
          // return this.$el.queueNext(this.close.bind(this));
          this.close();
        }
      }

    });

    Page.extend = Backbone.View.extend;

    return Page;

  });