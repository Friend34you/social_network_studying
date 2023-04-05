const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {
            name: 'Vova', id: 1, messages:
                [{message: 'Hi', id: 1, isSender: true,},
                    {message: 'waasup', id: 2, isSender: false,},
                    {message: 'how is your day?', id: 3, isSender: true,},
                    {message: 'I am really tired', id: 4, isSender: false,},
                    {message: 'Relax, fellowdgf gdahahagasahsajsh ', id: 5, isSender: true,},]
        },
        {
            name: 'Yana', id: 2, messages:
                    [{message: 'Hi', id: 1, isSender: true,},
                    {message: 'waasup', id: 2, isSender: false,},
                    {message: 'how is your day?', id: 3, isSender: true,},
                    {message: 'I am really tired', id: 4, isSender: false,},
                    {message: 'Relax, fellowdgf gdahahagasahsajsh ', id: 5, isSender: true,},]
        },
        {
            name: 'Zhenya', id: 3, messages:
                    [{message: 'Hi', id: 1, isSender: true,},
                    {message: 'waasup', id: 2, isSender: false,},
                    {message: 'how is your day?', id: 3, isSender: true,},
                    {message: 'I am really tired', id: 4, isSender: false,},
                    {message: 'Relax, fellowdgf gdahahagasahsajsh ', id: 5, isSender: true,},]
        },
        {
            name: 'Marina', id: 4, messages:
                    [{message: 'Hi', id: 1, isSender: true,},
                    {message: 'waasup', id: 2, isSender: false,},
                    {message: 'how is your day?', id: 3, isSender: true,},
                    {message: 'I am really tired', id: 4, isSender: false,},
                    {message: 'Relax, fellowdgf gdahahagasahsajsh ', id: 5, isSender: true,},]
        },
        {
            name: 'Alexander', id: 5, messages:
                    [{message: 'Hi', id: 1, isSender: true,},
                    {message: 'waasup', id: 2, isSender: false,},
                    {message: 'how is your day?', id: 3, isSender: true,},
                    {message: 'I am really tired', id: 4, isSender: false,},
                    {message: 'Relax, fellowdgf gdahahagasahsajsh ', id: 5, isSender: true,},]
        },
    ],

    messagesData: [
        {message: 'Hi', id: 1, isSender: true,},
        {message: 'waasup', id: 2, isSender: false,},
        {message: 'how is your day?', id: 3, isSender: true,},
        {message: 'I am really tired', id: 4, isSender: false,},
        {message: 'Relax, fellowdgf gdahahagasahsajsh ', id: 5, isSender: true,},
    ],

    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (state.newMessageText !== '')
                return {
                    ...state,
                    messagesData: [...state.messagesData, {message: state.newMessageText, id: 6, isSender: true,},],
                    newMessageText: '',
                }
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText,
            }

        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE,})

export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text,})

export default dialogsReducer;
