Ext.define('MyLandlord.store.SessionStore', {
    extend: 'Ext.data.Store',

    requires: [
        'MyLandlord.model.SessionModel'
    ],

    config: {
        autoLoad: true,
        groupField: 'startTime',
        model: 'MyLandlord.model.SessionModel',
        storeId: 'SessionStore',
        grouper: {
            property: 'startTime',
            sortProperty: 'startTimeOrder'
        }
    }
});