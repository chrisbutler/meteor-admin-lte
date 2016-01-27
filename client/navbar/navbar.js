Admin.navbar = new Tree();

var navbarHelpers = {
  items: function (ctx) {
    var tree = ctx && ctx._tree ? ctx._tree : Admin.navbar.get();
    return _.sortBy(_.values(tree), function (item) {
      return item && item.order ? item.order : 0;
    }).reverse();
  },

  hasSubItems: function (ctx) {
    return ctx && _.keys(ctx._tree).length > 0;
  },

  href: function () {
    if (this.url) {
      return this.url;
    }

    if (this.path) {
      return Admin.path(this.path);
    }

    return '#';
  }
};

Template.mfAdminNavbarItems.helpers(navbarHelpers);
Template.mfAdminNavbarItem.helpers(navbarHelpers);
Template.mfAdminNavbarDropdown.helpers(navbarHelpers);
