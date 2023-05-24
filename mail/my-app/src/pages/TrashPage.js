import React, {useEffect, useReducer, useState} from "react";
import '../styles/InboxPage.css'
import {Button, Box, Grid, TextField, Modal} from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import {GetTrashMails} from "../contexts/provider";

function TrashPage(){

    const [subj, setSubj] = useState('');
    const [recip, setRecip] = useState('');
    const [body, setBody] = useState('');

    function SendMail() {

        const ob = {
            subject: subj,
            sender: localStorage.getItem('user'),
            recipient: recip,
            body: body,
            owner: localStorage.getItem('user_id'),
        }
        console.log(JSON.stringify(ob))
        fetch('http://127.0.0.1:8000/api/v1/mail/sendmail/', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ob)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
            .catch(function (reason) {
                console.log(reason)
            })
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <Grid container className="start_page_container">
            <Grid item xs={2}>
                <Box className="start_page_context_box">
                    <Box className="write_button_container">
                        <Button onClick={handleOpen} sx={{padding:'10px 15px 10px 15px'}} variant="contained">Написать</Button>
                    </Box>
                    <Box className="context_container">
                        <Link className="context_row" to={'/inbox'}>
                            <InboxIcon className="context_icon"></InboxIcon>
                            <div className="context_text" >Входящие</div>
                        </Link>
                        <Link className="context_row" to={'/send'}>
                            <SendIcon className="context_icon"></SendIcon>
                            <div className="context_text">Отправленные</div>
                        </Link>
                        <Link className="context_row" to={'/spam'}>
                            <RemoveCircleIcon className="context_icon"></RemoveCircleIcon>
                            <div className="context_text">Спам</div>
                        </Link>
                        <Link className="highlighted_context_row" to={'/trash'}>
                            <DeleteIcon className="context_icon"></DeleteIcon>
                            <div className="context_text">Корзина</div>
                        </Link>
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={10}>
                <Box className="start_page_mail_grid">
                    <Box className="start_page_mail_header"></Box>
                    <hr style={{margin:'0'}}/>
                    <Box className="start_page_mail_box">
                        {GetTrashMails().map(mails =>
                            <div key = {mails.id}>
                                <Link style={{textDecorationLine:'none', color:'#000000'}} to={`/mail/${mails.id}`}>
                                    <Grid container className="start_page_mail">
                                        <Grid item xs={3} className="start_page_mail_sender_container">
                                            <Box>{mails.sender}</Box>
                                        </Grid>
                                        <Grid item xs={3} className="start_page_mail_header_container">
                                            <Box>{mails.subject}</Box>
                                        </Grid>
                                        <Grid item xs={5} className="start_page_mail_text_container">
                                            <Box>{mails.body}</Box>
                                        </Grid>
                                        <Grid item xs={1} className="start_page_mail_date_container">
                                            <Box>{mails.date.substr(11, 8 )} {mails.date.split('T')[0]}</Box>
                                        </Grid>
                                    </Grid>
                                </Link>
                                <hr style={{margin:'0'}}/>
                            </div>
                        )}
                    </Box>
                </Box>
            </Grid>


            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modal_message_box">
                    <Grid className="modal_message_grid" container>
                        <Grid item xs={6} className="modal_message_text_container">
                            <Box className="modal_message_text">Новое сообщение</Box>
                        </Grid>
                        <Grid item xs={6} className="modal_message_cross_container">
                            <Button onClick={handleClose}  >
                                <CloseIcon className="modal_message_cross_svg"></CloseIcon>
                            </Button>
                        </Grid>
                    </Grid>
                    <Box className="modal_message_box_container">
                        <Box className="fields_container">
                            <Box className="recipient_field">
                                <TextField
                                    onChange={(event) => setRecip(event.target.value)}
                                    value={recip}
                                    style={{width:'100%'}} id="standard-basic" label="Кому" variant="standard" />
                            </Box>
                            <Box className="subject_field">
                                <TextField
                                    onChange={(event) => setSubj(event.target.value)}
                                    value={subj}
                                    style={{width:'100%'}} id="standard-basic" label="Тема" variant="standard" />
                            </Box>
                        </Box>
                        <Box className="text_input">
                                <textarea onChange={(event) => setBody(event.target.value)}
                                          value={body}
                                          style={{border:'none', outline:'none', width:'100%', height:'100%', resize: 'none'}} type="text"></textarea>
                        </Box>
                        <Link className="modal_message_button_container" to={`/inbox`} onClick={handleClose}>
                            <Button onClick={() => SendMail()} variant="contained" className="modal_message_button">Отправить</Button>
                        </Link>
                    </Box>
                </Box>
            </Modal>
        </Grid>
    )
}
export default TrashPage