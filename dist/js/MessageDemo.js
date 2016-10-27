webpackJsonp([5],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, ReactDOM) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(178);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MessageDemo = function (_React$Component) {
	    _inherits(MessageDemo, _React$Component);

	    function MessageDemo() {
	        _classCallCheck(this, MessageDemo);

	        return _possibleConstructorReturn(this, (MessageDemo.__proto__ || Object.getPrototypeOf(MessageDemo)).apply(this, arguments));
	    }

	    _createClass(MessageDemo, [{
	        key: "handleClose",
	        value: function handleClose(e) {
	            console.log("e:", e.target);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var content = React.createElement(
	                "p",
	                null,
	                "this is my message"
	            );
	            return React.createElement(
	                "div",
	                null,
	                React.createElement(
	                    "ul",
	                    null,
	                    React.createElement(
	                        "li",
	                        null,
	                        React.createElement(
	                            "h4",
	                            null,
	                            "Default message"
	                        ),
	                        React.createElement(
	                            _index.Message,
	                            { content: content },
	                            React.createElement(
	                                "button",
	                                null,
	                                "click"
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        "li",
	                        null,
	                        React.createElement(
	                            "h4",
	                            null,
	                            "delay message"
	                        ),
	                        React.createElement(
	                            _index.Message,
	                            { content: content, delay: "2000", position: "center" },
	                            React.createElement(
	                                "button",
	                                null,
	                                "click"
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        "li",
	                        null,
	                        React.createElement(
	                            "h4",
	                            null,
	                            "delay message"
	                        ),
	                        React.createElement(
	                            _index.Message,
	                            { content: content, onClose: this.handleClose },
	                            React.createElement(
	                                "button",
	                                null,
	                                "click"
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return MessageDemo;
	}(React.Component);

	exports.default = MessageDemo;


	ReactDOM.render(React.createElement(MessageDemo, null), document.querySelector('.app'));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16), __webpack_require__(18)))

/***/ }
]);