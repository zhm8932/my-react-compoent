const klassName = require('./util/className');

const Pin = React.createClass({
    getInitialState(){
        return{
            fixed:false,
            baseTop:0
,        }
    },
    componentDidMount(){
        // console.log("window:",window)
        document.addEventListener('scroll',this.onScroll)
        this.setState({
            baseTop:this.node2Top()
        })
    },
    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll);
    },

    node2Top(){   //要点一：获取节点距离顶部的高度
        const {begin} = this.props;
        if (begin) return begin;

        const pinNode = ReactDOM.findDOMNode(this.refs.pinNode)

        console.log("pinNode.offsetTop:",pinNode.offsetTop)
        return pinNode.offsetTop;   //节点距离顶部的距离
    },
    windowScrollOffset(){  //要点二：获取页面向上滚动的高度
        const doc = document.documentElement;
        // console.log("doc:",doc.scrollLeft,doc.clientLeft)
        // console.log("doc:",doc.scrollTop,doc.clientTop)
        let left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
        let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        //pageYOffset  节点自身距离顶部的距离 此属性能够返回当前页面向上滚动的距离，也就是页面顶部距离浏览器视口上边缘的距离(不兼容IE8及以下)
        //scrollTop：位于对象最顶端和窗口中可见内容的最顶端之间的距离，简单地说就是滚动后被隐藏的高度。
        //clientTop：元素上边框的厚度，当没有指定边框厚底时，一般为0。
        // console.log("pageYOffset:",window.pageYOffset,"--scrollTop:",doc.scrollTop,"---clientTop",doc.clientTop)
        return {
            _left:left,
            _top:top
        }
    },
    onScroll(){  //要点三：比较 页面滚动的距离和节点元素初始处理页面顶部高度
        const {_top} = this.windowScrollOffset(); //浏览器向上滚动的高度
        console.log("windowScrollOffset:",this.windowScrollOffset(),this.state.baseTop)
        this.setState({
            fixed:_top>=this.state.baseTop
        })
    },
    render(){
        const {fixed} = this.state;
        let {children,className,top} = this.props;
        className = klassName(className,'pin');
        let stat = fixed?'fixed':'';

        return<div className={`${className} ${stat}`} style={{top:top}} ref='pinNode'>{children}</div>
    }
})

module.exports = Pin;