export const initialState = {
    mails: [],
};

export function reducer(state, action) {
    switch (action.type) {
        case 'GET_INBOX_DATA':
            return {
                mails: action.payload
            }
        case 'GET_SEND_DATA':
            return {
                mails: action.payload
            }
        case 'GET_SPAM_DATA':
            return {
                mails: action.payload
            }
        case 'GET_TRASH_DATA':
            return {
                mails: action.payload
            }
        case 'GET_MAIL':
            return {
                mails: action.payload
            }
        default:
            return state

    }
}