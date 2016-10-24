import {Menu,Item} from '../index';

export default class MenuDemo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            index:'1'
        }
    }
    displayChange(index){
        this.setState({
            index: index
        });
    }
    render(){

        // console.log("this.props:",this.props)
        // let {current} = this.state;
        return (
            <div>
                <h3>Menu</h3>
                <p>you selected item index is {this.state.index}</p>
                <Menu current={this.state.index} mode="click" onChange={this.displayChange.bind(this)}>
                    <Item index='sub0' title='新闻' sub={true} active={true}>
                        <Menu className='second-menu'>
                            <Item index="0"><a href="https://www.baidu.com/" target="_blank">体育</a></Item>
                            <Item index="1"><p>经济</p></Item>
                            <Item sub={true} index="sub0_1" title={<p>文学</p>}>
                                <Menu className="third-menu">
                                    <Item index="10">
                                        <p>Third item</p>
                                    </Item>
                                    <Item index="11">
                                        <p>Third item</p>
                                    </Item>
                                </Menu>
                            </Item>
                        </Menu>
                    </Item>
                    <Item index='sub1' title='产品' sub={true}>
                        <Menu className='second-menu'>
                            <Item index="2"><p>国内产品</p></Item>
                            <Item index="3"><p>国外产品</p></Item>
                        </Menu>
                    </Item>
                </Menu>
            </div>

        )
    }
}

ReactDOM.render(<MenuDemo/>,document.querySelector('.app'))