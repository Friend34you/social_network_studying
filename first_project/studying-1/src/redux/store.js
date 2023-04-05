import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";




export let store = {

    _callSubscriber() { },

    _state: {
        profilePage: {

            postsData: [
                { message: 'It is me, guys', id: 1, likesCount: 32 },
                { message: 'today is tuesday', id: 2, likesCount: 55 },
                { message: 'I love my mom so much!', id: 3, likesCount: 3 },
                { message: 'I am really tired', id: 4, likesCount: 72 },
            ],

            newPostText: '',
        },

        dialogsPage: {

            dialogsData: [
                { name: 'Vova', id: 1, },
                { name: 'Yana', id: 2, },
                { name: 'Zhenya', id: 3, },
                { name: 'Marina', id: 4, },
                { name: 'Alexander', id: 5, },
            ],

            messagesData: [
                { message: 'Hi', id: 1, isSender: true, },
                { message: 'waasup', id: 2, isSender: false, },
                { message: 'how is your day?', id: 3, isSender: true, },
                { message: 'I am really tired', id: 4, isSender: false, },
                { message: 'Relax, fellowdgf gdahahagasahsajsh ', id: 5, isSender: true, },
            ],

            newMessageText: '',
        },

        navbar: {
            friendsData: [
                { name: 'Yana-jopa', isOnline: true, },
                { name: 'Vova-piska', isOnline: false, },
                { name: 'Luybanko', isOnline: false, },
                { name: 'Ciri', isOnline: false, },
                { name: 'Mama', isOnline: true, },
            ]
        },
    },




    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },



    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);
        this._callSubscriber(this._state);

    },


}





