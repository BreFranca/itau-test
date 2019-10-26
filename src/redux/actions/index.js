import { TOGGLE_MODAL } from './actionTypes'

export const toggleModal = value => ({
  type: TOGGLE_MODAL,
  status: value
})
