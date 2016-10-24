// import React from 'react';
import {CheckBox} from "../index.jsx";


export default class CheckBoxDemo extends React.Component{
    handleChange(e){
        console.log('changed-checked:',e.target.checked)
        // console.log('changed-type:',e.target.type)
        // console.log('changed-disabled:',e.target.disabled)
    }
    render(){
        return (
            <ul>
                <li>
                    <h4>Default checkbox</h4>
                    <CheckBox onChange={this.handleChange.bind(this)} className='check'>Default checkbox</CheckBox>
                </li>
                <li>
                    <h4>disabled checkbox</h4>
                    <CheckBox disabled={true}>Default checkbox</CheckBox>
                </li>
                <li>
                    <h4>checked checkbox</h4>
                    <CheckBox checked={true}>Default checkbox</CheckBox>
                </li>
            </ul>
        )
    }
}

ReactDOM.render(<CheckBoxDemo/>,document.querySelector('.app'))
