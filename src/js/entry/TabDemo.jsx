import {Tab,Item} from '../index';

export default class TabDemo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            index :'2'
        }
    }
    displayChange(index){
        // this.setState({
        //     index
        // });
    }
    formatTab({current=null,onChange=null}){
        console.log("current:",current)
        return (
            <Tab onChange={onChange} current={current} style={{'width': '350px'}}>
                <Item index='0' title='first'>
                    <h4>The first tab content</h4>
                    <p>React.js is pretty awesome</p>
                </Item>
                <Item index='1' title={'second2'}>
                    <h4>The second tab content</h4>
                    <p>Vue.js is pretty awesome</p>
                </Item>
                <Item index='2' title={<p data-id="333">third</p>}>
                    <h4>The third tab content</h4>
                    <p>Ember.js is pretty awesome</p>
                    <Tab>
                        <Item index='4' title='first'>
                            <h4>The first tab content</h4>
                            <p>React.js is pretty awesome</p>
                        </Item>
                        <Item index='5' title={'second2'}>
                            <h4>The second tab content</h4>
                            <p>Vue.js is pretty awesome</p>
                        </Item>
                        <Item index='6' title={<p data-id="333">third</p>}>
                            <h4>The third tab content</h4>
                            <p>Ember.js is pretty awesome</p>
                        </Item>
                        <Item index='7' title={<p>fourth<span>44444444</span></p>}>
                            <h4>The fourth tab content</h4>
                            <p>Angular.js is pretty awesome</p>
                            <a target='_blank' href="http://braavos.me">blog</a>
                        </Item>
                    </Tab>
                </Item>
                <Item index='3' title={<p>fourth<span>44444444</span></p>}>
                    <h4>The fourth tab content</h4>
                    <p>Angular.js is pretty awesome</p>
                    <a target='_blank' href="http://braavos.me">blog</a>
                </Item>
            </Tab>
        )
    }
    render(){
        let {current} = this.state;
        return(
            <div>
                <h3>Tab</h3>
                <p>this will change next tab</p>
                {this.formatTab({ onChange:null})}
                {this.formatTab({ current:this.state.index})}
            </div>
        )
    }
}


ReactDOM.render(<TabDemo />,document.querySelector('.app'))