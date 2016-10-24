webpackJsonp([6],[
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

	var TabDemo = function (_React$Component) {
	    _inherits(TabDemo, _React$Component);

	    function TabDemo(props) {
	        _classCallCheck(this, TabDemo);

	        var _this = _possibleConstructorReturn(this, (TabDemo.__proto__ || Object.getPrototypeOf(TabDemo)).call(this, props));

	        _this.state = {
	            index: '2'
	        };
	        return _this;
	    }

	    _createClass(TabDemo, [{
	        key: 'displayChange',
	        value: function displayChange(index) {
	            // this.setState({
	            //     index
	            // });
	        }
	    }, {
	        key: 'formatTab',
	        value: function formatTab(_ref) {
	            var _ref$current = _ref.current;
	            var current = _ref$current === undefined ? null : _ref$current;
	            var _ref$onChange = _ref.onChange;
	            var onChange = _ref$onChange === undefined ? null : _ref$onChange;

	            console.log("current:", current);
	            return React.createElement(
	                _index.Tab,
	                { onChange: onChange, current: current, style: { 'width': '350px' } },
	                React.createElement(
	                    _index.Item,
	                    { index: '0', title: 'first' },
	                    React.createElement(
	                        'h4',
	                        null,
	                        'The first tab content'
	                    ),
	                    React.createElement(
	                        'p',
	                        null,
	                        'React.js is pretty awesome'
	                    )
	                ),
	                React.createElement(
	                    _index.Item,
	                    { index: '1', title: 'second2' },
	                    React.createElement(
	                        'h4',
	                        null,
	                        'The second tab content'
	                    ),
	                    React.createElement(
	                        'p',
	                        null,
	                        'Vue.js is pretty awesome'
	                    )
	                ),
	                React.createElement(
	                    _index.Item,
	                    { index: '2', title: React.createElement(
	                            'p',
	                            { 'data-id': '333' },
	                            'third'
	                        ) },
	                    React.createElement(
	                        'h4',
	                        null,
	                        'The third tab content'
	                    ),
	                    React.createElement(
	                        'p',
	                        null,
	                        'Ember.js is pretty awesome'
	                    ),
	                    React.createElement(
	                        _index.Tab,
	                        null,
	                        React.createElement(
	                            _index.Item,
	                            { index: '4', title: 'first' },
	                            React.createElement(
	                                'h4',
	                                null,
	                                'The first tab content'
	                            ),
	                            React.createElement(
	                                'p',
	                                null,
	                                'React.js is pretty awesome'
	                            )
	                        ),
	                        React.createElement(
	                            _index.Item,
	                            { index: '5', title: 'second2' },
	                            React.createElement(
	                                'h4',
	                                null,
	                                'The second tab content'
	                            ),
	                            React.createElement(
	                                'p',
	                                null,
	                                'Vue.js is pretty awesome'
	                            )
	                        ),
	                        React.createElement(
	                            _index.Item,
	                            { index: '6', title: React.createElement(
	                                    'p',
	                                    { 'data-id': '333' },
	                                    'third'
	                                ) },
	                            React.createElement(
	                                'h4',
	                                null,
	                                'The third tab content'
	                            ),
	                            React.createElement(
	                                'p',
	                                null,
	                                'Ember.js is pretty awesome'
	                            )
	                        ),
	                        React.createElement(
	                            _index.Item,
	                            { index: '7', title: React.createElement(
	                                    'p',
	                                    null,
	                                    'fourth',
	                                    React.createElement(
	                                        'span',
	                                        null,
	                                        '44444444'
	                                    )
	                                ) },
	                            React.createElement(
	                                'h4',
	                                null,
	                                'The fourth tab content'
	                            ),
	                            React.createElement(
	                                'p',
	                                null,
	                                'Angular.js is pretty awesome'
	                            ),
	                            React.createElement(
	                                'a',
	                                { target: '_blank', href: 'http://braavos.me' },
	                                'blog'
	                            )
	                        )
	                    )
	                ),
	                React.createElement(
	                    _index.Item,
	                    { index: '3', title: React.createElement(
	                            'p',
	                            null,
	                            'fourth',
	                            React.createElement(
	                                'span',
	                                null,
	                                '44444444'
	                            )
	                        ) },
	                    React.createElement(
	                        'h4',
	                        null,
	                        'The fourth tab content'
	                    ),
	                    React.createElement(
	                        'p',
	                        null,
	                        'Angular.js is pretty awesome'
	                    ),
	                    React.createElement(
	                        'a',
	                        { target: '_blank', href: 'http://braavos.me' },
	                        'blog'
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var current = this.state.current;

	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'h3',
	                    null,
	                    'Tab'
	                ),
	                React.createElement(
	                    'p',
	                    null,
	                    'this will change next tab'
	                ),
	                this.formatTab({ onChange: null }),
	                this.formatTab({ current: this.state.index })
	            );
	        }
	    }]);

	    return TabDemo;
	}(React.Component);

	exports.default = TabDemo;


	ReactDOM.render(React.createElement(TabDemo, null), document.querySelector('.app'));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ }
]);