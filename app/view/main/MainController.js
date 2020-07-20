Ext.define('MyApp.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.main',

  onItemSelected: function () {
    Ext.create({
      xtype: 'model.card',
      autoShow: true,
    });
  },

  onSaveClick: function () {
    console.log('Сохранено');
  },

  onCancelClick: function () {
    console.log('Отменено');
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
    var tabs = Ext.getCmp('tabs');
    tabs.add({
      items: [
        {
          xtype: 'mainlist',
        },
      ],
    });
  },
});
