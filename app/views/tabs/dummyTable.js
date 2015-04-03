define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {

    return Backbone.View.extend({

        el: 'div#dummyTable',

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html('<table><tr><td>Dummy</td></tr><tr><td>Table</td></tr></table>');
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