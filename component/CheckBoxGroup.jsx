// const React = require('react');
const CheckBox = require('./CheckBox');
const klassName = require('./util/className');

const CheckBoxGroup = React.createClass({
    getInitialState(){
       const {value,options} = this.props;
       return {
           value,
           options
       }
    },
    getDefaultProps() {
        return {
            value: [],
            labelName: 'name',
            valueName: 'value',
            options: [],
        };
    },
    handleChange(e,val){
        console.log("handlChange:",e.target.checked,val)
        e.target.checked?this.addVal(val):this.removeVal(val)
    },
    addVal(val){

        let flag = false;
        const {value} = this.state;
        console.log('this.state:',this.state)
        console.log("addVal",val)
        console.log("addValvalue",value)
        for(let i=0;i<value.length;i++){
            if(value[i]==val){
                flag = true;
            }
        }
        if(!flag){
            this.setState({
                // value:value.push(val)
                value: value.concat(val)
            },this.valueChange)
        }

    },
    removeVal(val){

        const {value} = this.state;

        let index = value.indexOf(val)
        console.log("removeVal",val,"value:",value,"index:",index);
        value.splice(index,1)
        this.setState({
            value:value
        },this.valueChange)
    },
    valueChange(){
        const {onChange} = this.props;
        console.log("valueChange:",this.state.value)
        if(onChange) onChange(this.state.value)
    },
    render(){
        const {children,style,className} = this.props;
        const {options,value} = this.state;

        let optionsNodes = [];
        if(children){
            console.log("value:",value)
            optionsNodes = React.Children.map(children,(node,i)=>{   //React.Children.map 遍历子元素
                let checked =value.find(n=>n==node.props.value)   //判断value中是否有该元素  find方法返回布尔值
                return <CheckBox {...node.props} key={i} checked={checked} onChange={this.handleChange}/>

            })
        }else {
            let itemNode = null;
            // console.log("valuevaluevalue",value)
            // console.log("options",JSON.stringify(options))
            for(let i=0;i<options.length;i++){
                let item = options[i];
                let itemChecked = false;
                // console.log("i--------",i,item.value)
                for(let j=0;j<value.length;j++){
                    // console.log("j--",j,value[j],item.value)
                    if(value[j]==item.value) {
                        itemChecked =true;
                        break;
                    }
                }
                // console.log("itemChecked----",itemChecked)
                itemNode = <CheckBox key={i} value={item.value} disabled={item.disabled} checked={itemChecked} onChange={this.handleChange}>{item.name}</CheckBox>
                optionsNodes.push(itemNode)
            }
        }
        return <div style={style} className={klassName(className,'checkbox-group')}>
            {optionsNodes}
        </div>
    }
})

module.exports = CheckBoxGroup;