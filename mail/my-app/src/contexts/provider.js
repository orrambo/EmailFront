import { useEffect, useReducer } from "react";
import { MailsContext } from "./context";
import {reducer, initialState} from "./reducer"

export const MailsProvider = ({ children }) => {
  const [users, dispatch] = useReducer(reducer, initialState)

  return (
    <MailsContext.Provider value={[users, dispatch]}>
      {children}
    </MailsContext.Provider>
  );
};

export function GetInboxMails() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        const ob = {
            user_id: localStorage.getItem('user_id'),
        }
        console.log(JSON.stringify(ob))
        fetch(`http://127.0.0.1:8000/api/v1/mail/inbox/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ob)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data[0])
                dispatch({type: 'GET_INBOX_DATA', payload: data});
            })
    }, [])
    return state.mails
}

export function GetSendMails() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        const ob = {
            user_id: localStorage.getItem('user_id'),
        }
        console.log(JSON.stringify(ob))
        fetch(`http://127.0.0.1:8000/api/v1/mail/sent/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ob)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data[0])
                dispatch({type: 'GET_SEND_DATA', payload: data});
            })
    }, [])
    return state.mails
}

export function GetSpamMails() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        const ob = {
            user_id: localStorage.getItem('user_id'),
        }
        console.log(JSON.stringify(ob))
        fetch(`http://127.0.0.1:8000/api/v1/mail/junk/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ob)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data[0])
                dispatch({type: 'GET_SPAM_DATA', payload: data});
            })
    }, [])
    return state.mails
}

export function GetTrashMails() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        const ob = {
            user_id: localStorage.getItem('user_id'),
        }
        console.log(JSON.stringify(ob))
        fetch(`http://127.0.0.1:8000/api/v1/mail/trash/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ob)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data[0])
                dispatch({type: 'GET_TRASH_DATA', payload: data});
            })
    }, [])
    return state.mails
}

export function GetMail(mailId) {
  const [state, dispatch] = useReducer(reducer, initialState)
    console.log (mailId)
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/v1/mail/fetchmail/${mailId}/`)
        .then(response => response.json())
        .then(data => {
          dispatch({type: 'GET_MAIL', payload: data});
        })
  }, [])
  return state.mails
}
