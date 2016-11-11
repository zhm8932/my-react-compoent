const klassName = require('./util/className')
const ReactCssTransitionGroup = require('react-addons-css-transition-group');

let __key = 0;
const generatorNoticeKey = ()=>{
    let str = `notice_${__key}`;
    __key +=1;
    return str;
}
const NoticeCenter = React.createClass({
    getInitialState(){
        return{
            notices:[]
        }
    },
    addNotice(notice){

        notice.key = getInitialState();
        this.setState({

        })
    },
    render(){
        const {className} = this.props;
        const {notices} = this.state
        return(
            <div>NoticeCenter
                <ReactCssTransitionGroup className={className} transitionName="notice"
                                         transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                    {notices.map((item) => {
                        return <div>Notice</div>
                    })}
                </ReactCssTransitionGroup>
            </div>
        )
    }
})

module.exports = NoticeCenter