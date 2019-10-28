import { modalReducer } from './modalReducer'
import { annotationReducer } from './annotationReducer'
import { combineReducers } from 'redux'

export const Reducers = combineReducers({
	modal: modalReducer,
	annotations: annotationReducer
})
