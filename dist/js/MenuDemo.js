webpackJsonp([4],[
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

	var MenuDemo = function (_React$Component) {
	    _inherits(MenuDemo, _React$Component);

	    function MenuDemo(props) {
	        _classCallCheck(this, MenuDemo);

	        var _this = _possibleConstructorReturn(this, (MenuDemo.__proto__ || Object.getPrototypeOf(MenuDemo)).call(this, props));

	        _this.state = {
	            index: '1'
	        };
	        return _this;
	    }

	    _createClass(MenuDemo, [{
	        key: 'displayChange',
	        value: function displayChange(index) {
	            this.setState({
	                index: index
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            // console.log("this.props:",this.props)
	            // let {current} = this.state;
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'h3',
	                    null,
	                    'Menu'
	                ),
	                React.createElement(
	                    'p',
	                    null,
	                    'you selected item index is ',
	                    this.state.index
	                ),
	                React.createElement(
	                    _index.Menu,
	                    { current: this.state.index, mode: 'click', onChange: this.displayChange.bind(this) },
	                    React.createElement(
	                        _index.Item,
	                        { index: 'sub0', title: '新闻', sub: true, active: true },
	                        React.createElement(
	                            _index.Menu,
	                            { className: 'second-menu' },
	                            React.createElement(
	                                _index.Item,
	                                { index: '0' },
	                                React.createElement(
	                                    'a',
	                                    { href: 'https://www.baidu.com/', target: '_blank' },
	                                    '体育'
	                                )
	                            ),
	                            React.createElement(
	                                _index.Item,
	                                { index: '1' },
	                                React.createElement(
	                                    'p',
	                                    null,
	                                    '经济'
	                                )
	                            ),
	                            React.createElement(
	                                _index.Item,
	                                { sub: true, index: 'sub0_1', title: React.createElement(
	                                        'p',
	                                        null,
	                                        '文学'
	                                    ) },
	                                React.createElement(
	                                    _index.Menu,
	                                    { className: 'third-menu' },
	                                    React.createElement(
	                                        _index.Item,
	                                        { index: '10' },
	                                        React.createElement(
	                                            'p',
	                                            null,
	                                            'Third item'
	                                        )
	                                    ),
	                                    React.createElement(
	                                        _index.Item,
	                                        { index: '11' },
	                                        React.createElement(
	                                            'p',
	                                            null,
	                                            'Third item'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        _index.Item,
	                        { index: 'sub1', title: '产品', sub: true },
	                        React.createElement(
	                            _index.Menu,
	                            { className: 'second-menu' },
	                            React.createElement(
	                                _index.Item,
	                                { index: '2' },
	                                React.createElement(
	                                    'p',
	                                    null,
	                                    '国内产品'
	                                )
	                            ),
	                            React.createElement(
	                                _index.Item,
	                                { index: '3' },
	                                React.createElement(
	                                    'p',
	                                    null,
	                                    '国外产品'
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return MenuDemo;
	}(React.Component);

	exports.default = MenuDemo;


	ReactDOM.render(React.createElement(MenuDemo, null), document.querySelector('.app'));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16), __webpack_require__(18)))

/***/ }
]);