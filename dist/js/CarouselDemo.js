webpackJsonp([0],[
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

	var src = ['ambition-morty', 'awkward-morty', 'despise', 'pride-morty', 'surprise-morty'];
	var prefix = 'https://raw.githubusercontent.com/jerryshew/design/master/png';
	//https://raw.githubusercontent.com/jerryshew/design/master/png/ambition-morty.png
	var getImgs = function getImgs() {
	    var rtn = [];
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = src[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var i = _step.value;

	            // console.log("${prefix}/${i}:",`${prefix}/${i}`,`${prefix}`,`${i}`)
	            // console.log(`${i}`)
	            rtn.push(React.createElement('img', { key: i, src: prefix + '/' + i + '.png' }));
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    return rtn;
	};

	var imgNodes = getImgs();

	var CarouselDemo = function (_React$Component) {
	    _inherits(CarouselDemo, _React$Component);

	    function CarouselDemo() {
	        _classCallCheck(this, CarouselDemo);

	        return _possibleConstructorReturn(this, (CarouselDemo.__proto__ || Object.getPrototypeOf(CarouselDemo)).apply(this, arguments));
	    }

	    _createClass(CarouselDemo, [{
	        key: 'render',
	        value: function render() {
	            var items = [];
	            var prev = React.createElement(
	                'h4',
	                null,
	                '<<'
	            );
	            var next = React.createElement(
	                'h4',
	                null,
	                '>>'
	            );
	            return React.createElement(
	                'ul',
	                { className: 'two carousel-demo' },
	                React.createElement(
	                    'h3',
	                    null,
	                    'Crousel'
	                ),
	                React.createElement(
	                    'li',
	                    { style: { width: '360px' } },
	                    React.createElement(
	                        'h4',
	                        null,
	                        'Default carousel'
	                    ),
	                    React.createElement(
	                        _index.Carousel,
	                        { showArrow: true },
	                        imgNodes
	                    )
	                ),
	                React.createElement(
	                    'li',
	                    { style: { width: '360px' } },
	                    React.createElement(
	                        'h4',
	                        null,
	                        'Auto play carousel'
	                    ),
	                    React.createElement(
	                        _index.Carousel,
	                        { showArrow: true, autoPlay: true },
	                        imgNodes
	                    )
	                ),
	                React.createElement(
	                    'li',
	                    { style: { width: '360px' } },
	                    React.createElement(
	                        'h4',
	                        null,
	                        'Auto play carousel'
	                    ),
	                    React.createElement(
	                        _index.Carousel,
	                        { showArrow: true, autoPlay: true, prevNode: React.createElement(
	                                'span',
	                                null,
	                                '上一页'
	                            ), nextNode: React.createElement(
	                                'span',
	                                null,
	                                '下一页'
	                            ) },
	                        imgNodes
	                    )
	                )
	            );
	        }
	    }]);

	    return CarouselDemo;
	}(React.Component);

	exports.default = CarouselDemo;


	ReactDOM.render(React.createElement(CarouselDemo, null), document.querySelector('.app'));

	function say(word) {
	    console.log(word);
	}
	say("Hello world");
	say.call(window, "Hello world");

	// min/max number in an array
	var numbers = [5, 6, 2, 3, 7, 11];

	// using Math.min/Math.max apply
	var max = Math.max.apply(null, numbers);
	console.log("max:", max);

	// function add(a,b)
	// {
	//     console.log("a+b:",a+b)
	//     // alert(a+b);
	// }
	// function sub(a,b)
	// {
	//     console.log("a-b:",a-b)
	//     // alert(a-b);
	// }
	//
	// add.call(sub,3,1);

	//add.call(sub,3,1)==add(3,1)

	// function Animal(){
	//     this.name = "Animal";
	//     this.showName = function(){
	//         console.log("argument1:",arguments)
	//         console.log("Animal-this.name:",this.name,arguments)
	//     }
	// }
	//
	// function Cat(name){
	//     console.log("argument2:",arguments)
	//     this.name = name||"Cat";
	// }
	//
	// var animal = new Animal();
	// var cat = new Cat("小猫2");
	//
	// //通过call或apply方法，将原本属于Animal对象的showName()方法交给cat来使用了。//结果为Cat
	// //这里的cat对象,运行了animail.showName()方法
	// animal.showName.call(cat,"小猫");
	// animal.showName.apply(cat,["小老虎"])

	function Animal(name) {
	    this.name = name;
	    this.showName = function () {
	        console.log("Animal-this.name:", this.name, arguments);
	    };
	}

	function Cat(name) {
	    Animal.call(this, name); //使用Animal对象代替this对象，那么Cat中不就有Aanimal的所有属性和方法吗，Cat对象就能够直接调用Animal的方法以及属性了
	}
	var animal = new Animal("小狗");
	var cat = new Cat('小猫');
	// console.log(cat)
	// cat.showName()


	function add(a, b, c) {
	    console.log("a+b+c:", a + b + c, "this：", this, arguments);
	    return a + b + c;
	}
	function sub(c, d) {
	    console.log("c-d:", c - d, "this：", this, arguments);
	    return c - d;
	}
	function result() {
	    this.addValue = null;
	    this.subValue = null;
	    this.showResult = function () {
	        console.log(this.addValue);
	        console.log(this.subValue);
	    };
	}
	var r = new result();

	// // r.addValue = add.call(sub,4,2,10,20) //将add方法应用到sub上，即sub的指针指向add
	// r.addValue = add.call(r,4,2,10,20) //将add方法应用到r对象上，这里表示对象r调用了add()方法
	// r.addValue = add.call(null,4,2,10,20) //将add方法应用到r对象上，这里表示对象r调用了add()方法
	// // r.addValue = add.apply(r,[4,2,10,20]) //将add方法应用到r对象上，这里表示对象r调用了add()方法
	// // add(1,2,3,4)
	// // r.subValue = sub.call(add,4,2,10)
	// r.showResult()
	// console.log("R:",r)
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(3)))

/***/ }
]);