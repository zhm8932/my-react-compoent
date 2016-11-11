webpackJsonp([8],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, ReactDOM) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(163);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PaginationDemo = function (_React$Component) {
	    _inherits(PaginationDemo, _React$Component);

	    function PaginationDemo(props) {
	        _classCallCheck(this, PaginationDemo);

	        var _this = _possibleConstructorReturn(this, (PaginationDemo.__proto__ || Object.getPrototypeOf(PaginationDemo)).call(this, props));

	        _this.state = {
	            current: 1
	        };
	        return _this;
	    }

	    _createClass(PaginationDemo, [{
	        key: "handleChange",
	        value: function handleChange(page) {
	            console.log("page----:", page);
	            this.setState({
	                current: page
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                null,
	                React.createElement(
	                    "h3",
	                    null,
	                    "Pagination"
	                ),
	                React.createElement(
	                    "ul",
	                    null,
	                    React.createElement(
	                        "li",
	                        null,
	                        React.createElement(
	                            "h4",
	                            null,
	                            "Default pagination"
	                        ),
	                        React.createElement(_index.Pagination, null)
	                    ),
	                    React.createElement(
	                        "li",
	                        null,
	                        React.createElement(
	                            "h4",
	                            null,
	                            "Pagination with given current page"
	                        ),
	                        React.createElement(
	                            "p",
	                            null,
	                            "now on page ",
	                            this.state.current
	                        ),
	                        React.createElement(_index.Pagination, { onChange: this.handleChange.bind(this) })
	                    ),
	                    React.createElement(
	                        "li",
	                        null,
	                        React.createElement(
	                            "h4",
	                            null,
	                            "Pagination with full range"
	                        ),
	                        React.createElement(_index.Pagination, { current: "10", showRange: true, total: "100" })
	                    ),
	                    React.createElement(
	                        "li",
	                        null,
	                        React.createElement(
	                            "h4",
	                            null,
	                            "Pagination with navigation"
	                        ),
	                        React.createElement(_index.Pagination, { showNav: true })
	                    ),
	                    React.createElement(
	                        "li",
	                        null,
	                        React.createElement(
	                            "h4",
	                            null,
	                            "Pagination with navigation and full range"
	                        ),
	                        React.createElement(_index.Pagination, { showNav: true, showRange: true })
	                    )
	                )
	            );
	        }
	    }]);

	    return PaginationDemo;
	}(React.Component);

	exports.default = PaginationDemo;


	ReactDOM.render(React.createElement(PaginationDemo, null), document.querySelector('.app'));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(3)))

/***/ }
]);