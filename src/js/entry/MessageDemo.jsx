import {Message} from '../index';

export default class MessageDemo extends React.Component{
    handleClose(e){
        console.log("e:",e.target)
    }
    render(){
        let content = <p>this is my message</p>
        return (
            <div>
                <ul>
                    <li>
                        <h4>Default message</h4>
                        <Message content={content}>
                            <button>click</button>
                        </Message>
                    </li>
                    <li>
                        <h4>delay message</h4>
                        <Message content={content} delay="2000" position="center">
                            <button>click</button>
                        </Message>
                    </li>
                    <li>
                        <h4>delay message</h4>
                        <Message content={content} onClose={this.handleClose}>
                            <button>click</button>
                        </Message>
                    </li>
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<MessageDemo/>,document.querySelector('.app'));