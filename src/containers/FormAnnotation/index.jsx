import React from 'react'
import {
    Input,
    Modal,
    Button
} from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleModal, editToggleModal, saveAnnotation, loadAnnotations } from '../../store/actions'
import { saveAnnotations } from '../../services/api'
import { pushNotification } from '../../helpers'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import './_style.scss'

const initialState = {
    annotation: {
        id: '',
        title: '',
        body: ''
    }
}

class FormAnnotation extends React.Component {
    state = {
        annotation: {
            id: '',
            title: '',
            body: ''
        },
        loadingBtn: false
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

    handleOk = async e => {
        const { toggleModal, saveAnnotation, method, loadAnnotations } = this.props
        const { annotation } = this.state
        this.setState({
            loadingBtn: true
        })
        if (annotation.title && annotation.body ) {
            const annotations = await saveAnnotations({ type: method, saveAnnotation, annotation })
            loadAnnotations(annotations)
            this.setState(initialState)
            toggleModal()
        } else {
            pushNotification({
                type: 'error',
                message: 'Campos estão vázios',
                description: 'Por favor preencha todos os campos'
            })
        }
        this.setState({
            loadingBtn: false
        })
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
        const { annotation, loadingBtn } = this.state
        const { status } = this.props
        const { id, title, body } = annotation

        return (
            <React.Fragment>
                <Modal
                    title="Nova Anotação"
                    visible={status}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={
                        [
                        <Button key="back" onClick={this.handleCancel}>
                            Cancelar
                        </Button>,
                        <Button key="submit" type="primary" loading={loadingBtn} onClick={this.handleOk}>
                            Salvar
                        </Button>,
                        ]
                    }
                    >
                        {id && <Input className="form-inputhide" value={id} />}
                        <label>Título</label>
                        <Input
                            onChange={this.handleChange}
                            name="title"
                            className="form-title"
                            value={title}
                        />
                        <label>Anotação</label>
                        <CKEditor
                            editor={ ClassicEditor }
                            data={body}
                            config={{
                                toolbar: [
                                        'undo',
                                        'redo',
                                        '|',
                                        'heading',
                                        '|',
                                        'bold',
                                        'italic',
                                        'link',
                                        'bulletedList',
                                        'numberedList',
                                        'blockQuote'
                                    ]
                            }}
                            onInit={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            }}
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                this.setState({
                                    annotation: {
                                        ...this.state.annotation,
                                        body: data
                                    }
                                })
                            } }
                        />
                </Modal>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    status: state.modal.status,
    method: state.modal.method,
    annotation: state.modal.annotation
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ toggleModal, editToggleModal, saveAnnotation, loadAnnotations }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormAnnotation)
