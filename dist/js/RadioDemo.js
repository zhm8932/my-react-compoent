webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, ReactDOM) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(5);

	var _com = __webpack_require__(21);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	console.log("name:", _com.name);

	var RadioDemo = function (_React$Component) {
	    _inherits(RadioDemo, _React$Component);

	    function RadioDemo() {
	        _classCallCheck(this, RadioDemo);

	        return _possibleConstructorReturn(this, (RadioDemo.__proto__ || Object.getPrototypeOf(RadioDemo)).apply(this, arguments));
	    }

	    _createClass(RadioDemo, [{
	        key: "handleChange",
	        value: function handleChange(e, value) {
	            console.log('value:', value, 'checked:', e.target.checked);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "ul",
	                null,
	                React.createElement(
	                    "li",
	                    null,
	                    React.createElement(
	                        "h4",
	                        null,
	                        "Default Radio"
	                    ),
	                    React.createElement(
	                        _index.Radio,
	                        { onChange: this.handleChange.bind(this), value: "1" },
	                        "radio"
	                    )
	                ),
	                React.createElement(
	                    "li",
	                    null,
	                    React.createElement(
	                        "h4",
	                        null,
	                        "Checked Radio"
	                    ),
	                    React.createElement(
	                        _index.Radio,
	                        { checked: true, value: "2" },
	                        "radio"
	                    )
	                ),
	                React.createElement(
	                    "li",
	                    null,
	                    React.createElement(
	                        "h4",
	                        null,
	                        "Checked Radio"
	                    ),
	                    React.createElement(
	                        _index.Radio,
	                        { disabled: true, value: "3" },
	                        "radio"
	                    )
	                )
	            );
	        }
	    }]);

	    return RadioDemo;
	}(React.Component);

	exports.default = RadioDemo;


	ReactDOM.render(React.createElement(RadioDemo, null), document.querySelector('.app'));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },

/***/ 21:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var name = exports.name = 'React Component';

/***/ }

});