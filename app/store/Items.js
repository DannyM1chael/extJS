Ext.define('MyApp.store.Items', {
  extend: 'Ext.data.Store',

  requires: ['MyApp.model.Items'],

  alias: 'store.items',

  model: 'MyApp.model.Items',

  data: {
    items: [
      {
        id: 1,
        name: 'Notebook Lenovo',
        description: 'Ноутбук ThinkPad T460',
        price: 100.2,
        qty: 2,
      },
      {
        id: 2,
        name: 'Keyboard OKCLICK',
        description: 'Клавиатура OKCLICK 140M',
        price: 50.3,
        qty: 8,
      },
      {
        id: 3,
        name: 'Network adapter',
        description: 'Сетевой адаптер WiFi D-Link',
        price: 7.2,
        qty: 0,
      },
    ],
  },

  proxy: {
    type: 'memory',
    reader: {
      type: 'json',
      rootProperty: 'items',
    },
  },
});
