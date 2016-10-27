import {Pagination} from '../index';

export default class PaginationDemo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current:1
        }
    }
    handleChange(page){
        console.log("page----:",page)
        this.setState({
            current:page
        })
    }
    render(){
        return(
            <div>
                <h3>Pagination</h3>
                <ul>
                    <li>
                        <h4>Default pagination</h4>
                        <Pagination/>
                    </li>
                    <li>
                        <h4>Pagination with given current page</h4>
                        <p>now on page {this.state.current}</p>
                        <Pagination  onChange={this.handleChange.bind(this)}/>
                    </li>
                    <li>
                        <h4>Pagination with full range</h4>
                        <Pagination current="10" showRange={true} total="100"/>
                    </li>
                    <li>
                        <h4>Pagination with navigation</h4>
                        <Pagination showNav={true}/>
                    </li>
                    <li>
                        <h4>Pagination with navigation and full range</h4>
                        <Pagination showNav={true} showRange={true}/>
                    </li>
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<PaginationDemo/>,document.querySelector('.app'))