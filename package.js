Package.describe({
  name: 'chrisbutler:admin-lte',
  version: '1.0.0',
  summary: 'AdminLTE dashboard theme',
  git: 'https://github.com/chrisbutler/meteor-admin-lte.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'templating',
    'tracker',
    'underscore',
    'reactive-var',
    'twbs:bootstrap@3.3.6'
  ], 'client');

  api.addFiles([
    'admin-lte.html',
    'admin-lte.js'
  ], 'client');

  api.addFiles([
    'css/AdminLTE.min.css',
    'css/skins/skin-black-light.min.css',
    'css/skins/skin-black.min.css',
    'css/skins/skin-blue-light.min.css',
    'css/skins/skin-blue.min.css',
    'css/skins/skin-green-light.min.css',
    'css/skins/skin-green.min.css',
    'css/skins/skin-purple-light.min.css',
    'css/skins/skin-purple.min.css',
    'css/skins/skin-red-light.min.css',
    'css/skins/skin-red.min.css',
    'css/skins/skin-yellow-light.min.css',
    'css/skins/skin-yellow.min.css'
  ], 'client', { isAsset: true });

  api.addFiles([
    'client/common/admin.js',
    'client/common/tree.js',
    'client/header/header.html',
    'client/layout/layout.html',
    'client/layout/layout.js',
    'client/sidebar/sidebar.html',
    'client/sidebar/sidebar.js',
    'client/navbar/navbar.html',
    'client/navbar/navbar.js',
    'client/breadcrumb/breadcrumb.html',
    'client/breadcrumb/breadcrumb.js'
  ], 'client');

  api.export('Admin');

});
