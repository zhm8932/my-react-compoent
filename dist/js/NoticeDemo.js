webpackJsonp([7],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, ReactDOM) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(163);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NoticeDemo = function (_React$Component) {
	    _inherits(NoticeDemo, _React$Component);

	    function NoticeDemo() {
	        _classCallCheck(this, NoticeDemo);

	        return _possibleConstructorReturn(this, (NoticeDemo.__proto__ || Object.getPrototypeOf(NoticeDemo)).apply(this, arguments));
	    }

	    _createClass(NoticeDemo, [{
	        key: 'showNotice',
	        value: function showNotice() {
	            var type = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

	            console.log("type:", type);
	            var notice = {
	                title: 'Notice：' + type,
	                link: 'http://www.baidu.com/',
	                content: React.createElement(
	                    'div',
	                    null,
	                    React.createElement(
	                        'b',
	                        null,
	                        'Lorem Ipsum'
	                    ),
	                    ' is simply dummy text of the printing and typesetting industry.'
	                )
	            };
	            if (type === 'delay') {}
	            if (type === 'onClick') {}
	            if (type === 'manully') {}
	            var node = this.refs.ncNode;
	            console.log("node:", node);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'ul',
	                    null,
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'h4',
	                            null,
	                            'SHOW notice'
	                        ),
	                        React.createElement(
	                            'button',
	                            { onClick: function onClick() {
	                                    _this2.showNotice('normal');
	                                } },
	                            'click'
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'h4',
	                            null,
	                            'SHOW notice'
	                        ),
	                        React.createElement(
	                            'button',
	                            { onClick: function onClick() {
	                                    _this2.showNotice();
	                                } },
	                            'click'
	                        )
	                    )
	                ),
	                React.createElement(_index.NoticeCenter, { ref: 'ncNode' })
	            );
	        }
	    }]);

	    return NoticeDemo;
	}(React.Component);

	exports.default = NoticeDemo;


	ReactDOM.render(React.createElement(NoticeDemo, null), document.querySelector('.app'));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(3)))

/***/ }
]);