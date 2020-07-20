Ext.define('MyApp.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.main',

  onItemSelected: function (sender, record) {
    Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
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
