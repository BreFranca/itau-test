import React from 'react'
import Accordion from '.'
import Mock from './Mock'

import '../../enzyme'

import { mount } from 'enzyme'

describe('Accordion', () => {
    it('should be a instance of Accordion', () => {
        const mockFunc = jest.fn()
        const component = mount(
            <Accordion
                options={Mock}
                onEdit={mockFunc}
                onDelete={mockFunc}
            />
        )

        expect(component).toMatchSnapshot();

        expect(component.props().options).toEqual(Mock)

        component.unmount()
    })
})