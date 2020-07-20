Ext.define('MyApp.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.main',

  onItemSelected: function () {
    Ext.create({
      xtype: 'card',
    });
  },

  onConfirm: function (choice) {
    if (choice === 'yes') {
      //
    }
  },

  onClickButton: function () {
    localStorage.removeItem('MyAppLoggedIn');

    this.getView().destroy();

    Ext.create({
      xtype: 'login',
    });
  },

  onMouseDown: function () {
    alert('click');
  },
});
