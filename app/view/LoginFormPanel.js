Ext.define('MyLandlord.view.LoginFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginformpanel',

    config: {
        items: [
            {
                xtype: 'textfield',
                label: 'Username',
                name: 'username'
            },
            {
                xtype: 'passwordfield',
                label: 'Password',
                name: 'password'
            },
            {
                xtype: 'button',
                itemId: 'loginButton',
                width: 100,
                text: 'Login'
            }
        ],
        listeners: [
            {
                fn: 'onMybuttonTap',
                event: 'tap',
                delegate: '#loginButton'
            }
        ]
    },

    onMybuttonTap: function(button, e, eOpts) {
        //button.up().up().animateActiveItem(1, { type: 'flip' });

        var mainTabPanel = Ext.ComponentQuery.query("toppanel")[0];
        mainTabPanel.animateActiveItem(1, { type: 'flip' });

    }

});