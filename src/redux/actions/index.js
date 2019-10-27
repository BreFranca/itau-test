import { TOGGLE_MODAL, EDIT_MODAL, DELETE_ANNOTATION, INSERT_ANNOTATION } from './actionTypes'

export const toggleModal = () => ({
  type: TOGGLE_MODAL
})

export const editToggleModal = annotation => ({
  type: EDIT_MODAL,
  annotation
})

export const deleteAnnotation = id => ({
  type: DELETE_ANNOTATION,
  id
})

export const insertAnnotation = annotation => ({
  type: INSERT_ANNOTATION,
  annotation
})
