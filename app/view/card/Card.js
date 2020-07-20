Ext.define('MyApp.view.card.Card', {
  extend: 'Ext.form.Panel',
  xtype: 'view.card',

  requires: ['MyApp.store.Items'],

  store: {
    type: 'items',
  },

  fieldDefaults: {
    labelAlign: 'left',
    margin: '10',
  },

  items: {
    xtype: 'form',
    items: [
      {
        xtype: 'textfield',
        name: 'id',
        fieldLabel: 'ID',
      },
      {
        xtype: 'textfield',
        name: 'description',
        fieldLabel: 'Описание',
      },
      {
        xtype: 'textfield',
        name: 'price',
        fieldLabel: 'Цена',
      },
      {
        xtype: 'textfield',
        name: 'qty',
        fieldLabel: 'Кол-во',
      },
    ],
    buttons: [
      {
        text: 'Сохранить',
        formBind: true,
        listeners: {
          click: 'onSaveClick',
        },
      },
      {
        text: 'Отмена',
        formBind: true,
        listeners: {
          click: 'onCancelClick',
        },
      },
    ],
  },
});
