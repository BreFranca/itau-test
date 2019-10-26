import React from 'react'
import { Modal } from 'antd'
import { Accordion } from '../../components'

class List extends React.Component {
    handleDelete = event => {
        event.stopPropagation()
        const { confirm } = Modal

        confirm({
            title: 'Você tem certeza que deseja deletar essa anotação?',
            content: 'Você não está mais visualizando ela',
            onOk() {
                console.log('Delete')
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    handleEdit = event => {
        event.stopPropagation()
        console.log('Edit')
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

export default List
