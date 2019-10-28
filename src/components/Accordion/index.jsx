import React from 'react'
import PropTypes from 'prop-types'
import {
    Collapse,
    Icon,
    Typography
} from 'antd'
import './_styles.scss'

const Accordion = ({ options, onEdit, onDelete }) => {
    const { Panel } = Collapse
    return (
        options.length > 0 ?
            <Collapse accordion>
                {options && options.map((option, index) => (
                    <Panel
                        header={option.title}
                        key={index}
                        extra={
                            <React.Fragment>
                                <Icon
                                    type="edit"
                                    onClick={(e) => onEdit(e, option)}
                                    className="btn_edit"
                                />
                                <Icon
                                    type="delete"
                                    onClick={(e) => onDelete(e, option._id)}
                                />
                            </React.Fragment>
                        }
                    >
                        <div dangerouslySetInnerHTML={{__html: option.body}} />
                    </Panel>
                ))}
            </Collapse>
        : <Typography>Não há anotações!!!</Typography>
    )
}

Accordion.propTypes = {
    options: PropTypes.array.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

Accordion.defaultProps = {
    options: [],
}
export default Accordion
