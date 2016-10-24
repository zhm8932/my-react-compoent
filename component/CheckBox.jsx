// const React = require('react');
const klassName = require('./util/className');


const CheckBox = React.createClass({
    getInitialState(){
        return{
            checked:this.props.checked
        }
    },
    checkedChange(e){
        const {onChange,value} = this.props;
        this.setState({
            checked:e.target.checked
        })
        console.log("value:",value)
        if(onChange) onChange(e,value)
    },
    render(){
        let {disabled,style,className,children} = this.props;
        console.log("children:",children)
        if(disabled){
            className =klassName('disabled',className)
        }
        className = klassName(className,'checkbox');
        let {checked} = this.state;
        return (
            <label style={style} className={className}>
                <input type="checkbox" checked={checked} disabled={disabled} onChange={this.checkedChange}/> {children}
            </label>
        )
    }
})

module.exports = CheckBox;