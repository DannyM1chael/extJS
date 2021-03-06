Ext.define('MyApp.view.login.Login', {
  extend: 'Ext.window.Window',
  xtype: 'login',

  requires: ['MyApp.view.login.LoginController', 'Ext.form.Panel'],

  controller: 'login',
  bodyPadding: 10,
  title: 'Окно входа',
  closable: false,
  autoShow: true,

  items: {
    xtype: 'form',
    reference: 'form',
    items: [
      {
        xtype: 'textfield',
        name: 'username',
        fieldLabel: 'Логин',
        reference: 'username',
        allowBlank: false,
      },
      {
        xtype: 'textfield',
        name: 'password',
        inputType: 'password',
        fieldLabel: 'Пароль',
        reference: 'password',
        allowBlank: false,
      },
      {
        xtype: 'displayfield',
        hideEmptyLabel: false,
        value: 'Введите ваш логин и пароль',
      },
    ],
    buttons: [
      {
        text: 'Войти',
        formBind: true,
        listeners: {
          click: 'onLoginClick',
        },
      },
    ],
  },
});
