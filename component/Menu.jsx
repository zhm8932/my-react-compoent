const klassName = require('./util/className');
const {removeClass, hasClass, addClass, getClassList} = require('./util/dom');
const DocumentClickMixin = require('./mixin/DocumentClickMixin');

const Menu = React.createClass({
    getDefaultProps() {
        return {
            accordion: false,
            popped: false,
            horizontal: false,
            mode: 'click',
            className: '',
        };
    },
    getInitialState(){
        const {current} = this.props;
        return { current };
    },
    closeSubMenu(){},
    handleClickItem(index,disabled){
        if (disabled) return;
        const {onChange} = this.props;
        if (onChange) onChange(index);
        this.setState({
            current: index,
        }, () => this.closeSubMenu());
    },
    componentWillReceiveProps(nextProps) { //不同组件属性改变必须 每次接受 新的props时触发

        console.log("nextProps:",nextProps)
        if (nextProps.current !== this.props.current) {
            this.setState({
                current: nextProps.current
            });
        }
    },
    toggleSubMenu(index){
        let {accordion, popped, horizontal} = this.props;
        const node = ReactDOM.findDOMNode(this.refs[index]);
        const active = hasClass(node, '_active');
        if (accordion || popped || horizontal) {
            const baseNode = ReactDOM.findDOMNode(this.refs.base);
            removeClass(baseNode.querySelectorAll('.sub-menu'), '_active');
        }
        active ? removeClass(node, '_active') : addClass(node, '_active');
        return false;
    },
    formatSubMenu(node,i,{popped,accordion,mode,horizontal,current,level}){
        let {title,index,disabled,active,children} = node.props;
        let className = getClassList(node.props);
        className.push('_item','sub-menu');
        if(active) className.push('_active');
        className = className.join(' ');
        const childNode = <Menu {...children.props} disabled={disabled} mode={mode} level={level} horizontal={horizontal} accordion={accordion} popped={popped} current={current} onChange={this.handleClickItem}>
            {children.props.children}
        </Menu>
        if(mode==='hover'||horizontal){
            return <div></div>
        }
        return (
            <div className={className} key={`item-${i}`} ref={index}>
                <div className="_title _item" onClick={()=>{this.toggleSubMenu(index)}}>{title}</div>
                {childNode}
            </div>
        )

    },
    formatChild(node,i,{current}){
        const {children,disabled,index} = node.props;
        const selected = index===current;
        let className = getClassList(node.props);
        className.push('_child','_item');
        if(selected) className.push('_active');
        if(disabled) className.push('_disabled');
        className = className.join(' ');
        console.log("className:",className)
        return (
            <div className={className} key={`item-${i}`} onClick={()=>{this.handleClickItem(index,disabled)}}>{children}</div>
        )
    },
    formatMenu(children,level){
        const {popped,accordion,mode,horizontal} = this.props;
        const {current} = this.state;
        return React.Children.map(children,(item,i)=>{
            const {sub,index} = item.props;
            if(index === null ||index ===undefined){
                throw new Error('index is needed for children of menu')
            }
            return sub ? this.formatSubMenu(item,i,{popped,accordion,mode,horizontal,current,level})
                        :this.formatChild(item,i,{current})
        })
    },
    render(){
        let {children,className,style,horizontal,popped,mode,level=0} = this.props;
        level = level+1;
        className = klassName(className,`menu _menu-${level}`);
        if(popped) className +=' _popped';
        if(horizontal) className +=' _horizontal';
        if(!horizontal&&!popped) className +=' _default';

        const menuNode = (mode==='hover' && popped) || horizontal
            ?<div ref="base" style={style} className={`menu ${className} _hover`} onMouseLeave={()=>this.closeSubMenu()} >{this.formatMenu(children,level)}</div>
            :<div ref="base" style={style} className={className} >{this.formatMenu(children,level)}</div>
        return (menuNode)
    }
})

module.exports = Menu;