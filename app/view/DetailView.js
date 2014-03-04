Ext.define('MyLandlord.view.DetailView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.detailview',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Spinner',
        'Ext.field.Password',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Hidden',
        'Ext.field.Radio',
        'Ext.device.Camera',
        'Ext.MessageBox'
    ],
    id: 'basicform',
    config: {
        scrollable: false,
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'fieldset',
                id: 'fieldset1',
                style: {
                    'border': '1px solid darkgrey',
                    'background': 'lightgrey'
                },
                scrollable: true,
                title: 'Enter details of the repair.  Items marked * are mandatory',
                itemTpl: [
                    //'<div class="headertext">{title}</div>'
                    '<div Hello {title} Goodbye</div>'
                ],
                defaults: {
                    labelWidth: '25%'
                },
                items: [
                    {
                        xtype: 'container',
                        defaults: {
                            xtype: 'button',
                            width: '20%',
                            style: 'margin: .5em'
                        },
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                text: 'Take Photo',
                                itemId: 'takePhotoButton',
                                scope: this,
                                hasDisabled: false,

                                handler: function(button, event) {
                                    Ext.device.Camera.capture({
//                                        source: 'camera',
                                        source: 'library',
                                        quality: 75,
                                        width: 200,
                                        height: 200,
                                        destination: 'data',

                                        success: function(imagedata) {

                                            console.log("OnTakePhotoButtonTap");
                                            var img = Ext.getCmp('theimage');
                                            if (img != null)
                                            {
                                                img.setSrc('data:image/jpeg;base64,' +imagedata);
                                            }
                                            else
                                            {
                                                console.log("No image captured");
                                                Ext.Msg.alert('Error1', 'No image captured');
                                            }
                                        },

                                        failure: function() {
                                            Ext.Msg.alert('Error2', 'There was an error when acquiring the picture.');
                                        },
                                        scope: this
                                    })}

//                                handler: function(btn){
//                                    var fieldset1 = Ext.getCmp('fieldset1'),
//                                        fieldset2 = Ext.getCmp('fieldset2');
//
//                                    if (btn.hasDisabled) {
//                                        fieldset1.enable();
//                                        fieldset2.enable();
//                                        btn.hasDisabled = false;
//                                        btn.setText('Disable fields');
//                                    } else {
//                                        fieldset1.disable();
//                                        fieldset2.disable();
//                                        btn.hasDisabled = true;
//                                        btn.setText('Enable fields');
//                                    }
//                                }
                            },
                            {
                                text: 'Load Photo',
                                itemId: 'loadPhotoButton',
                                scope: this,
                                hasDisabled: false
                                }
                        ]
                    },
                    {
                        xtype: 'textareafield',
                        name: 'reportDetails',
                        label: 'Details',
                        labelAlign: 'top',
                        autoCorrect: true,
                        required: true,
//                        style: {
//                            'border-left': '1px solid red'
//                        },
                        placeHolder: 'Enter details of the problem'
                    },
                    {
                        xtype: 'textfield',
                        name: 'firstName',
                        label: 'First Name',
                        labelAlign: 'top',
//                        style: {
//                            'border-left': '1px solid green'
//                        },
                        required: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'lastName',
                        label: 'Last Name',
                        labelAlign: 'top',
//                        style: {
//                            'border': '1px solid blue'
//                        },
                        required: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'addressLine1',
                        label: 'Address Line 1',
                        required: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'addressLine2',
                        label: 'Address Line 2'
                    },
                    {
                        xtype: 'textfield',
                        name: 'addressLine3',
                        label: 'Address Line 2'
                    },
                    {
                        xtype: 'textfield',
                        name: 'postcode',
                        label: 'Postcode',
                        autoCapitalize: true,
                        required: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'phoneNo',
                        label: 'Phone No'
                    },
                    {
                        xtype: 'textfield',
                        name: 'mobileNo',
                        label: 'Mobile No'
                    },
                    {
                        xtype: 'emailfield',
                        name: 'email',
                        label: 'Email'
                    },
                    {
                        xtype: 'container',
                        items: [
                        {
                            xtype: 'label',
                            width: '100%',
//                            marginTop: '25px',
//                            paddingTop: '5px',
                            name: 'availability',
                            style: 'text-align:left;position:relative;margin-left:5px;margin-top:20px',
                            html: 'Your Availability:'
                        },
// --- Monday availability --
                        {
                            xtype: 'container',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    height: 50,
                                    margin: -1,
//                                    padding: 0,
                                    layout: {
                                        type: 'hbox'
    //                                    align: 'stretch'
                                    },
                                    defaults: {
                                        xtype: 'radiofield'
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            labelWidth: 120,
                                            width: 120,
                                            name: 'monday',
                                            label: 'Monday'
                                        },
                                        {
                                            xtype: 'radiofield',
                                            labelWidth: 100,
                                            labelAlign: 'right',
                                            width: 200,
                                            name: 'monday',
                                            label: 'All Day',
                                            checked: true
                                        },
                                        {
                                            xtype: 'radiofield',
                                            labelWidth: 100,
                                            labelAlign: 'right',
                                            width: 200,
                                            name: 'monday',
                                            label: 'AM'
                                        },
                                        {
                                            xtype: 'radiofield',
                                            labelWidth: 100,
                                            labelAlign: 'right',
                                            width: 200,
                                            name: 'monday',
                                            label: 'PM'
                                        }
                                    ]
                                }
                            ]
                        },
