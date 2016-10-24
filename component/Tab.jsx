const klassName = require('./util/className');
const Tab = React.createClass({
    propTypes: {
        onChange: React.PropTypes.func,
    },
    getDefaultProps() {
        return {
            className: '',
        };
    },
    getInitialState() {
        const {current} = this.props;
        console.log("current:",current)
        return {current};
    },

    handleItemClick(index){
        console.log("this.props:",this.props,"index:",index)
        this.setState({
            current:index
        })
    },
    render() {
        let {children,style,className} = this.props;
        className = klassName(className,'tab');

        console.log("children:",children,"style:",style,"className:",className);
        let tabs = [],
            contents = [];
        const {current} = this.state;

        React.Children.map(children,(node,i)=>{
            let {index,title,children} = node.props;
            console.log("children:",children,"----index:",index,"----title:",title);

            let cls = index=== current?'_item _active': '_item';
            if(!current && i===0) cls+=' _active'
            tabs.push(<span key={i} className={cls} onClick={()=>{this.handleItemClick(index)}}>{title}</span>)
            contents.push(<ul className={cls}>{children}</ul>)
        })

        return (
                <div className={className} style={style}>
                    <div className="_tab">{tabs}</div>
                    <div className="_content">{contents}</div>
                </div>
        );
    }
});

module.exports = Tab;