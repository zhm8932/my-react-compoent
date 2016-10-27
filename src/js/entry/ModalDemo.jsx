import {Modal} from '../index';

export default class ModalDemo extends React.Component{
    constructor(props){
        super(props);
    }
    openModal(ref){
        const node = this.refs[ref];
        console.log("node:",node)
        node.open();
    }
    handleCancel(){
        console.log("Cancel 处理器")
        return true
    }
    handleConfirm(){
        console.log("Confirm 处理器")
        return confirm('close modal?');
    }
    handleConfirm1(){
        alert('confirmed');
        return true;
    }
    handleClose(){
        console.log("demo----handleClose")
        return confirm('close')
    }
    render(){
        const content = <article>
            <h4>this is content</h4>
            <p>默认内容</p>
            <ul>
                <li>第一行</li>
                <li>第二行</li>
            </ul>
        </article>
        return (
            <div>
                <ol>
                    <li>
                        <h3>Default modal</h3>
                        <button onClick={this.openModal.bind(this,'modal0')}>click</button>
                        <Modal ref="modal0" title={<h4>Comfirm deleted</h4>}>
                            {content}
                        </Modal>
                    </li>
                    <li>
                        <h3>Modal with confirm, cancel action</h3>
                        <button onClick={this.openModal.bind(this,'modal1')}>click</button>
                        <Modal ref="modal1" onConfirm={this.handleConfirm.bind(this)}
                               onCancel={this.handleCancel.bind(this)} confirmText="确定" cancelText="取消" closeIcon="关闭">
                            {content}
                        </Modal>
                    </li>
                    <li>
                        <h3>Modal with only confirm action</h3>
                        <button onClick={this.openModal.bind(this,'modal2')}>click</button>
                        <Modal ref="modal2" onConfirm={this.handleConfirm1.bind(this)}>
                            {content}
                        </Modal>
                    </li>
                    <li>
                        <h3>Modal with onClick</h3>
                        <button onClick={this.openModal.bind(this,'modal3')}>click</button>
                        <Modal ref="modal3" onClose={this.handleClose.bind(this)} closeIcon={<p>关闭</p>}>
                            {content}
                        </Modal>
                    </li>
                    <li>
                        <h4>Modal force to close</h4>
                        <button onClick={this.openModal.bind(this, 'modal4')}>click</button>
                        <Modal ref="modal4" force={true} onConfirm={this.handleConfirm1.bind(this)} confirmText="确定">
                            {content}
                        </Modal>
                    </li>
                </ol>
            </div>
        )
    }
}

ReactDOM.render(<ModalDemo/>,document.querySelector('.app'))