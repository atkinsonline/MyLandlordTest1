Ext.define('MyLandlord.controller.PresenterController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.presentercontroller',

    config: {
        refs: {
            presenterNav: 'presenternavview',
            presenterSearchField: '#presentersearchitemid',
            sessionsByPresenterList: {
                autoCreate: true,
                selector: '#sessionsbypresenterlistitemid',
                xtype: 'sessionsbypresenterlist'
            }
        },

        control: {
            "list#presenterlistitemid": {
                select: 'onPresenterlistitemidSelect'
            },
            "navigationview#presenternavviewitemid": {
                back: 'onNavigationviewBack'
            }
        }
    },

    onPresenterlistitemidSelect: function(dataview, record, eOpts) {
        this.session = this.getSessionsByPresenterList();

        // creates a local store just for a couple records. this will go away
        var sessionLocalStore = Ext.create("Ext.data.Store",{
            data: record.get("sessions")
        });

        // assign the new store to the local session detail list
        this.session.setStore(sessionLocalStore);

        // Set the title of the presenters page the presenter name
        this.session.config.title = "Presenter: " // + record.get("firstName") + " " + record.get("lastName");


        // don't show the search bar while looking at presenters sessions
        this.getPresenterSearchField().hide();

        // bring the session list in with nav
        // (if 2 column display, this is where we would just show 2nd view)
        this.getPresenterNav().push(this.session);
    },

    onNavigationviewBack: function(navigationview, eOpts) {
        // show the search bar while looking at presenters
        this.getPresenterSearchField().show();
    }

});