Admin = {
  config: new ReactiveDict(),
  path: function(path) {
    return path || '/';
  },
  breadcrumbs: function() {
    var route = Router.current().route;
    return route.options.breadcrumb || route.findControllerConstructor().prototype.breadcrumb;
  }
};

Template.registerHelper('Admin', Admin);

Admin.config.setDefault('layoutTemplate', 'mfAdminLayout');
Admin.config.setDefault('name', 'Admin');
