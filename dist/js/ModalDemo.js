webpackJsonp([6],[
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

	var ModalDemo = function (_React$Component) {
	    _inherits(ModalDemo, _React$Component);

	    function ModalDemo(props) {
	        _classCallCheck(this, ModalDemo);

	        return _possibleConstructorReturn(this, (ModalDemo.__proto__ || Object.getPrototypeOf(ModalDemo)).call(this, props));
	    }

	    _createClass(ModalDemo, [{
	        key: "openModal",
	        value: function openModal(ref) {
	            var node = this.refs[ref];
	            console.log("node:", node);
	            node.open();
	        }
	    }, {
	        key: "handleCancel",
	        value: function handleCancel() {
	            console.log("Cancel 处理器");
	            return true;
	        }
	    }, {
	        key: "handleConfirm",
	        value: function handleConfirm() {
	            console.log("Confirm 处理器");
	            return confirm('close modal?');
	        }
	    }, {
	        key: "handleConfirm1",
	        value: function handleConfirm1() {
	            alert('confirmed');
	            return true;
	        }
	    }, {
	        key: "handleClose",
	        value: function handleClose() {
	            console.log("demo----handleClose");
	            return confirm('close');
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var content = React.createElement(
	                "article",
	                null,
	                React.createElement(
	                    "h4",
	                    null,
	                    "this is content"
	                ),
	                React.createElement(
	                    "p",
	                    null,
	                    "默认内容"
	                ),
	                React.createElement(
	                    "ul",
	                    null,
	                    React.createElement(
	                        "li",
	                        null,
	                        "第一行"
	                    ),
	                    React.createElement(
	                        "li",
	                        null,
	                        "第二行"
	                    )
	                )
	            );
	            return React.createElement(
	                "div",
	                null,
	                React.createElement(
	                    "ol",
	                    null,
	                    React.createElement(
	                        "li",
	                        null,
	                        React.createElement(
	                            "h3",
	                            null,
	                            "Default modal"
	                        ),
	                        React.createElement(
	                            "button",
	                            { onClick: this.openModal.bind(this, 'modal0') },
	                            "click"
	                        ),
	                        React.createElement(
	                            _index.Modal,
	                            { ref: "modal0", title: React.createElement(
	                                    "h4",
	                                    null,
	                                    "Comfirm deleted"
	                                ) },
	                            content
	                        )
	                    ),
	                    React.createElement(
	                        "li",
	                        null,
	                        React.createElement(
	                            "h3",
	                            null,
	                            "Modal with confirm, cancel action"
	                        ),
	                        React.createElement(
	                            "button",
	                            { onClick: this.openModal.bind(this, 'modal1') },
	                            "click"
	                        ),
	                        React.createElement(
	                            _index.Modal,
	                            { ref: "modal1", onConfirm: this.handleConfirm.bind(this),
	                                onCancel: this.handleCancel.bind(this), confirmText: "确定", cancelText: "取消", closeIcon: "关闭" },
	                            content
	                        )
	                    ),
	                    React.createElement(
	                        "li",
	                        null,
	                        React.createElement(
	                            "h3",
	                            null,
	                            "Modal with only confirm action"
	                        ),
	                        React.createElement(
	                            "button",
	                            { onClick: this.openModal.bind(this, 'modal2') },
	                            "click"
	                        ),
	                        React.createElement(
	                            _index.Modal,
	                            { ref: "modal2", onConfirm: this.handleConfirm1.bind(this) },
	                            content
	                        )
	                    ),
	                    React.createElement(
	                        "li",
	                        null,
	                        React.createElement(
	                            "h3",
	                            null,
	                            "Modal with onClick"
	                        ),
	                        React.createElement(
	                            "button",
	                            { onClick: this.openModal.bind(this, 'modal3') },
	                            "click"
	                        ),
	                        React.createElement(
	                            _index.Modal,
	                            { ref: "modal3", onClose: this.handleClose.bind(this), closeIcon: React.createElement(
	                                    "p",
	                                    null,
	                                    "关闭"
	                                ) },
	                            content
	                        )
	                    ),
	                    React.createElement(
	                        "li",
	                        null,
	                        React.createElement(
	                            "h4",
	                            null,
	                            "Modal force to close"
	                        ),
	                        React.createElement(
	                            "button",
	                            { onClick: this.openModal.bind(this, 'modal4') },
	                            "click"
	                        ),
	                        React.createElement(
	                            _index.Modal,
	                            { ref: "modal4", force: true, onConfirm: this.handleConfirm1.bind(this), confirmText: "确定" },
	                            content
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return ModalDemo;
	}(React.Component);

	exports.default = ModalDemo;


	ReactDOM.render(React.createElement(ModalDemo, null), document.querySelector('.app'));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(3)))

/***/ }
]);