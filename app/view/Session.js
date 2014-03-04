Ext.define('MyLandlord.view.Session', {
    extend: 'Ext.dataview.List',
    alias: 'widget.sessionlist',

    config: {
        store: 'SessionStore',
        grouped: true,
        variableHeights: true,
        infinite: true,
        itemTpl: [
            '<div>{title}</div>'
        ]
    },

    initialize: function() {
        this.config.title = MyLandlord.app.title;

        this.callParent();
    }

});