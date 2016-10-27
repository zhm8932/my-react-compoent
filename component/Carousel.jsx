const klassName = require('./util/className');
const Carousel = React.createClass({

    getDefaultProps(){
        return{
            showArrow:false,
            showDot:true,
            autoPlay:false,
            delay:3000,
            prev:<span>prev</span>,
            next:<span>next</span>
        }
    },
    getInitialState(){
      return{
          index:0,
          count:0,
          baseWidth:0
      }
    },
    componentWillMount(){
        this.intervals = [];
        const {children} = this.props;
        if(children){
            this.setState({
                count:children.length
            })

            console.log("this.state.count1:",this.state.count)
        }

    },
    componentDidMount(){
        const base = ReactDOM.findDOMNode(this);
        // console.log("base:",base.offsetWidth,base)

        this.setState({
            baseWidth: base.offsetWidth
        });
        this.initAutoPlay();
        // const {children} = this.props;
        // if(children){
        //     this.setState({
        //         count:children.length
        //     })
        //
        //     console.log("this.state.count3:",this.state.count)
        // }
    },
    makeCarouselItem(children){
        const {baseWidth,index} = this.state;

        let itemNodes = [];
        let _len = React.Children.count(children);
        let len = children.length;
        // console.log("_len:",_len,"len:",len,"this.state:",this.state,);
        // if(children){
        //     // children.forEach(function (item,index) {
        //
        //     // })
        // }
        for(let i=-1;i<=_len;i++){ //左右各多加一个，防止切换到左右临界点后出现瞬间空白
            let _index = i;
            let active = index===i?"_active":'';
            if(i===-1) _index=_len-1;
            if(i===_len) _index = 0;


            itemNodes.push(<div className={`_item ${active}`} key={`carousel-item-${i}`} style={{width:baseWidth}}>{children[_index]}</div>)
        }


        return itemNodes;
    },
    setInterval(){
        console.log("setInterval:",setInterval,"arguments:",arguments)   //setInterval(code,millisec)  定时器函数 arguments是this.setInterval()的参数
        this.intervals.push(setInterval.apply(null,arguments))
        // console.log("arguments:",arguments)   //setInterval(code,millisec)  定时器函数
        /*
         给intervals数组推入一个函数。里面一直就只有一个元素
         至于为什么推入数组中，是为了闭包，更好的销毁。
         这个函数是系统的setInterval定时器函数。
         用apply触发，第一个参数是this代表的值，第二个是参数
         setInterval是在全局window对象下面的。
         而当前环境的this，是 React 组件对象，所以才用apply方法。
         每一秒调用一次 this.tick，更新 seconds的状态值。
         * */
        console.log("this.intervals:",this.intervals,setInterval)
    },
    clearInterval(){
        this.intervals.map(clearInterval)
    },
    handleAutoPlay(){
        const {index,count} = this.state;
        this.setState({
            index:index+1
        },()=>{this.addTransition(this.resetPostition)})



    },
    initAutoPlay(){  //设置自动播放条件
        const {autoPlay,delay} = this.props;
        if(autoPlay){
            this.setInterval(this.handleAutoPlay,delay)
            console.log("arguments-----------:",arguments)   //setInterval(code,millisec)  定时器函数
        }
    },
    handlePrev(){
        const {index,count} = this.state;
        if(index>=0){
            this.setState({
                index:index-1
            },()=>{this.addTransition(this.resetPostition)})
        }
    },
    handleNext(){
        const {index,count} = this.state;
        this.resetPostition();
        // console.log("handleNext:index:",index)
        // console.log("222222222222")
        if(index<count){
            this.setState({
                index:index+1
            },()=>{this.addTransition(this.resetPostition)})
        }

    },
    addTransition(callback){  //延时，使动画有左右滑动效果 需配合 css3（transition: transform）使用
        let contentDOM = ReactDOM.findDOMNode(this.refs.contentDOM);
        contentDOM.className +=' _slide';
        setTimeout(()=>{
            contentDOM.className = '_content'
            if(callback) callback.call(this,null)
        },500)
    },
    resetPostition(){
        const {index,count} = this.state;
        if(index===-1){ this.setState({index:count-1})}
        if(index===count) this.setState({index:0})

    },
    handleMouseOver(){
        this.clearInterval()
    },
    handleMouseOut(){
        this.initAutoPlay()
    },
    handleSlide(index){
        console.log("index:",index)
        this.setState({
            index:parseInt(index)
        },()=>{this.addTransition(this.resetPostition)})
    },
    render(){
        const {children,className,style,showArrow,showDot,prev,next} = this.props;
        const {count,baseWidth,index} = this.state;
        let dotNodes=[],arrowNodes=null;



        const contentNodes = this.makeCarouselItem(children);

        if(showArrow){
            arrowNodes = <div className="_arrow">
                <div className="_prev" onClick={this.handlePrev}>{prev}</div>
                <div className="_next" onClick={this.handleNext}>{next}</div>
            </div>
        }

        if(showDot){

            // console.log("showDot:count:",count)
            for(let i=0;i<count;i++){
                dotNodes.push(<a href="javascript:;" key={i} className={index==i?"_active _item":'_item'} onClick={()=>{this.handleSlide(i)}}>&middot;</a> )
            }
            dotNodes = <div className="_dot">{dotNodes}</div>
        }

        const contentCss = {
            width: baseWidth * (count+2),
            transform: `translate3d(-${baseWidth * (index)}px, 0, 0)`,
        };


        console.log("contentCss:",contentCss)
        return (
            <div className={klassName(className,'carousel')} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                <div className="_content" ref="contentDOM" style={contentCss}>{contentNodes}</div>
                {dotNodes}
                {arrowNodes}
            </div>
        )
    }
})

module.exports = Carousel;