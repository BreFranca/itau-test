'use strict'

import { Provider } from "react-redux"
import { shallow } from 'enzyme'
import List from '.'
import configureMockStore from "redux-mock-store"
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Mock from './Mock'
import '../../enzyme'
import React from 'react'

chai.use(chaiEnzyme())

const mockStore = configureMockStore()
const store = mockStore({})
const wrapper = (
  <List options={Mock} />
)

// const mountED = mount(wrapper)
const shallowED = shallow(<Provider store={store}>{wrapper}</Provider>)

describe('List should:', () => {
  it('wrapper exists', () => {
    expect(shallowED).to.be.present()
  })

  it('have initial props', () => {
    expect(shallowED).to.have.props(2)
  })
})
