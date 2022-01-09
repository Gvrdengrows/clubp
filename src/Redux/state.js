import dialogReducer from "./dialogReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const ADD_MESSAGE = 'ADD-MESSAGE'
let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, text: 'Datebayo', like: 12 },
                { id: 2, text: 'zero two is best waifu im right guys???', like: 32 },
                { id: 3, text: 'lol what im doing here', like: 12 }
            ],
            newPostText: ''
        },
        dialogPage: {
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
        },
        sideBar: [
            { id: 1, name: 'Andrey' },
            { id: 2, name: 'Sanek' },
            { id: 3, name: 'Felix' }
        ]


    },
    _callSubscriber() { },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)

        this._callSubscriber(this._state)
    }

}

export default store;
let windowStore = store;