Ext.define('MyLandlord.view.SessionNavView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.sessionnavview',

    requires: [
        'MyLandlord.view.Session'
    ],

    config: {
        itemId: 'sessionnavviewitemid',
        autoDestroy: false,
        'Navigation Bar': false,
        items: [
            {
                xtype: 'sessionlist'
            }
        ]
    }

});