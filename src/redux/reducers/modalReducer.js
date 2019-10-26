import { TOGGLE_MODAL } from '../actions/actionTypes'

const initialState = {
	status: false,
	annotation: {
		id: '',
		title: '',
		text: ''
	}
}

export const modalReducer = (state = initialState, action) => {
	console.log(action)
	switch (action.type) {
		case TOGGLE_MODAL:
			return {
				...state,
				status: action.status
			}
		default:
			return state
	}
}
