const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    dialogData: [
        { id: 1, name: 'AnimeMan' },
        { id: 2, name: 'chera' },
        { id: 3, name: 'gigguk' },
        { id: 4, name: 'maloy' }
    ],
    messageData: [
        { id: 1, text: 'chottomatte' },
        { id: 2, text: 'ohaydsfo' },
        { id: 3, text: 'konichiva' },
        { id: 4, text: 'nokame' }
    ],
    newMessageBody: ''
}
const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messageData.push({ id: 5, text: body })
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogReducer;