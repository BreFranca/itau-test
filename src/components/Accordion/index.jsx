import React from 'react'
import {
    Collapse,
    Icon
} from 'antd'
import './_styles.scss'

const Accordion = ({ options, onEdit, onDelete }) => {
    const { Panel } = Collapse
    return (
        <Collapse accordion>
            {options && options.map((option, index) => (
                <Panel
                    header={option.title}
                    key={index}
                    extra={
                        <React.Fragment>
                            <Icon
                                type="edit"
                                onClick={onEdit}
                                className="btn_edit"
                            />
                            <Icon
                                type="delete"
                                onClick={onDelete}
                            />
                        </React.Fragment>
                    }
                >
                    <p>{option.text}</p>
                </Panel>
            ))}
        </Collapse>
    )
}

export default Accordion
