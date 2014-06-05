require.config({
  paths: {
    "jquery": "vender/jquery/dist/jquery",
    "underscore": "vender/underscore-amd/underscore",
    "backbone": "vender/backbone-amd/backbone",
    "text": "vender/requirejs-text/text"
  }
});

require([
    'view/post/list',
    'route'
  ],
  function (AppView, appRouter) {
    new AppView();
    new appRouter();

    //init history
    Backbone.history.start();
  });