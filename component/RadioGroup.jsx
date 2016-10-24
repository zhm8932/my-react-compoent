const klassName = require('./util/className');
const Radio  = require('./Radio');

const RadioGroup = React.createClass({
    getInitialState(){
      const {value} = this.props;
        return {value}
    },
    handleChange(e,value){
        console.log("value:",value)
      this.setState({value},()=>{
          if(this.props.onChange) this.props.onChange(value)
      })
    },
    componentDidMount(){
        const {defaultChecked,options} = this.props;
        const {value} = this.state;
        // console.log("value:",value,"---------------defaultCheckd:",defaultChecked)
        if(!value&&defaultChecked&&options.length){
            for(let i=0;i<options.length;i++){
                this.setState({
                    value:options[0].value
                })
            }
        }


    },
    render(){
        const {children,options} = this.props;
        const {value} = this.state;

        // console.log("options1:",JSON.stringify(options),"children:",children,"value:",value)
        let optionNodes = [],itemChecked;
        if(children){
            React.Children.map(children,(node,i)=>{
                console.log("node.props:",node.props)
                itemChecked = node.props.value===value;
                optionNodes.push(<Radio {...node.props} checked={itemChecked} onChange={this.handleChange}>{node.props.children}</Radio>)
            })
        }else{
            // for(let i = 0;i<options.length;i++){
            for (let i = 0; i < options.length; i++) {
                let item = options[i];
                let itemChecked =item.value==value;
                let itemNode = <Radio key={i} value={item.value} checked={itemChecked} disabled={item.disabled} onChange={this.handleChange}>{item.name}</Radio>
                optionNodes.push(itemNode)
            }
        }


        return (
            <div>
                {optionNodes}
            </div>
        )
    }


})

module.exports = RadioGroup