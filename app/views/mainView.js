define([
    'jquery',
    'underscore',
    'backbone'
],function($, _, Backbone) {

    return Backbone.View.extend({

        tabsRoot: 'app/views/',
        el: '#container',
        tabTemplate: _.template('<a class="tab" href="#<%= id %>"><%= name %></a>'),
        tabBodyHtml: _.template('<div hidden="true" id="<%= id %>" ></div>'),
        data: null,
        tabs: {},

        initialize: function(data) {
            this.data = data;
            this.appendTabDivs();
        },

        appendTabDivs: function() {
            var self = this;
            this.data.forEach(function(val) {
                var tabHtml = self.tabTemplate({
                    name: val.title,
                    id: val.id
                });
                self.$el.prepend(tabHtml);

                var tabBodyHtml = self.tabBodyHtml({
                    id: val.id
                });
                self.$el.append(tabBodyHtml);
            });
        },

        showTab: function(selectedTabId) {
            var self = this;
            var path = self.tabsRoot + _.findWhere(this.data, {id: selectedTabId}).path;

            require([path], function(Tab) {

                if (!self.tabs[selectedTabId]) {
                    self.tabs[selectedTabId] = new Tab(selectedTabId);
                }
                //show current tab
                self.tabs[selectedTabId].show();

                //hide all another tabs
                _.filter(_.keys(self.tabs), function(anotherTabId) {
                    return anotherTabId !== selectedTabId;
                }).forEach(function(anotherTabId) {
                    self.tabs[anotherTabId].hide();
                });
            });
        }
    });
});
