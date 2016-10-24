// import React from 'react';
import {CheckBoxGroup, CheckBox} from "../index";

const options = [
    {'name': 'apple', 'value': 'a'},
    {'name': 'banana', 'value': 'b',"disabled":true},
    {'name': 'cat', 'value': 'c'},
    {'name': 'dog', 'value': 'd'}
];

const checkedVal = ['a', 'd'];
const checkedVal1 = ['banana'];
const checkedVal2 = ['c'];

class CheckBoxGroupDemo extends React.Component{
    constructor(props,refs){
        super(props)
        this.state = {
            displayText:checkedVal.join(','),
            displayText1:checkedVal1.join(',')
        }
    }
    handleChange(str,value){
        console.log('22222222222222')
        console.log("value:",value,'str:',str,'ss:')
        this.setState({
            [str]:value.join(',')
        },function(){
            console.log(str,'-------------',this.state[str])
            // alert(this.state[str])
        })
    }
    render(){
        return (
            <ul>
                <li>
                    <h4>Checkbox group</h4>
                    <p>1选中的值为：{this.state.displayText}</p>
                    <CheckBoxGroup options={options} labelName="name" valueName="value" value={checkedVal} onChange={this.handleChange.bind(this,'displayText')} />
                </li>
                <li>
                    <h4>Checkbox group</h4>
                    <p>2选中的值为：{this.state.displayText1}</p>
                    <CheckBoxGroup value={checkedVal1} onChange={this.handleChange.bind(this,'displayText1')} >
                        <CheckBox value="apple">apple</CheckBox>
                        <CheckBox value="banana">banana</CheckBox>
                        <CheckBox value="orange" disabled={true}>orange</CheckBox>
                    </CheckBoxGroup>
                </li>
            </ul>
        )
    }
}

ReactDOM.render(<CheckBoxGroupDemo/>,document.querySelector('.app'));