Ext.define('MyApp.view.card.Card', {
  extend: 'Ext.window.Window',
  xtype: 'card',

  requires: ['MyApp.view.card.CardController', 'Ext.form.Panel'],

  controller: 'card',

  title: 'Карточка товара',
  closable: false,
  autoShow: true,

  items: {
    xtype: 'form',
    reference: 'form',
  },
});
