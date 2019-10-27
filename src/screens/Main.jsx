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
    changeState = state => {
        this.setState({
            state
        })
    }

    render () {
        const { Title } = Typography
		const { toggleModal, annotations, annotation } = this.props

        return(
            <Row type="flex" justify="center">
                <Col span={8}>
                    <Title align="center">Anotações</Title>
                    <Button
                        type="primary"
                        block
                        onClick={() => toggleModal(true)}
                        style={{ marginBottom: 20 }}
                    >
                        Nova Anotação
                    </Button>
                    <List options={annotations} />
                    <FormAnnotation annotation={annotation} />
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = store => ({
    status: store.modal.status,
    annotations: store.annotations.annotations,
	annotation: store.modal.annotation
})

const mapDispatchToProps = dispatch =>
	bindActionCreators({ toggleModal }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)
