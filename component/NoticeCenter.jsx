const klassName = require('./util/className')
const ReactCssTransitionGroup = require('react-addons-css-transition-group');
const NoticeCenter = React.createClass({
    getInitialState(){
        return{
            notices:[]
        }
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