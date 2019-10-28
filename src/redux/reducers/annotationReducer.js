import { DELETE_ANNOTATION, SAVE_ANNOTATION } from '../actions/actionTypes'

const initialState = {
	annotations: [
        {
            id: 'a956c83908ad246ded86ba544c384791d27cb52e',
            title: 'Anotação 1',
            text: 'Texto 1'
        },
        {
            id: '1d160a1c681ca633b6711c6fc450547e02c13dc5',
            title: 'Anotação 2',
            text: 'Texto 2'
        }
    ]
}

export const annotationReducer = (state = initialState, action) => {
	switch (action.type) {
		case DELETE_ANNOTATION:
            const newAnnotations = state.annotations.filter(annotation =>
                action.id !== annotation.id
            )
			return {
				...state,
                annotations: newAnnotations
			}
		case SAVE_ANNOTATION:
            state.annotations.push(action.annotation)
			return {
				...state,
                method: action.method,
                annotations: state.annotations
			}
		default:
			return state
	}
}
