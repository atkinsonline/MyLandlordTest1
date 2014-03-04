/// <reference path="Presenter.js" />
Ext.define('MyLandlord.view.Presenter', {
    extend: 'Ext.dataview.NestedList',
    alias: 'widget.presenterlistJA',

    config: {
        useTitleAsBackText: false,
        backText: 'Go Back',
        itemId: 'presenterlistitemid',
        store: 'PresenterStore',
        variableHeights: true,
        infinite: true,
        itemTpl: [
            //'<h3>{text}</h3>'
            '<h3>Hello</h3>',
            '<div class="headertext">{title}</div>'
        ],
        detailCard: {
            xtype: 'detailview'
        }
    },

    initialize: function() {
        this.config.title = MyLandlord.app.title;
        //this.config.title = 'My Landlord';
        this.callParent();

    }

    

});