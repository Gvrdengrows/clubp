import { renderF } from "../render";

let state = {
    profilePage: {
        postData: [
            {id: 1, text: 'Datebayo', like: 12 },
            {id: 2, text: 'zero two is best waifu im right guys???', like: 32 },
            {id: 3, text: 'lol what im doing here', like: 12 }
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
            { id: 2, text: 'ohayo' },
            { id: 3, text: 'konichiva' },
            { id: 4, text: 'nokame' }
        ]
    },
    friendList: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Sanek'},
        {id: 3, name: 'Felix'}
    ]
        

}

export let addPost = () => {
    let newPost = {
        id: 4,
        text: state.profilePage.newPostText,
        like: 0
    };
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = '';
    renderF(state);
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = (newText);
    renderF(state);
}
export default state;