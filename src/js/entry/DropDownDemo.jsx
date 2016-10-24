import {DropDown} from '../index';
import $ from 'jquery';

const options = [
    {name: 'apple', value: 1},
    {name: 'banana', value: 2},
    {name: 'cat', value: 3, disabled: true},
    {name: 'dog', value: 4},
    {name: 'egg', value: 5},
];

class DropDownDemo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:null,
            value1:5,
            value2:''
        }
    }
    displayChange(stat,value){
        console.log("stat:",stat,"--value:",value)
        this.setState({
            [stat]:value
        })
    }
    render(){
        return(
            <ul style={{width:'280px'}}>
                <li>
                    <h4>Default DropDown</h4>
                    <DropDown onChange={this.displayChange.bind(this,'value')} options={options}/>
                </li>
                <li>
                    <h4>Dropdown with default selected</h4>
                    <DropDown onChange={this.displayChange.bind(this,'value')} options={options} defaultSelected={true}/>
                </li>
                <li>
                    <h4>Dropdown received value</h4>
                    <DropDown onChange={this.displayChange.bind(this,'value1')} value={this.state.value1}  options={options} defaultSelected={true}/>
                </li>
                <li>
                    <h4>Dropdown with search field</h4>
                    <DropDown onChange={this.displayChange.bind(this,'value2')} options={options} searchable={true}/>
                </li>

            </ul>
        )
    }
}

ReactDOM.render(<DropDownDemo/>,document.querySelector('.app'))