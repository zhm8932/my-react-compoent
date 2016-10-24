
import {RadioGroup,Radio} from "../index.jsx";
const options = [
    {'name': 'apple', 'value': 'a'},
    {'name': 'banana', 'value': 'b', disabled: true},
    {'name': 'cat', 'value': 'c'},
    {'name': 'dot', 'value': 'd'},
];

const checkVal = 'c'
export default class RadioGroupDemo extends React.Component{
    constructor(props){
        super(props)
        console.log("props:",props)
        this.state = {
            displayText:checkVal
        }
    }
    displayChange(value) {
        console.log("displayChangevalue:",value)
        this.setState({
            displayText: value
        })
    }
    render(){
        return <ul>
            <h3></h3>
            <li>
                <h4>Defult radio group</h4>
                <RadioGroup options={options}></RadioGroup>
            </li>
            <li>
                <h4>Radio group with default checked</h4>
                <RadioGroup options={options} defaultChecked={true}></RadioGroup>
            </li>
            <li>
                <h4>Radio group selected change</h4>
                <p>你选中的值是：{this.state.displayText}</p>
                <RadioGroup options={options} value={checkVal} onChange={this.displayChange.bind(this)}></RadioGroup>
            </li>
            <li>
                <h4>Radio group with children</h4>
                <RadioGroup value={checkVal}>
                    <Radio value='a'>apple</Radio>
                    <Radio value='b' checked={true}>banana</Radio>
                    <Radio value='c' checked={true}>cat</Radio>
                    <Radio value='d' disabled={true}>dot</Radio>
                </RadioGroup>
            </li>
        </ul>
    }
}

ReactDOM.render(<RadioGroupDemo/>,document.querySelector('.app'));