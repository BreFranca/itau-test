import { TOGGLE_MODAL, EDIT_MODAL } from '../actions/actionTypes'

const initialState = {
	status: false,
	type: 'POST',
	annotation: {
		id: '',
		title: '',
		body: ''
	}
}

export const modalReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_MODAL:
			return {
				...state,
				status: !state.status,
				method: 'POST',
			}
		case EDIT_MODAL:
			return {
				...state,
				status: !state.status,
				method: 'PUT',
				annotation: action.annotation
			}
		default:
			return state
	}
}
