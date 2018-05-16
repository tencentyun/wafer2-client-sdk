var constants = require('./lib/constants');
var login = require('./lib/login');
var Session = require('./lib/session');
var request = require('./lib/request');
var Tunnel = require('./lib/tunnel');

var authHeader = function() {
  return request.buildAuthHeader(Session.get());
}

var exports = module.exports = {
    login: login.login,
    setLoginUrl: login.setLoginUrl,
    LoginError: login.LoginError,
    requestLogin: login.requestLogin,
    clearSession: Session.clear,
    Session: Session,
    request: request.request,
    RequestError: request.RequestError,
    authHeader: authHeader,

    Tunnel: Tunnel,
};

// 导出错误类型码
Object.keys(constants).forEach(function (key) {
    if (key.indexOf('ERR_') === 0) {
        exports[key] = constants[key];
    }
});
