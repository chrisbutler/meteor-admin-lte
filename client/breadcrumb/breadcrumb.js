Template.mfAdminBreadcrumb.helpers({
  breadcrumb: function () {
    return _.map(Admin.breadcrumbs(), function (item, index, arr) {
      var isActive = index === (arr.length - 1);
      return _.extend({}, item, isActive ? { isActive: isActive, path: null, url: null } : {});
    });
  },

  url: function () {
    if (this.path) {
      return Admin.path(this.path);
    }

    if (this.url) {
      return this.url;
    }
  }
})
