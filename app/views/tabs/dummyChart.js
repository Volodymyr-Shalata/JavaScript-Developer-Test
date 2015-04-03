define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {

    return Backbone.View.extend({

        el: 'div#dummyChart',

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html('<table><tr><td>Dummy</td></tr><tr><td>Chart</td></tr></table>');
            this.hide();
        },

        show: function() {
            this.$el.show()
        },

        hide: function() {
            this.$el.hide();
        }
    });
});