define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {

    return Backbone.View.extend({

        el: 'div#dummyList',

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html('<table><tr><td>Dummy</td></tr><tr><td>List</td></tr></table>');
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