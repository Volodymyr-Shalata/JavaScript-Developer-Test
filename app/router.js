define([
    'jquery',
    'underscore',
    'backbone',
    './views/mainView'
],function($, _, Backbone, MainView) {

    return Backbone.Router.extend({

        mainView: null,

        initialize: function(data) {
            this.mainView = new MainView(data);
            this.data = data;
        },

        routes:{
            '': 'index',
            ':tabId': 'showTab'
        },

        index: function(){
            this.mainView.showTab(_.findWhere(this.data, {order: 0}).id);
        },

        showTab: function(tabId){
            this.mainView.showTab(tabId);
        }
    });
});