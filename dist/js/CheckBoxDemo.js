webpackJsonp([1],[
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

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import React from 'react';


	var CheckBoxDemo = function (_React$Component) {
	    _inherits(CheckBoxDemo, _React$Component);

	    function CheckBoxDemo() {
	        _classCallCheck(this, CheckBoxDemo);

	        return _possibleConstructorReturn(this, (CheckBoxDemo.__proto__ || Object.getPrototypeOf(CheckBoxDemo)).apply(this, arguments));
	    }

	    _createClass(CheckBoxDemo, [{
	        key: 'handleChange',
	        value: function handleChange(e) {
	            console.log('changed-checked:', e.target.checked);
	            // console.log('changed-type:',e.target.type)
	            // console.log('changed-disabled:',e.target.disabled)
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'ul',
	                null,
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'h4',
	                        null,
	                        'Default checkbox'
	                    ),
	                    React.createElement(
	                        _index.CheckBox,
	                        { onChange: this.handleChange.bind(this), className: 'check' },
	                        'Default checkbox'
	                    )
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'h4',
	                        null,
	                        'disabled checkbox'
	                    ),
	                    React.createElement(
	                        _index.CheckBox,
	                        { disabled: true },
	                        'Default checkbox'
	                    )
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'h4',
	                        null,
	                        'checked checkbox'
	                    ),
	                    React.createElement(
	                        _index.CheckBox,
	                        { checked: true },
	                        'Default checkbox'
	                    )
	                )
	            );
	        }
	    }]);

	    return CheckBoxDemo;
	}(React.Component);

	exports.default = CheckBoxDemo;


	ReactDOM.render(React.createElement(CheckBoxDemo, null), document.querySelector('.app'));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16), __webpack_require__(18)))

/***/ }
]);