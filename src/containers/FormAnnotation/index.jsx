import React from 'react'
import {
    Input,
    Modal
} from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editToggleModal } from '../../redux/actions'
import './_style.scss'

class FormAnnotation extends React.Component {
    state = {
        visible: false
    }

    handleOk = e => {
        const { type } = this.props
        if (type === 'PUT') {
            updateAnnotation()
        } else {
            insertAnnotation(annotation)
        }
        console.log(e);
    };
    
    handleCancel = e => {
        const { editToggleModal } = this.props
        const annotation = {
            id: '',
            title: '',
            text: ''
        }
        editToggleModal(annotation)
    };

    render () {
        const { TextArea } = Input
        const { status, annotation } = this.props
        const { id, title, text } = annotation

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
                        {id && <Input className="form-inputhide" defaultValue={id} />}
                        {title && <Input className="form-title" defaultValue={title} />}
                        <TextArea defaultValue={text} rows={8} />
                </Modal>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    status: state.modal.status,
    type: state.modal.type,
    annotation: state.modal.annotation
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ editToggleModal }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormAnnotation)
