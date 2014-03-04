Ext.define('MyLandlord.model.PresenterModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'text',
                type: 'string'
            }
        ],
        proxy: {
            type: 'ajax',
            url: 'Data/propertyItems.json',
            reader: {
                type: 'json',
                rootProperty: 'items'
}
        }
    }
});