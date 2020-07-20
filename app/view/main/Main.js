Ext.define('MyApp.view.main.Main', {
  extend: 'Ext.tab.Panel',
  xtype: 'app-main',

  requires: [
    'Ext.plugin.Viewport',
    'Ext.window.MessageBox',

    'MyApp.view.main.MainController',
    'MyApp.view.main.MainModel',
    'MyApp.view.main.List',
  ],

  controller: 'main',
  viewModel: 'main',
  plugins: 'viewport',

  ui: 'navigation',

  header: {
    layout: {
      align: 'stretchmax',
    },
    title: {
      bind: {
        text: 'Учет товаров',
      },
      flex: 0,
    },
    items: [
      {
        xtype: 'button',
        text: 'Товары',
        margin: '10',
        handler: 'onMouseDown',
      },
      {
        xtype: 'button',
        text: 'Выход',
        margin: '10',
        handler: 'onClickButton',
      },
    ],
  },

  tabBar: {
    flex: 1,
    layout: {
      align: 'stretch',
      overflowHandler: 'none',
    },
  },

  defaults: {
    bodyPadding: 20,
    tabConfig: {
      responsiveConfig: {
        wide: {
          iconAlign: 'left',
          textAlign: 'left',
        },
        tall: {
          iconAlign: 'top',
          textAlign: 'center',
          width: 120,
        },
      },
    },
  },

  items: [
    {
      title: 'Товары',
      items: [
        {
          xtype: 'mainlist',
        },
      ],
    },
  ],
});
