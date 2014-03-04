Ext.define('MyLandlord.model.SessionModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'id'
            },
            {
                name: 'title'
            },
            {
                name: 'description'
            },
            {
                name: 'room'
            },
            {
                convert: function(v, rec) {

                    var startTime = Ext.String.trim(rec.get("startTime"));
                    if (startTime === "9:45 AM Saturday") {
                        return 0;
                    } else if (startTime === "11:15 AM Saturday") {
                        return 1;
                    } else if (startTime === "1:45 PM Saturday") {
                        return 2;
                    } else if (startTime === "3:30 PM Saturday") {
                        return 3;
                    } else if (startTime === "5:00 PM Saturday") {
                        return 4;
                    } else if (startTime === "9:15 AM Sunday") {
                        //debugger;
                        return 5;
                    } else if (startTime === "10:45 AM Sunday") {
                        return 6;
                    } else if (startTime === "1:15 PM Sunday") {
                        return 7;
                    } else if (startTime === "2:45 PM Sunday") {
                        return 8;
                    } else {
                        //debugger;
                        return -1;
                    }
                },
                dateFormat: 'c',
                name: 'startTimeOrder',
                type: 'date'
            },
            {
                name: 'startTime'
            }
        ],
        proxy: {
            type: 'ajax',
            url: 'Data/sessions2012.json',
            reader: {
                type: 'json',
                idProperty: 'id',
                rootProperty: 'data'
            }
        }
    }
});