// Filename: router.js
define(['backbone'], function (Backbone) {
  var appRouter = Backbone.Router.extend({
    routes: {
      "post/:title": "getPostByTitle",
      "admin/posts": "listPosts",
      "admin/post/edit/:id": "editPost"
    },
    getPostByTitle: function (title) {
      alert(title);
    },
    listPosts: function () {
      alert("hi");
    },
    editPost: function (id) {
      alert(id);
    }
  });


  return appRouter;
});