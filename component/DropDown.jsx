const klassName = require('./util/className');
const DropDown = React.createClass({
    getDefaultProps(){
        return {
            labelName:'name',
            valueName:'value',
            multi:false,
            className:'',
            placeHolder:'click to select ……'
        }

    },
    getInitialState(){
        let {multi,value,options} = this.props;
        const default_val = multi?[]:'';
        value = value||default_val;
        return {
            options,
            value,
            open:false,
            filterText:''
        }
    },
    componentDidMount() {
        const {multi,defaultSelected,valueName} = this.props;
        const {options,value} = this.state;
        console.log("options[0][valueName]:",options[0][valueName],"----options[0].name:",options[0].value)
        if (!multi && !value && defaultSelected && options.length > 0) {
            this.setState({
                value:options[0].value
            })
        }
    },
    formatYieldChildren(children){
        return <div>1111111111</div>
    },
    getFilterStatus(text,...fields){  //列表中是否存在输入的值，返回布尔值
        let status = false;
        console.log("text:",text)
        console.log("fields:",fields)
        for (let i = 0; i < fields.length; i++) {
            if (String(fields[i]).indexOf(text) !== -1) { //输入的值存在于原值中
                status = true;
                // break;
            }
        }
        return status;
    },
    getNodesAndLabel(){
        let {labelName,valueName,searchable,multi,placeHolder} = this.props;
        const {filterText,value,options} = this.state;
        let displayLabels = [],node=null,optionNodes = [];
        if(!multi)  displayLabels = placeHolder;

        for(let i=0;i<options.length;i++){
            let selected = false;
            const item = options[i];
            if(multi){

            }else{
                selected = value == item.value;
                if(selected) displayLabels = item.name;
            }
            node = this.formatOptionCell({label:item.name,value:item.value,selected,disabled:item.disabled,children:item.children});
            if(multi||searchable){
                if (this.getFilterStatus(filterText, item.value, item.name)) optionNodes.push(node);
            }else{
                optionNodes.push(node)
            }

            // console.log("node:",node,typeof node)
        }

        return {optionNodes,displayLabels}
    },
    triggerDropValueChange(){
        const {onChange,multi} = this.props;
        let {value} = this.state;
        if(multi) Object.assign([],value);
        if(onChange) onChange(value)
    },
    formatValue(val,cb){
        let newVal = val,oldVal = this.state.value;
        if(this.props.multi){

        }
        this.setState({value:val},cb)
    },
    handleChangeSelect(value){
        console.log("handleChangeSelect--value:",value);
        this.formatValue(value,()=>{
            this.triggerDropValueChange()
            this.toggleOpen()
        })
    },
    formatOptionCell({label,value,selected,children,disabled}){
        const content = children?children:label;
        let node = disabled?
            <DropDown.Option disabled={disabled} selected={selected}>{content}</DropDown.Option>:
            <DropDown.Option disabled={disabled} selected={selected} onClick={()=>{this.handleChangeSelect(value)}}>{content}</DropDown.Option>;
        return <li key={value}>{node}</li>
    },
    handleSearch(val){
        console.log("val:",val)
        this.setState({
            filterText:val
        })
    },
    formatSearchBar(text){
        const {filterText} = this.state;
        console.log("filterText:",filterText)
        return (
            <div className="_search" onClick={()=>{this.toggleOpen(true)}}>
                {filterText?<div className="_text"></div>:<div className="_text">{text}</div>}
                <input className="_input" ref="userInput" value={filterText} type="text" onChange={(e)=>{this.handleSearch(e.target.value)}}/>
            </div>
        )
    },
    toggleOpen(){
        let stat = this.state.open;
        this.setState({
            open:!stat,
            filterText:''
        })
    },
    formatLabelNode(labels){
        const {multi,searchable} = this.props;
        const {open} = this.state;
        let labelNode = null;
        if(multi){

        }else{
            labelNode = searchable?
                this.formatSearchBar(labels):
                <DropDown.label onClick={this.toggleOpen}>{labels}</DropDown.label>
        }
        return labelNode
    },
    formatOptions(){
        let {className, style} =this.props;
        className = klassName('dropdown', className);
        if (this.state.open) className += ' _active';
        const {optionNodes, displayLabels} = this.getNodesAndLabel();
        return (
            <div className={className} style={style}>
                {this.formatLabelNode(displayLabels)}
                <ul className="_list">
                    {optionNodes}
                </ul>
            </div>
        )
    },
    render(){
        const {children} = this.props;
        let node = children?
            this.formatYieldChildren(children):
            this.formatOptions();
        // console.log("node:",node,typeof node)
        return node
    }
});


// dropdown option
DropDown.Option = React.createClass({
    render(){
        const {select,disabled} = this.props;
        let className = '_item';
        if(disabled) className+=' _disabled';

        // console.log("this.props:",this.props)
        return <div {...this.props} className={className}></div>
    }
});

DropDown.label = React.createClass({
    render(){
        return (<div className="_label" {...this.props}>{this.props.children}</div>)
    }
})

module.exports = DropDown;