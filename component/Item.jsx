
const Item = React.createClass({
    render(){
        const {children} = this.props;
        console.log("Item--children:",children)
        console.log("this.props:",this.props)
        return(
            <span>item123456</span>
        )
    }
});

module.exports = Item;