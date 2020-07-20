Ext.define('MyApp.store.Items', {
  extend: 'Ext.data.Store',

  alias: 'store.items',

  fields: ['id', 'name', 'description', 'price', 'qty'],

  data: {
    items: [
      {
        id: 1,
        name: 'Notebook Lenovo',
        description: 'Ноутбук ThinkPad T460',
        price: 100,
        qty: 2,
      },
      {
        id: 2,
        name: 'Keyboard OKCLICK',
        description: 'Клавиатура OKCLICK 140M',
        price: 50,
        qty: 8,
      },
      {
        id: 3,
        name: 'Network adapter',
        description: 'Сетевой адаптер WiFi D-Link',
        price: 7,
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
