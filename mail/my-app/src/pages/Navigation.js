import React from "react"
import "../styles/InboxPage.css"
import "../styles/Navigation.css"
import {Link} from "react-router-dom";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import CloseIcon from '@mui/icons-material/Close';
import {Avatar, TextField, Grid, Button, Modal, Box, Typography} from '@mui/material';
import {useHistory} from "react-router";

function Navbar() {
    const history = useHistory()

    const unautorise = () => {

        fetch('http://127.0.0.1:8000/api/v1/user/logout/',{
            headers: {
                "Cookie": "session_cookie=" + localStorage.getItem('session')
            },
        })
            .then(res => {
                console.log(res);
                document.cookie = "session_cookie="+localStorage.getItem('session')+"; max-age=0";
                localStorage.removeItem('user_id')
                localStorage.removeItem('session')
                window.location.replace("http://127.0.0.1:3000/");
            })
            .catch(function (reason) {
                console.log(reason);
            })
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="navigation">
                <Grid container className="navigation_container">
                    <Grid item xs={2} className="navigation_logo_grid">
                        <Link className="logo_container" to={`/inbox`}>
                            <MailOutlineRoundedIcon className="logo_svg" color="primary"
                                                    sx={{fontSize: 39}}></MailOutlineRoundedIcon>
                            <div className="logo_text">Почта</div>
                        </Link>
                    </Grid>
                    <Grid item xs={8} className="navigation_search_grid">
                        {/*<TextField sx={{width: '45%'}} id="standard-basic" label="Поиск" variant="standard"/>*/}
                    </Grid>
                    <Grid item xs={2} className="navigation_avatar_grid">
                        <Button onClick={handleOpen} className="avatar_container" >
                            <Avatar  className="avatar" src="/broken-image.jpg"/>
                        </Button>
                    </Grid>
                </Grid>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modal_box">
                    <Grid className="modal_grid" container>
                        <Grid item xs={3} className="modal_avatar_container">
                            <Avatar className="modal_avatar" src="/broken-image.jpg"/>
                        </Grid>
                        <Grid item xs={6} className="modal_mail_container"> {localStorage.getItem('user')}</Grid>
                        <Grid item xs={3} className="modal_cross_container">
                            <Button onClick={handleClose}>
                                <CloseIcon className="modal_cross_svg"></CloseIcon>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid className="modal_grid_button" container>
                        <Grid item xs={6}>
                            <Link className="modal_button1_container" to={`/change_profile`}>
                            <Button variant="contained" className="modal_button1">Профиль</Button>
                            </Link>
                        </Grid>
                        <Grid item xs={6} >
                            <Link className="modal_button2_container" to={`/`}>
                            <Button onClick={unautorise} variant="contained" className="modal_button2">Выход</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}

export default Navbar;