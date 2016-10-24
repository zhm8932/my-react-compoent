webpackJsonp([5],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, ReactDOM) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var options = [{ 'name': 'apple', 'value': 'a' }, { 'name': 'banana', 'value': 'b', disabled: true }, { 'name': 'cat', 'value': 'c' }, { 'name': 'dot', 'value': 'd' }];

	var checkVal = 'c';

	var RadioGroupDemo = function (_React$Component) {
	    _inherits(RadioGroupDemo, _React$Component);

	    function RadioGroupDemo(props) {
	        _classCallCheck(this, RadioGroupDemo);

	        var _this = _possibleConstructorReturn(this, (RadioGroupDemo.__proto__ || Object.getPrototypeOf(RadioGroupDemo)).call(this, props));

	        console.log("props:", props);
	        _this.state = {
	            displayText: checkVal
	        };
	        return _this;
	    }

	    _createClass(RadioGroupDemo, [{
	        key: 'displayChange',
	        value: function displayChange(value) {
	            console.log("displayChangevalue:", value);
	            this.setState({
	                displayText: value
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'ul',
	                null,
	                React.createElement('h3', null),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'h4',
	                        null,
	                        'Defult radio group'
	                    ),
	                    React.createElement(_index.RadioGroup, { options: options })
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'h4',
	                        null,
	                        'Radio group with default checked'
	                    ),
	                    React.createElement(_index.RadioGroup, { options: options, defaultChecked: true })
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'h4',
	                        null,
	                        'Radio group selected change'
	                    ),
	                    React.createElement(
	                        'p',
	                        null,
	                        '你选中的值是：',
	                        this.state.displayText
	                    ),
	                    React.createElement(_index.RadioGroup, { options: options, value: checkVal, onChange: this.displayChange.bind(this) })
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'h4',
	                        null,
	                        'Radio group with children'
	                    ),
	                    React.createElement(
	                        _index.RadioGroup,
	                        { value: checkVal },
	                        React.createElement(
	                            _index.Radio,
	                            { value: 'a' },
	                            'apple'
	                        ),
	                        React.createElement(
	                            _index.Radio,
	                            { value: 'b', checked: true },
	                            'banana'
	                        ),
	                        React.createElement(
	                            _index.Radio,
	                            { value: 'c', checked: true },
	                            'cat'
	                        ),
	                        React.createElement(
	                            _index.Radio,
	                            { value: 'd', disabled: true },
	                            'dot'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return RadioGroupDemo;
	}(React.Component);

	exports.default = RadioGroupDemo;


	ReactDOM.render(React.createElement(RadioGroupDemo, null), document.querySelector('.app'));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ }
]);