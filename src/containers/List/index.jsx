import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editToggleModal, toggleModal, loadAnnotations } from '../../store/actions'
import { Modal } from 'antd'
import { Accordion } from '../../components'
import { deleteAnnotations } from '../../services/api'

class List extends React.Component {

    handleDelete = (event, id) => {
        event.stopPropagation()
        const { loadAnnotations } = this.props
        const { confirm } = Modal

        confirm({
            title: 'Você tem certeza que deseja deletar essa anotação?',
            content: 'Você não está mais visualizando ela',
            async onOk() {
                const annotations = await deleteAnnotations({ id })
                loadAnnotations(annotations)
            },
            onCancel() {
                const { toggleModal } = this.props
                toggleModal()
            },
        });
    }

    handleEdit = (event, annotation) => {
        event.stopPropagation()
        const { editToggleModal } = this.props
        editToggleModal(annotation)
    }

    render () {
        return(
            <Accordion
                {...this.state}
                {...this.props}
                onEdit={this.handleEdit}
                onDelete={this.handleDelete}
            />
        )
    }
}

const mapStateToProps = state => ({
    status: state.modal.status
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ editToggleModal, toggleModal, loadAnnotations }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(List)
