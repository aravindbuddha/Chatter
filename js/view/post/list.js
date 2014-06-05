define([
  'backbone',
  'underscore',
  'text',
  'text!../../tmpl/post/list.html'
], function (BackBone, _, text, tpl) {
  //var tpl = require('text!../../tmpl/post/list.html');
  var PostList = BackBone.View.extend({
    template: _.template(tpl),
    initialize: function () {

    },
    show: function () {
      console.log(tpl);
    },
    render: function () {
      var html = "<h2>My html</h2>";
      $(this.el).html(html);
    }
  });

  return PostList;
});