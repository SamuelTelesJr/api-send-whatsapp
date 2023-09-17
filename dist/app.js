"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
// src/sender.ts
var import_venom_bot = require("venom-bot");
var import_libphonenumber_js = require("libphonenumber-js");
var Sender = /*#__PURE__*/ function() {
    function Sender() {
        _class_call_check(this, Sender);
        this.initialize();
    }
    _create_class(Sender, [
        {
            key: "isConnected",
            get: function get() {
                return this.connected;
            }
        },
        {
            key: "qrCode",
            get: function get() {
                return this.qr;
            }
        },
        {
            key: "sendText",
            value: function sendText(to, body) {
                var _this = this;
                return _async_to_generator(function() {
                    var phoneNumber;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!(0, import_libphonenumber_js.isValidNumber)(to, "BR")) {
                                    throw new Error("This number is not valid.");
                                }
                                phoneNumber = (0, import_libphonenumber_js.parsePhoneNumber)(to, "BR").format("E.164").replace("+", "");
                                phoneNumber = phoneNumber.includes("@c.us") ? phoneNumber : "".concat(phoneNumber, "@c.us");
                                console.log("Phone number: " + phoneNumber);
                                return [
                                    4,
                                    _this.client.sendText(phoneNumber, body).then(function(result) {
                                        console.log("Result: ", result);
                                    }).catch(function(erro) {
                                        console.error("Error when sending: ", erro);
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "initialize",
            value: function initialize() {
                var _this = this;
                var qr = function(base64Qr) {
                    _this.qr = {
                        base64Qr: base64Qr
                    };
                };
                var status = function(statusSession) {
                    _this.connected = [
                        "isLogged",
                        "qrReadSuccess",
                        "chatsAvailable"
                    ].includes(statusSession);
                };
                var start = function(client) {
                    _this.client = client;
                    client.onStateChange(function(state) {
                        _this.connected = state === import_venom_bot.SocketState.CONNECTED;
                    });
                    console.log(_this.client);
                };
                (0, import_venom_bot.create)("send-message-report", qr, status).then(function(client) {
                    return start(client);
                }).catch(function(error) {
                    return console.error(error);
                });
            }
        }
    ]);
    return Sender;
}();
var sender_default = Sender;
// src/app.ts
var import_express = __toESM(require("express"));
var sender = new sender_default();
var app = (0, import_express.default)();
app.use(import_express.default.json());
app.use(import_express.default.urlencoded({
    extended: false
}));
app.get("/status", function(req, resp) {
    return resp.send({
        qr_code: sender.qrCode,
        connected: sender.isConnected
    });
});
app.post("/send", function() {
    var _ref = _async_to_generator(function(req, resp) {
        var _req_body, number, message, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _req_body = req.body, number = _req_body.number, message = _req_body.message;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        sender.sendText(number, message)
                    ];
                case 2:
                    _state.sent();
                    return [
                        2,
                        resp.status(200).json()
                    ];
                case 3:
                    error = _state.sent();
                    console.log(error);
                    resp.status(500).json({
                        status: "error",
                        message: error
                    });
                    return [
                        3,
                        4
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return function(req, resp) {
        return _ref.apply(this, arguments);
    };
}());
app.listen(5e3, function() {
    console.log("⚡ server started");
});
