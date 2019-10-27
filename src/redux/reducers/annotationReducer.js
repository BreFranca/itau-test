import { DELETE_ANNOTATION, SAVE_ANNOTATION } from '../actions/actionTypes'

const initialState = {
	annotations: [
        {
            id: 'dasasjd8asdasd9jdasd8ad',
            title: 'Anotação 1',
            text: 'Texto 1'
        },
        {
            id: 'asd8ad8sajd8asmd8asjd8ajsd',
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
				status: !state.status,
                annotations: newAnnotations
			}
		case SAVE_ANNOTATION:
            state.annotations.push(action.annotation)
			return {
				...state,
                method: action.method,
				status: !state.status,
                annotations: state.annotations
			}
		default:
			return state
	}
}
