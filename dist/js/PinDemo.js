webpackJsonp([9],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, ReactDOM) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(178);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PinDemo = function (_React$Component) {
	    _inherits(PinDemo, _React$Component);

	    function PinDemo(props) {
	        _classCallCheck(this, PinDemo);

	        return _possibleConstructorReturn(this, (PinDemo.__proto__ || Object.getPrototypeOf(PinDemo)).call(this, props));
	    }

	    _createClass(PinDemo, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'pin-demo' },
	                React.createElement(
	                    'h3',
	                    null,
	                    'Pin'
	                ),
	                React.createElement(
	                    'ul',
	                    null,
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'h4',
	                            null,
	                            'Default'
	                        ),
	                        React.createElement(
	                            _index.Pin,
	                            null,
	                            React.createElement(
	                                'div',
	                                { className: 'card' },
	                                React.createElement(
	                                    'h4',
	                                    null,
	                                    'title'
	                                ),
	                                React.createElement(
	                                    'p',
	                                    null,
	                                    'pin at top'
	                                )
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'h4',
	                            null,
	                            'Default'
	                        ),
	                        React.createElement(
	                            _index.Pin,
	                            { top: 100 },
	                            React.createElement(
	                                'div',
	                                { className: 'card' },
	                                React.createElement(
	                                    'h4',
	                                    null,
	                                    'title'
	                                ),
	                                React.createElement(
	                                    'p',
	                                    null,
	                                    'pin at top'
	                                )
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'h4',
	                            null,
	                            'Scroll to given top'
	                        ),
	                        React.createElement(
	                            _index.Pin,
	                            { begin: 800 },
	                            React.createElement(
	                                'div',
	                                { className: 'card last' },
	                                React.createElement(
	                                    'h4',
	                                    null,
	                                    'title'
	                                ),
	                                React.createElement(
	                                    'p',
	                                    null,
	                                    'pin when scroll to 800px'
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return PinDemo;
	}(React.Component);

	exports.default = PinDemo;


	ReactDOM.render(React.createElement(PinDemo, null), document.querySelector('.app'));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16), __webpack_require__(18)))

/***/ }
]);