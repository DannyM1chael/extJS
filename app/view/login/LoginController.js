Ext.define('MyApp.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login',

  onLoginClick: function () {
    var username = this.lookupReference('username').getValue();
    var password = this.lookupReference('password').getValue();

    if (username === 'admin' && password === 'padmin') {
      localStorage.setItem('MyAppLoggedIn', true);

      this.getView().destroy();

      Ext.create({
        xtype: 'app-main',
      });
    } else {
      Ext.select('.x-form-display-field-default')
        .setStyle({
          color: 'red',
        })
        .update('Проверьте логин и пароль');
    }
  },
});
