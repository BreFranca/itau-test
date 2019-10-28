import { TOGGLE_MODAL, EDIT_MODAL, LOAD_ANNOTATION, DELETE_ANNOTATION, SAVE_ANNOTATION } from './actionTypes'

export const toggleModal = () => ({
  type: TOGGLE_MODAL
})

export const editToggleModal = annotation => ({
  type: EDIT_MODAL,
  annotation
})

export const loadAnnotations = annotations => ({
  type: LOAD_ANNOTATION,
  annotations
})

export const deleteAnnotation = id => ({
  type: DELETE_ANNOTATION,
  id
})

export const saveAnnotation = (method, annotation) => ({
  type: SAVE_ANNOTATION,
  method,
  annotation
})
