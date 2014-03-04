Ext.define('MyLandlord.view.PresenterNavView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.presenternavview',

    requires: [
        'MyLandlord.view.Presenter'
    ],

    config: {
        itemId: 'presenternavviewitemid',
        title: 'John was here',
        autoDestroy: false,
        items: [
            {
                xtype: 'presenterlistJA'
            }
        ],
        navigationBar: {
            items: [
                {
                    xtype: 'label',
                    html: 'Mears: My Landlord - Home Repairs'
                    //style: 'text-align:center;position:relative;margin-left:5px;top:25%'

                },
                {
                    xtype: 'button',
                    id: 'myButtonId',
                    itemId: 'myButtonItemId',
                    text: 'Logout',
                    align: 'right',
                    handler: function() {
                     	var mainPanel = Ext.ComponentQuery.query("toppanel")[0];
                        mainPanel.animateActiveItem(0,{type: 'flip' });
                    }
                }
//                ,
//                {
//                    xtype: 'searchfield',
//                    placeHolder: 'Search',
//                    name: 'searchField',
//                    align: 'left',
//                    width: 180,
//                    itemId: 'presentersearchitemid',
//                    listeners: {
//                        keyup: function (field) {
//
//
//
//                                var searchString = Ext.String.trim(field.getValue()).toLowerCase();
//                                var presenterStore = Ext.data.StoreManager.lookup('PresenterStore');
//                                if (searchString.length == 0) {
//                                    presenterStore.clearFilter();
//
//                                } else {
//
//                                    presenterStore.clearFilter();
//                                    console.log(presenterStore.getCount() + ":" + presenterStore.getAllCount());
//                                    presenterStore.filterBy(function(presenterRec) {
//                                        var title = presenterRec.get("text").toLowerCase();
//                         				return title.indexOf(searchString) >= 0;
//                    				});
//                                }
//
//
//
//                            }
//                    }
//                }
            ],
            docked: 'top'
        }
    }

});