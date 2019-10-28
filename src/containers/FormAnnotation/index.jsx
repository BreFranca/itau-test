import React from 'react'
import {
    Input,
    Modal
} from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleModal, editToggleModal, saveAnnotation } from '../../redux/actions'
import { randomId } from '../../services/index'
import './_style.scss'

const initialState = {
    annotation: {
        id: '',
        title: '',
        text: ''
    }
}

class FormAnnotation extends React.Component {
    state = {
        annotation: {
            id: '',
            title: '',
            text: ''
        }
    }

    componendDidMount () {
        const { annotation } = this.props
        this.setState({
            annotation
        })
    }

    componentDidUpdate (prevProps) {
        const { annotation } = this.props
        if (prevProps.annotation !== annotation)
        this.setState({
            annotation
        })
    }

    handleOk = e => {
        const { toggleModal, saveAnnotation, type } = this.props
        const { annotation } = this.state
        const id = randomId()
        if (!annotation.id) {
            annotation.id = id
        }
        saveAnnotation(type, annotation)
        this.setState(initialState)
        toggleModal()
    }
    
    handleCancel = e => {
        const { editToggleModal } = this.props
        editToggleModal(initialState.annotation)
    }

    handleChange = event => {
        const { annotation } = this.state

        this.setState({
            annotation: {
                ...annotation,
                [event.target.name]: event.target.value
            }
        })
    }

    render () {
        const { TextArea } = Input
        const { annotation } = this.state
        const { status } = this.props
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
                        {id && <Input className="form-inputhide" value={id} />}
                        <label>Title</label>
                        <Input
                            onChange={this.handleChange}
                            name="title"
                            className="form-title"
                            value={title}
                        />
                        <label>Comments</label>
                        <TextArea
                            value={text}
                            rows={8}
                            onChange={this.handleChange}
                            name="text"
                        />
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
    bindActionCreators({ toggleModal, editToggleModal, saveAnnotation }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormAnnotation)
