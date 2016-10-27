const klassName = require('./util/className');
const Item = require('./Item');
const Pagination = React.createClass({
    getDefaultProps(){
        return{
            current:1,
            range:6,
            total:30
        }
    },
    getInitialState(){
        const {current} = this.props;
        return {current}
    },
    formatStartAndEnd(){
        const {range,total} = this.props;
        const {current} = this.state;
        let start = 1,
            end = 1,
            left_half = Math.ceil(range/2);

        // current lage than half
        if(current > left_half) {
            start = current-left_half;
            console.log("改变-start：",start)
        }

        end = start+range;

        if(total-start<=range){ //值范围把总数减开始值大
            end = total;
            start = total-range;
        }
        console.log("left_half:",left_half,start,end,"--current:",current)
        return {start,end}
    },
    formatFirstNode(start){
        const {showRange,showNav,prevNode} = this.props;
        const {current} = this.state;
        let firstNode = [],rangeNode=null,navNode = null;
        //start不为1的时候执行；

        // if(showRange&&start!=1){
        // }else if(showNav&&start!=1){
        // }
        // console.log("firstNode:",firstNode)
        if(start!=1){
            rangeNode = <li key="first-page" className="_item" onClick={()=>{this.onPageChange(1)}}><span>1</span>{start>2?<span>...</span>:null}</li>
            navNode = <li key="prev-page" className="_item" onClick={()=>{this.onPageChange(current-1)}}>{prevNode?prevNode:<span>prev</span>}</li>
            if(showRange&&showNav){
                firstNode.push(navNode,rangeNode)
            }else if(showNav){
                firstNode = navNode;

            }else if(showRange) {
                firstNode = rangeNode;
            }
        }
        return firstNode
    },
    formatRange(start,end){
        let {isEnd} = this.props;
        const {current} = this.state;
        let nodes = [];
        for(let i=start;i<=end;i++){
            if(isEnd&&current===i-1) break;
            nodes.push(<li key={`page-${i}`} className={current===i?'_active _item':'_item'} onClick={()=>{this.onPageChange(i)}}><span>{i}</span></li>)
        }
        // console.log("current:",current)
        return nodes;
    },
    formatLastNode(end){
        const {showRange,showNav,nextNode,total} = this.props;
        const {current} = this.state;
        let endNode = [],rangeNode=null,navNode = null;
        // if(showRange&&end!==total){
        //     endNode = <li key="end-page" className="_item" onClick={()=>{this.onPageChange(total)}}>{total-end>=2?<em>...</em>:null}<span>{total}</span></li>
        // }else if(showNav&&end!==total){
        //     endNode = <li key="next-page" className="_item _nav _next" onClick={()=>{this.onPageChange(current+1)}}>{nextNode?nextNode:<span>next</span>}</li>
        // }
        if(end!==total){
            rangeNode = <li key="end-page" className="_item" onClick={()=>{this.onPageChange(total)}}>{total-end>=2?<em>...</em>:null}<span>{total}</span></li>;
            navNode = <li key="next-page" className="_item _item _next" onClick={()=>{this.onPageChange(current+1)}}>{nextNode?nextNode:<span>next</span>}</li>;
            if(showRange&&showNav){
                endNode.push(rangeNode,navNode)
                console.log("showRange&&showNav")

            }else if (showNav){
                endNode = navNode
                console.log("showNav")
            }else if(showRange){
                endNode = rangeNode
                console.log("showRange")

            }
        }
        console.log("endNode:",endNode)
        return endNode
    },
    onPageChange(page){
        const {onChange,total} = this.props;
        if(page>total) return;
        this.setState({current:page})
        if(onChange) onChange(page)
    },
    render(){
        let {start,end} = this.formatStartAndEnd()
        let {className} = this.props;
        className = klassName(className,'pagination')
        return (
            <ul className={className}>
                {this.formatFirstNode(start)}
                {this.formatRange(start,end)}
                {this.formatLastNode(end)}
            </ul>
        )
    }
})

module.exports = Pagination;