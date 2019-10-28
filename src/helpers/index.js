import { notification, Modal } from 'antd'

export const dec2hex = (dec) => {
    return ('0' + dec.toString(16)).substr(-2)
}
  
export const randomId = (len) => {
    var arr = new Uint8Array((len || 40) / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, dec2hex).join('')
}

export const pushNotification = ({ type = 'success', message, description }) => {
    notification[type]({
      message,
      description,
    });
}

export const pushModal = ({ type = 'success', title, content }) => {
    return Modal[type]({
        title,
        content,
    })
}
