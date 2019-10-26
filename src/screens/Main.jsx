import React from 'react'
import { List, FormAnnotation } from '../containers'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleModal } from '../redux/actions'
import {
		Row,
		Col,
		Button,
		Typography
} from 'antd'

class Main extends React.Component {
    state = {
        options: [
            {
                id: 'dasasjd8asdasd9jdasd8ad',
                title: 'Anotação 1',
                text: 'Texto 1'
            },
            {
                id: 'asd8ad8sajd8asmd8asjd8ajsd',
                title: 'Anotação 2',
                text: 'Texto 2'
            }
        ]
    }

    componentDidMount () {
        console.log("Montando Página Main")
    }

    render () {
        const { options } = this.state
        const { Title } = Typography

        return(
            <Row type="flex" justify="center">
                <Col span={8}>
                    <Title align="center">Anotações</Title>
                    <Button type="primary" block onClick={() => toggleModal(true)} className="comments-button">
                        Nova Anotação
                    </Button>
                    <List options={options} />
                    <FormAnnotation />
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = store => ({
	status: store.modal.status,
	annotation: store.modal.annotation
})

const mapDispatchToProps = dispatch =>
	bindActionCreators({ toggleModal }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)
