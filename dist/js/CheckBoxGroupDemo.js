webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, ReactDOM) {'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(163);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import React from 'react';


	var options = [{ 'name': 'apple', 'value': 'a' }, { 'name': 'banana', 'value': 'b', "disabled": true }, { 'name': 'cat', 'value': 'c' }, { 'name': 'dog', 'value': 'd' }];

	var checkedVal = ['a', 'd'];
	var checkedVal1 = ['banana'];
	var checkedVal2 = ['c'];

	var CheckBoxGroupDemo = function (_React$Component) {
	    _inherits(CheckBoxGroupDemo, _React$Component);

	    function CheckBoxGroupDemo(props, refs) {
	        _classCallCheck(this, CheckBoxGroupDemo);

	        var _this = _possibleConstructorReturn(this, (CheckBoxGroupDemo.__proto__ || Object.getPrototypeOf(CheckBoxGroupDemo)).call(this, props));

	        _this.state = {
	            displayText: checkedVal.join(','),
	            displayText1: checkedVal1.join(',')
	        };
	        return _this;
	    }

	    _createClass(CheckBoxGroupDemo, [{
	        key: 'handleChange',
	        value: function handleChange(str, value) {
	            console.log('22222222222222');
	            console.log("value:", value, 'str:', str, 'ss:');
	            this.setState(_defineProperty({}, str, value.join(',')), function () {
	                console.log(str, '-------------', this.state[str]);
	                // alert(this.state[str])
	            });
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
	                        'Checkbox group'
	                    ),
	                    React.createElement(
	                        'p',
	                        null,
	                        '1选中的值为：',
	                        this.state.displayText
	                    ),
	                    React.createElement(_index.CheckBoxGroup, { options: options, labelName: 'name', valueName: 'value', value: checkedVal, onChange: this.handleChange.bind(this, 'displayText') })
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    React.createElement(
	                        'h4',
	                        null,
	                        'Checkbox group'
	                    ),
	                    React.createElement(
	                        'p',
	                        null,
	                        '2选中的值为：',
	                        this.state.displayText1
	                    ),
	                    React.createElement(
	                        _index.CheckBoxGroup,
	                        { value: checkedVal1, onChange: this.handleChange.bind(this, 'displayText1') },
	                        React.createElement(
	                            _index.CheckBox,
	                            { value: 'apple' },
	                            'apple'
	                        ),
	                        React.createElement(
	                            _index.CheckBox,
	                            { value: 'banana' },
	                            'banana'
	                        ),
	                        React.createElement(
	                            _index.CheckBox,
	                            { value: 'orange', disabled: true },
	                            'orange'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return CheckBoxGroupDemo;
	}(React.Component);

	ReactDOM.render(React.createElement(CheckBoxGroupDemo, null), document.querySelector('.app'));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(3)))

/***/ }
]);