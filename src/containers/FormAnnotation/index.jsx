import React from 'react'
import {
    Input,
    Modal
} from 'antd'
import { connect } from 'react-redux'
import './_style.scss'

class FormAnnotation extends React.Component {
    state = {
        visible: false
    }

    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
    };
    
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render () {
        const { TextArea } = Input
        const { status } = this.props

        return (
            <React.Fragment>
                <Modal
                    title="Nova Anotação"
                    visible={status}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    cancelText="Cancelar"
                    okText="Salvar"
                    >
                        <TextArea rows={8} />
                </Modal>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    status: state.modal.status,
    annotation: state.modal.annotation
})

export default connect(mapStateToProps)(FormAnnotation)
