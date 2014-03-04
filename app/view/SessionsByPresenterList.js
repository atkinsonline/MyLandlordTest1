Ext.define('MyLandlord.view.SessionsByPresenterList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.sessionsbypresenterlist',

    config: {
        itemId: 'sessionsbypresenterlistitemid',
        infinite: true,
        variableHeights: true,
        itemTpl: [
            '<div>{title}<br/>Room Assigned: {room}<br/>Start Time: {startTime}</div>'
        ]
    }

});