import React from 'react'
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
                                    onClick={(e) => onDelete(e, option.id)}
                                />
                            </React.Fragment>
                        }
                    >
                        <p>{option.text}</p>
                    </Panel>
                ))}
            </Collapse>
        : <Typography>Não há anotações!!!</Typography>
    )
}

export default Accordion
