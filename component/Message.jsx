const klassName = require('./util/className');
const Message = React.createClass({
    getDefaultProps(){
        return{
            delay:5000,
            className:'',
            position:'top',
            closeNode:<i>x</i>
        }
    },
    getInitialState(){
        return{
            display:false
        }
    },
    handleDisplay(){
        const {display} = this.state;
        const {delay} = this.props;
        this.setState({
            display:!display
        })
        if(!display){
            setTimeout(()=>{
                this.setState({display:false})
            },delay)
        }
    },
    render(){
        let {children,className,content,closeNode,onClose,position} = this.props;
        className = klassName(className,`_${position}`)
        const {display} = this.state;
        console.log("className:",className)
        if(display){
            // className +=' _active'
            className = klassName(className,'_active')
        }

        let msgNode = <div className="_message">{content}</div>;
        if(onClose){
            msgNode = <div className="_message">
                <div className="_wrap">{content}</div>
                <div className="_close" onClick={this.handleDisplay}>{closeNode}</div>
            </div>
        }
        return(
            <div className={`ui message ${className}`}>
                <div className="_trigger" onClick={this.handleDisplay}>{children}</div>
                {msgNode}
            </div>
        )
    }
})

module.exports = Message