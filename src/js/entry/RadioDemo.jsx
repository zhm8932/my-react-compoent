
import {Radio} from "../index.jsx";
import {name} from "../com";
console.log("name:",name)
export default class RadioDemo extends React.Component{
    handleChange(e,value){
        console.log('value:',value,'checked:',e.target.checked)
    }
    render(){
        return (
            <ul>
                <li>
                    <h4>Default Radio</h4>
                    <Radio onChange = {this.handleChange.bind(this)} value="1">radio</Radio>
                </li>
                <li>
                    <h4>Checked Radio</h4>
                    <Radio checked={true}  value="2">radio</Radio>
                </li>
                <li>
                    <h4>Checked Radio</h4>
                    <Radio disabled={true}  value="3">radio</Radio>
                </li>
            </ul>
        )
    }
}

ReactDOM.render(<RadioDemo/>,document.querySelector('.app'));