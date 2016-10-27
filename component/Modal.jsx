const klassName = require('./util/className');

const Modal = React.createClass({
    getDefaultProps(){
        return{
            cancelText:'cancel',
            confirmText:'confirm',
            closeIcon:<span>x</span>
        }
    },
    getInitialState(){
        return {
            display:false
        }
    },
    open(){
        this.setState({
            display:true
        })
    },
    close(){
        const {onClose} = this.props;
        if (onClose && !onClose()) return

        console.log("onClose-关闭:",onClose)
        this.setState({
            display:false
        })
        // if(onClick) onClick()
    },
    handleCancel(){
        // console.log("this.props.onCancel():",this.props.onCancel())
        if(this.props.onCancel()) this.close();
    },
    handleConfirm(){
        if(this.props.onConfirm()) this.close()

    },
    render(){
        let {children,title,className,style,confirmText,cancelText,closeIcon,force,onCancel,onConfirm} = this.props;
        const {display}  = this.state;
        className = klassName('modal',className);
        let actionDOM = [];
        if(onCancel) actionDOM.push(<div key="_cancel-action" className="_action-btn" onClick={this.handleCancel}>{cancelText}</div>)
        if(onConfirm) actionDOM.push(<div key="_confirm-action" className="_action-btn" onClick={this.handleConfirm}>{confirmText}</div>)

        let footer = onCancel||onConfirm
            ?<div className="_actions">{actionDOM}</div>
            :'';

        if(display) className +=' _show';

        if(force) className +=' _force';

        return (
            <div className={className}>
                    <div className="_body">
                        <div className="_wrap">
                            {
                                title?<div className="_title">{title}</div>:null
                            }
                            <div className="_content">
                                {children}
                                {footer}
                            </div>
                            {force
                                ?null
                                :<div className="_close" onClick={this.close}>{closeIcon}</div>
                            }
                        </div>
                    </div>
                    {
                        force
                            ?<div className="_overlay"></div>
                            :<div className="_overlay" onClick={this.close}></div>
                    }

            </div>
        )
    }
})
module.exports = Modal;