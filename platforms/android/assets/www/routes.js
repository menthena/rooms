System.register(['./components/reservation/reservation', './components/design/design', './components/reservations/reservations', './components/user/login', './components/marketing/index', './components/user/recover-password', './components/user/reset-password', './components/user/change-password', './components/user/register', './components/user/register-success', './components/accounts/accounts'], function(exports_1) {
    var reservation_1, design_1, reservations_1, login_1, index_1, recover_password_1, reset_password_1, change_password_1, register_1, register_success_1, accounts_1;
    var APP_ROUTES;
    return {
        setters:[
            function (reservation_1_1) {
                reservation_1 = reservation_1_1;
            },
            function (design_1_1) {
                design_1 = design_1_1;
            },
            function (reservations_1_1) {
                reservations_1 = reservations_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (recover_password_1_1) {
                recover_password_1 = recover_password_1_1;
            },
            function (reset_password_1_1) {
                reset_password_1 = reset_password_1_1;
            },
            function (change_password_1_1) {
                change_password_1 = change_password_1_1;
            },
            function (register_1_1) {
                register_1 = register_1_1;
            },
            function (register_success_1_1) {
                register_success_1 = register_success_1_1;
            },
            function (accounts_1_1) {
                accounts_1 = accounts_1_1;
            }],
        execute: function() {
            exports_1("APP_ROUTES", APP_ROUTES = [
                { path: '/', redirectTo: ['/MarketingIndex'] },
                { path: '/index', component: index_1.MarketingIndex, as: 'MarketingIndex' },
                { path: '/reserve', component: reservation_1.Reserve, as: 'Reserve' },
                { path: '/design', component: design_1.Design, as: 'Design' },
                { path: '/register', component: register_1.Register, as: 'Register' },
                { path: '/recover-password', component: recover_password_1.RecoverPassword, as: 'RecoverPassword' },
                { path: '/reset-password/:id', component: reset_password_1.ResetPassword, as: 'ResetPassword' },
                { path: '/change-password', component: change_password_1.ChangePassword, as: 'ChangePassword' },
                { path: '/login', component: login_1.Login, as: 'Login' },
                { path: '/reservations', component: reservations_1.Reservations, as: 'Reservations' },
                { path: '/register-success', component: register_success_1.RegisterSuccess, as: 'RegisterSuccess' },
                { path: '/accounts', component: accounts_1.Accounts, as: 'Accounts' }
            ]);
        }
    }
});

//# sourceMappingURL=routes.js.map
