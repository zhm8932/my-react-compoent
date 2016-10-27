
import {NoticeCenter} from '../index'
export default class NoticeDemo extends React.Component{
    showNotice(type = ''){
        console.log("type:",type)
        let notice = {
            title:`Notice：${type}`,
            link:'http://www.baidu.com/',
            content:<div>
                <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry.
            </div>
        }
        if(type==='delay'){

        }
        if(type==='onClick'){

        }
        if(type==='manully'){

        }
        let node = this.refs.ncNode;
        console.log("node:",node)
    }
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <h4>SHOW notice</h4>
                        <button onClick={()=>{this.showNotice('normal')}}>click</button>
                    </li>
                    <li>
                        <h4>SHOW notice</h4>
                        <button onClick={()=>{this.showNotice()}}>click</button>
                    </li>
                </ul>
                <NoticeCenter ref="ncNode"/>
            </div>
        )
    }
}

ReactDOM.render(<NoticeDemo/>,document.querySelector('.app'))