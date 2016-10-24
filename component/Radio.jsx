const klassName = require('./util/className');
const Radio = React.createClass({
    handleChange(e){
        const {value,onChange} = this.props;
        if(onChange) onChange(e,value)
    },
    render(){
        let {className, checked, disabled, style, children} = this.props;
        // console.log("children:",children);
        className = klassName(className, 'radio');
        if(disabled){
            className = `${className} disabled`
        }
        return (
            <label style={style} className={className}>
                <input type="radio" ref="inputRadio" checked={checked} disabled={disabled} onChange={this.handleChange} defaultValue=""/>{children}
            </label>
        )
    }


})

module.exports = Radio