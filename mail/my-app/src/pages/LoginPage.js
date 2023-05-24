import React, {useState} from 'react';
import '../styles/LoginPage.css'
import {Grid, Button, Box, Container, TextField} from "@mui/material";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import {Link} from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {useHistory} from "react-router";


export function LoginPage() {
    const history = useHistory()
    const [log, setLog] = useState('');
    const [pass, setPass] = useState('');

    function Login() {
        const ob = {
            login: log,
            password: pass,
        }
        console.log(JSON.stringify(ob))
        fetch('http://127.0.0.1:8000/api/v1/user/login/',{
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ob),
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                localStorage.setItem('user', log)
                localStorage.setItem('session', res.session);
                localStorage.setItem('user_id', res.user_id)
                document.cookie = "session_cookie="+localStorage.getItem('session');
                history.push('/inbox')
            })
            .catch(function (reason) {
                console.log(reason)
                //window.location.replace("/login")
                history.push('/')
            })
    }
    return(
            <Box className="sign_in_container">
                <Container className="sign_in_box">
                    <Grid>
                        <MailOutlineRoundedIcon className="sign_in_logo_svg" color="primary" sx={{ fontSize: 70 }}></MailOutlineRoundedIcon>
                    </Grid>
                    <Grid>
                        <div style={{fontSize:'24px',fontWeight: '700'}}>Вход</div>
                    </Grid>
                    <Grid>
                        <div style={{paddingBottom: '10%'}}> для работы с почтой</div>
                    </Grid>
                    <Grid>
                        <TextField
                            onChange={(event) => setLog(event.target.value)}
                            value={log}
                            style={{paddingBottom: '8%', width: '60%'}} id="standard-basic" label="Почта" variant="standard" />
                    </Grid>
                    <Grid>
                    <TextField
                        onChange={(event) => setPass(event.target.value)}
                        value={pass}
                        style={{paddingBottom: '10%', width: '60%'}} id="standard-basic" label="Пароль" variant="standard" />
                    </Grid>
                    <Grid container>
                        <Grid item xs={7}>
                            <Link to={`/registration`}>
                                <Button variant="text">Создать аккаунт</Button>
                            </Link>
                        </Grid>
                        <Grid item xs={5}>
                            <Button onClick={() => Login()} variant="contained">вход</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
    )
}