System.register([], function(exports_1) {
    var DATE_FORMAT, DATE_ONLY_FORMAT, EMAIL_REGEX, CLIENT_ID, SCOPES, INTERVAL_DATA, DURATION_DATA, FEATURES_DATA, SOCKET_URL;
    return {
        setters:[],
        execute: function() {
            exports_1("DATE_FORMAT", DATE_FORMAT = 'DD/MM/YYYY h:mma');
            exports_1("DATE_ONLY_FORMAT", DATE_ONLY_FORMAT = 'DD/MM/YYYY');
            exports_1("EMAIL_REGEX", EMAIL_REGEX = '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$');
            exports_1("CLIENT_ID", CLIENT_ID = '1047154648442-9drs94v5uj6ces90795h6mcn438au1qr.apps.googleusercontent.com');
            exports_1("SCOPES", SCOPES = ['https://www.googleapis.com/auth/calendar']);
            exports_1("INTERVAL_DATA", INTERVAL_DATA = [{
                    value: 'day',
                    text: 'Daily'
                },
                {
                    value: 'week1',
                    text: 'Weekly'
                },
                {
                    value: 'week2',
                    text: '2 week'
                },
                {
                    value: 'week3',
                    text: '3 week'
                },
                {
                    value: 'month',
                    text: 'Monthly'
                }]);
            exports_1("DURATION_DATA", DURATION_DATA = [{
                    value: 15,
                    text: '15 minutes'
                },
                {
                    value: 30,
                    text: '30 minutes'
                },
                {
                    value: 45,
                    text: '45 minutes'
                },
                {
                    value: 60,
                    text: '1 hour'
                },
                {
                    value: 90,
                    text: '1.5 hours'
                },
                {
                    value: 120,
                    text: '2 hours'
                },
                {
                    value: 150,
                    text: '2.5 hours'
                },
                {
                    value: 180,
                    text: '3 hours'
                }]);
            exports_1("FEATURES_DATA", FEATURES_DATA = [
                {
                    value: 'tv',
                    text: 'TV'
                },
                {
                    value: 'phone',
                    text: 'Phone'
                }
            ]);
            exports_1("SOCKET_URL", SOCKET_URL = 'http://localhost:5555');
        }
    }
});

//# sourceMappingURL=constants.js.map
