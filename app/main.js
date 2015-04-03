define(function (require) {
        require(['./router.js','./tabs.js'],function(Router, JSON) {
            new Router(JSON);
            Backbone.history.start();
        });
});
