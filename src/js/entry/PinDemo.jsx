import {Pin} from '../index';

export default class PinDemo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="pin-demo">
                <h3>Pin</h3>
                <ul>
                    <li>
                        <h4>Default</h4>
                        <Pin>
                            <div className='card'>
                                <h4>title</h4>
                                <p>pin at top</p>
                            </div>
                        </Pin>
                    </li>
                    <li>
                        <h4>Default</h4>
                        <Pin top={100}>
                            <div className='card'>
                                <h4>title</h4>
                                <p>pin at top</p>
                            </div>
                        </Pin>
                    </li>
                    <li>
                        <h4>Scroll to given top</h4>
                        <Pin begin={800}>
                            <div className="card last">
                                <h4>title</h4>
                                <p>pin when scroll to 800px</p>
                            </div>
                        </Pin>
                    </li>
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<PinDemo/>,document.querySelector('.app'))