var constants_1 = require('../config/constants');
var UserValidators = (function () {
    function UserValidators() {
    }
    UserValidators.prototype.EmailValidator = function (control) {
        if (!control.value) {
            return {
                required: true
            };
        }
        else if (control.value) {
            if (!new RegExp(constants_1.EMAIL_REGEX).test(control.value)) {
                return {
                    invalid: true
                };
            }
        }
        return {};
    };
    UserValidators.prototype.PasswordValidator = function (control) {
        if (control.value && control.value.length < 6) {
            return {
                minimum: true
            };
        }
        else if (!control.value) {
            return {
                required: true
            };
        }
    };
    return UserValidators;
})();
exports.UserValidators = UserValidators;
//# sourceMappingURL=UserValidators.js.map
