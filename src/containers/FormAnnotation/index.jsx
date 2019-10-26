import React from 'react'
import {
    Input,
    Typography,
    Button,
    Modal
} from 'antd'
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
        const { visible } = this.state

        return (
            <React.Fragment>
                <Modal
                    title="Nova Anotação"
                    visible={visible}
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

export default FormAnnotation