// --- Tuesday availability --
                        {
                                xtype: 'container',
                                items: [
                                    {
                                        xtype: 'fieldset',
                                        height: 50,
                                        margin: -1,
//                                        padding: 0,
                                        layout: {
                                            type: 'hbox'
                                            //                                    align: 'stretch'
                                        },
                                        defaults: {
                                            xtype: 'radiofield'
                                        },
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                labelWidth: 120,
                                                width: 120,
                                                name: 'tuesday',
                                                label: 'Tuesday'
                                            },
                                            {
                                                xtype: 'radiofield',
                                                labelWidth: 100,
                                                labelAlign: 'right',
                                                width: 200,
                                                name: 'tuesday',
                                                label: 'All Day',
                                                checked: true
                                            },
                                            {
                                                xtype: 'radiofield',
                                                labelWidth: 100,
                                                labelAlign: 'right',
                                                width: 200,
                                                name: 'tuesday',
                                                label: 'AM'
                                            },
                                            {
                                                xtype: 'radiofield',
                                                labelWidth: 100,
                                                labelAlign: 'right',
                                                width: 200,
                                                name: 'tuesday',
                                                label: 'PM'
                                            }
                                        ]
                                    }
                                ]
                            },
// --- Wednesday availability --
                        {
                                xtype: 'container',
                                items: [
                                    {
                                        xtype: 'fieldset',
                                        height: 50,
                                        margin: -1,
//                                        padding: 0,
                                        layout: {
                                            type: 'hbox'
                                            //                                    align: 'stretch'
                                        },
                                        defaults: {
                                            xtype: 'radiofield'
                                        },
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                labelWidth: 120,
                                                width: 120,
                                                name: 'wednesday',
                                                label: 'Wednesday'
                                            },
                                            {
                                                xtype: 'radiofield',
                                                labelWidth: 100,
                                                labelAlign: 'right',
                                                width: 200,
                                                name: 'wednesday',
                                                label: 'All Day',
                                                checked: true
                                            },
                                            {
                                                xtype: 'radiofield',
                                                labelWidth: 100,
                                                labelAlign: 'right',
                                                width: 200,
                                                name: 'wednesday',
                                                label: 'AM'
                                            },
                                            {
                                                xtype: 'radiofield',
                                                labelWidth: 100,
                                                labelAlign: 'right',
                                                width: 200,
                                                name: 'wednesday',
                                                label: 'PM'
                                            }
                                        ]
                                    }
                                ]
                            },
// --- Thursday availability --
                        {
                                xtype: 'container',
                                items: [
                                    {
                                        xtype: 'fieldset',
                                        height: 50,
                                        margin: -1,
//                                        padding: 0,
                                        layout: {
                                            type: 'hbox'
                                            //                                    align: 'stretch'
                                        },
                                        defaults: {
                                            xtype: 'radiofield'
                                        },
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                labelWidth: 120,
                                                width: 120,
                                                name: 'thursday',
                                                label: 'Thursday'
                                            },
                                            {
                                                xtype: 'radiofield',
                                                labelWidth: 100,
                                                labelAlign: 'right',
                                                width: 200,
                                                name: 'thursday',
                                                label: 'All Day',
                                                checked: true
                                            },
                                            {
                                                xtype: 'radiofield',
                                                labelWidth: 100,
                                                labelAlign: 'right',
                                                width: 200,
                                                name: 'thursday',
                                                label: 'AM'
                                            },
                                            {
                                                xtype: 'radiofield',
                                                labelWidth: 100,
                                                labelAlign: 'right',
                                                width: 200,
                                                name: 'thursday',
                                                label: 'PM'
                                            }
                                        ]
                                    }
                                ]
                            },
// --- Friday availability --
                        {
                            xtype: 'container',
                            height: 50,
//                            margin: -1,
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    html: 'Friday:',
                                    style: 'text-align:left;position:relative;margin-left:5px;top:25%;width:5%'
                                },
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox'
                                    },
                                    items: [
                                        {
                                            xtype: 'radiofield',
                                            labelWidth: 100,
                                            labelAlign: 'right',
                                            width: 200,
                                            name: 'thursday',
                                            label: 'All Day',
                                            checked: true
                                        },
                                        {
                                            xtype: 'radiofield',
                                            labelWidth: 100,
                                            labelAlign: 'right',
                                            width: 200,
                                            name: 'thursday',
                                            label: 'AM'
                                        },
                                        {
                                            xtype: 'radiofield',
                                            labelWidth: 100,
                                            labelAlign: 'right',
                                            width: 200,
                                            name: 'thursday',
                                            label: 'PM'
                                        }
                                    ]
                                }
                            ]
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        style: 'margin: .5em',
                        name: 'submitButton',
                        text: 'Tap here to send details of the repair to Mears'
                    }
                ]
            }
//        ],
//        listeners: [
//            {
//                fn: 'OnTakePhotoButtonTap',
//                event: 'tap',
//                delegate: '#takePhotoButton'
//            },
//            {
//                fn: 'OnLoadPhotoButtonTap',
//                event: 'tap',
//                delegate: '#loadPhotoButton'
//            }
//
        ]
//    },
//
//    OnTakePhotoButtonTap: function (button, e, eOpts) {
//        //button.up().up().animateActiveItem(1, { type: 'flip' });
//
//        //var mainTabPanel = Ext.ComponentQuery.query("toppanel")[0];
//        //mainTabPanel.animateActiveItem(1, { type: 'flip' });
//
//        console.log("OnTakePhotoButtonTap");
//
//
//    },
//
//    OnLoadPhotoButtonTap: function (button, e, eOpts) {
//        //button.up().up().animateActiveItem(1, { type: 'flip' });
//
//        //var mainTabPanel = Ext.ComponentQuery.query("toppanel")[0];
//        //mainTabPanel.animateActiveItem(1, { type: 'flip' });
//
//        console.log("OnLoadPhotoButtonTap");


    }

});

//var node = nestedList.getActiveItem().getStore().getNode();

//detailview.setValues({
//
//
//    firstName: 'John',
//    lastName: 'Atkins'
//});