import { LOAD_ANNOTATION, DELETE_ANNOTATION, SAVE_ANNOTATION, } from '../actions/actionTypes'

const initialState = {
	annotations: []
}

export const annotationReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_ANNOTATION:
			return {
				...state,
                annotations: action.annotations
			}
		case DELETE_ANNOTATION:
            const newAnnotations = state.annotations.filter(annotation =>
                action.id !== annotation.id
            )
			return {
				...state,
                annotations: newAnnotations
			}
		case SAVE_ANNOTATION:
			return {
				...state,
                method: action.method,
                annotations: state.annotations
			}
		default:
			return state
	}
}
