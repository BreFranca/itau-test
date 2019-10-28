import axios from 'axios'
import { pushModal } from '../helpers'

let API_URL = process.env.REACT_APP_API_URL

const ERR_MSG_API = 'Erro ao carregar API'

export const getAnnotations = async () => {
    try {
        const response = await axios.get(`${API_URL}/annotations`)
            .then(result => {
                const { data } = result
                return data
            })
        return response
    } catch (e) {
        pushModal({
            type: 'error',
            title: ERR_MSG_API,
            content: e.message
        })
        return {
            annotations: [],
            loadingAPI: false
        }
    }
}

export const saveAnnotations = async ({ type, annotation }) => {
    if (type === 'PUT') {
        const { _id } = annotation
        const response = await axios.put(`${API_URL}/annotations/${_id}`, annotation)
            .then(async result => {
                const annotations = await getAnnotations()
                pushModal({
                    title: 'Anotação atualizada com sucesso!',
                    content: 'Sucesso'
                })
                return annotations
            })
            .catch(async e => {
                const annotations = await getAnnotations()
                pushModal({
                    type: 'error',
                    title: ERR_MSG_API,
                    content: e.message
                })
                return annotations
            })
        return response
    } else {
        const response = await axios.post(`${API_URL}/annotations`, annotation)
            .then(async result => {
                const annotations = await getAnnotations()
                pushModal({
                    title: 'Anotação inserida com sucesso!',
                    content: 'Sucesso'
                })
                return annotations
            })
            .catch(async e => {
                const annotations = await getAnnotations()
                pushModal({
                    type: 'error',
                    title: ERR_MSG_API,
                    content: e.message
                })
                return annotations
            })
        return response
    }
}

export const deleteAnnotations = async ({ id }) => {
    const response = await axios.delete(`${API_URL}/annotations/${id}`)
    .then(async result => {
        const annotations = await getAnnotations()
        pushModal({
            title: 'Anotação excluída com sucesso!',
            content: 'Sucesso'
        })
        return annotations
    })
    .catch(async e => {
        const annotations = await getAnnotations()
        pushModal({
            type: 'error',
            title: ERR_MSG_API,
            content: e.message
        })
        return annotations
    })
    return response
}