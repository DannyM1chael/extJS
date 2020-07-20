Ext.define('MyApp.view.main.List', {
  extend: 'Ext.grid.Panel',
  xtype: 'mainlist',

  requires: ['MyApp.store.Items'],

  title: 'Список товаров',

  store: {
    type: 'items',
  },

  columns: [
    { text: 'ID', dataIndex: 'id', flex: 1 },
    { text: 'Имя', dataIndex: 'name', flex: 1 },
    { text: 'Описание', dataIndex: 'description', flex: 1 },
    { text: 'Цена', dataIndex: 'price', flex: 1 },
    { text: 'Кол-во', dataIndex: 'qty', flex: 1 },
  ],
});
