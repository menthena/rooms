var reservation_1 = require('../components/reservation/reservation');
var design_1 = require('../components/design/design');
var reservations_1 = require('../components/reservations/reservations');
var login_1 = require('../components/user/login');
var index_1 = require('../components/marketing/index');
var recover_password_1 = require('../components/user/recover-password');
var reset_password_1 = require('../components/user/reset-password');
var change_password_1 = require('../components/user/change-password');
var register_1 = require('../components/user/register');
var register_success_1 = require('../components/user/register-success');
var accounts_1 = require('../components/accounts/accounts');
exports.APP_ROUTES = [
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
];
//# sourceMappingURL=routes.js.map
