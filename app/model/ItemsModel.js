Ext.define('MyApp.model.Items', {
  extend: 'Ext.data.Model',

  fields: [
    { name: 'id', type: 'int' },
    { name: 'name', type: 'string', handler: 'onItemSelected' },
    { name: 'description', type: 'string' },
    { name: 'price', type: 'float' },
    { name: 'qty', type: 'int' },
  ],
});
