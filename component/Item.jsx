
const Item = React.createClass({
    render(){
        const {children} = this.props;
        console.log("Item--children:",children)
        console.log("this.props:",this.props)
        return(
            <div {...this.props}>{children}</div>
        )
    }
});

module.exports = Item;