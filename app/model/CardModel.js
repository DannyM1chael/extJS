Ext.define('MyApp.model.Card', {
  extend: 'Ext.window.Window',
  xtype: 'model.card',
  title: 'Карточка товара',

  requires: ['MyApp.view.card.Card'],

  width: 400,
  modal: true,
  bodyPadding: 10,
  resizable: false,

  items: {
    xtype: 'view.card',
  },
});
