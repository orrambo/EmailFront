import React from "react";
import '../styles/InboxPage.css'
import '../styles/MailPage.css'
import {Button, Box, Container, Grid, TextField, Modal} from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import {useParams} from "react-router";
import {GetMail} from "../contexts/provider";

function MailPage(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const params = useParams();
    const mailId = params.id;
    const mail = GetMail(mailId);

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
                        <Link className="context_row" to={'/trash'}>
                            <DeleteIcon className="context_icon"></DeleteIcon>
                            <div className="context_text">Корзина</div>
                        </Link>
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={10}>
                <Box className="mail_page_mail_grid">
                    <Box className="mail_page_mail_header">
                        <Button>
                        <InboxIcon></InboxIcon>
                        </Button>
                        <Button>
                            <SendIcon></SendIcon>
                        </Button>
                        <Button>
                            <RemoveCircleIcon></RemoveCircleIcon>
                        </Button>
                        <Button>
                            <DeleteIcon></DeleteIcon>
                        </Button>
                    </Box>
                    <hr style={{margin:'0'}}/>
                    <Box className="mail_page_box">
                        <Box className="mail_page_header_container">
                            <Box>{mail.subject}</Box>
                        </Box>
                        <hr style={{margin:'0'}}/>
                        <Box className="mail_page_sender_container">
                            <Box style={{fontWeight:'400'}}>От:</Box>
                            <Box>{mail.sender}</Box>
                        </Box>
                        <hr style={{margin:'0'}}/>
                        <Box className="mail_page_text_container">
                            <Box>{mail.body}</Box>
                        </Box>
                        <hr style={{margin:'0'}}/>
                        <Box className="mail_page_date_container">
                            <Box>{mail.date}</Box>
                        </Box>
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
                                <TextField style={{width:'100%'}} id="standard-basic" label="Кому" variant="standard" />
                            </Box>
                            <Box className="subject_field">
                                <TextField style={{width:'100%'}} id="standard-basic" label="Тема" variant="standard" />
                            </Box>
                        </Box>
                        <Box className="text_input">
                            <textarea style={{border:'none', outline:'none', width:'100%', height:'100%', resize: 'none'}} type="text"></textarea>
                        </Box>
                        <Link className="modal_message_button_container" to={`/`}>
                            <Button variant="contained" className="modal_message_button">Отправить</Button>
                        </Link>
                    </Box>
                </Box>
            </Modal>
        </Grid>
    )
}
export default MailPage