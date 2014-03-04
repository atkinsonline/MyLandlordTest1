/// <reference path="PresenterStore.js" />
Ext.define('MyLandlord.store.PresenterStore', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'MyLandlord.model.PresenterModel'
    ],

    config: {
        autoLoad: true,
        model: 'MyLandlord.model.PresenterModel',
        storeId: 'PresenterStore'
    }
});