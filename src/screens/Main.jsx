import React from 'react'
import { List, FormAnnotation } from '../containers'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAnnotations } from '../services/api'
import { toggleModal, loadAnnotations } from '../redux/actions'
import {
    Spin,
    Row,
    Col,
    Button,
    Typography
} from 'antd'

class Main extends React.Component {
    state = {
        loadingAPI: false
    }

    async componentDidMount () {
        const { loadAnnotations } = this.props
        this.setState({
            loadingAPI: true
        })
        const annotations = await getAnnotations()
        loadAnnotations(annotations)
        this.setState({
            loadingAPI: false
        })
    }

    render () {
        const { Title } = Typography
        const { loadingAPI } = this.state
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
                    <Spin
                        tip="Loading..."
                        delay={800}
                        spinning={loadingAPI}
                    >
                        <List options={annotations} />
                    </Spin>
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
	bindActionCreators({ toggleModal, loadAnnotations }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)
