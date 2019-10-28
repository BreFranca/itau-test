import * as actions from '../actions'
import * as types from '../actions/actionTypes'
import Mock from './Mock'

describe('Annotation actions', () => {
    it('should create an action to add a annotation', () => {
        const type = 'POST'
        const annotation = {
            title: 'Título de teste',
            body: 'Anotação'
        }
        const expectedAction = {
            type: types.SAVE_ANNOTATION,
            method: type,
            annotation
        }
        
        expect(actions.saveAnnotation(type, annotation)).toEqual(expectedAction)
    })

    it('should create an action to delete a annotation', () => {
        const id = '5db71e0f643a06000449846b'
        const expectedAction = {
            type: types.DELETE_ANNOTATION,
            id
        }
    
        expect(actions.deleteAnnotation(id)).toEqual(expectedAction)
    })

    it('should create an action to load annotations', () => {
        const annotations = Mock
        const expectedAction = {
            type: types.LOAD_ANNOTATION,
            annotations
        }
    
        expect(actions.loadAnnotations(annotations)).toEqual(expectedAction)
    })
})


describe('Modal actions', () => {
    it('should an action to open modal', () => {

        const expectedAction = {
            type: types.TOGGLE_MODAL,
        }
        
        expect(actions.toggleModal()).toEqual(expectedAction)
    })

    it('should an action to open edit Modal', () => {
        const annotation = {
            id: '5db71e0f643a06000449846b',
            title: 'Título de Teste',
            body: 'Anotação de teste'
        }

        const expectedAction = {
            type: types.EDIT_MODAL,
            annotation
        }
    
        expect(actions.editToggleModal(annotation)).toEqual(expectedAction)
    })
})