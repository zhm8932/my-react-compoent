webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, ReactDOM) {'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(5);

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var options = [{ name: 'apple', value: 1 }, { name: 'banana', value: 2 }, { name: 'cat', value: 3, disabled: true }, { name: 'dog', value: 4 }, { name: 'egg', value: 5 }];

	var DropDownDemo = function (_React$Component) {
	    _inherits(DropDownDemo, _React$Component);

	    function DropDownDemo(props) {
	        _classCallCheck(this, DropDownDemo);

	        var _this = _possibleConstructorReturn(this, (DropDownDemo.__proto__ || Object.getPrototypeOf(DropDownDemo)).call(this, props));

	        _this.state = {
	            value: null,
	            value1: 5,
	            value2: ''
	        };
	        return _this;
	    }

	    _createClass(DropDownDemo, [{
	        key: 'displayChange',
	        value: function displayChange(stat, value) {
	            console.log("stat:", stat, "--value:", value);
	            this.setState(_defineProperty({}, stat, value));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'ul',
	                { style: { width: '280px' } },
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'h4',
	                        null,
	                        'Default DropDown'
	                    ),
	                    React.createElement(_index.DropDown, { onChange: this.displayChange.bind(this, 'value'), options: options })
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'h4',
	                        null,
	                        'Dropdown with default selected'
	                    ),
	                    React.createElement(_index.DropDown, { onChange: this.displayChange.bind(this, 'value'), options: options, defaultSelected: true })
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'h4',
	                        null,
	                        'Dropdown received value'
	                    ),
	                    React.createElement(_index.DropDown, { onChange: this.displayChange.bind(this, 'value1'), value: this.state.value1, options: options, defaultSelected: true })
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'h4',
	                        null,
	                        'Dropdown with search field'
	                    ),
	                    React.createElement(_index.DropDown, { onChange: this.displayChange.bind(this, 'value2'), options: options, searchable: true })
	                )
	            );
	        }
	    }]);

	    return DropDownDemo;
	}(React.Component);

	ReactDOM.render(React.createElement(DropDownDemo, null), document.querySelector('.app'));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ }
]);