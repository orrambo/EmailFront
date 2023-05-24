import React, {useState} from "react";
import {Link} from "react-router-dom";
import '../styles/RegistrationPage.css'
import {Box, Button, Container, Grid, TextField} from "@mui/material";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import registration from "../registration.svg"
import {useHistory} from "react-router";

function RegistrationPage() {
    const [log, setLog] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [sur, setSur] = useState('');
    const history = useHistory()

    function Create() {
        const ob = {
            login: log,
            password: pass,
            name: name,
            surname: sur,
        }
        console.log(JSON.stringify(ob))
        fetch('http://127.0.0.1:8000/api/v1/user/signup/', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ob)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                history.push("/")
            })
            .catch(function (reason) {
                console.log(reason)
                history.push('/registration')
            })
    }

    return (
            <Box className="registration_container">
                <Grid container className="registration_box">
                    <Grid item xs={7}>
                        <Box>
                            <MailOutlineRoundedIcon className="registration_logo_svg" color="primary" sx={{ fontSize: 70 }}></MailOutlineRoundedIcon>
                        </Box>
                        <Box >
                            <div style={{fontSize:'24px',fontWeight: '700'}}>Создайте аккаунт</div>
                        </Box>
                        <Box >
                            <div style={{paddingBottom: '5%'}}>для работы с почтой</div>
                        </Box>
                        <Grid container style={{paddingBottom: '5%'}}>
                            <Grid item xs={6}>
                                <TextField
                                    onChange={(event) => setName(event.target.value)}
                                    value={name}
                                    style={{width: '85%'}} id="standard-basic" label="Имя" variant="standard" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    onChange={(event) => setSur(event.target.value)}
                                    value={sur}
                                    style={{width: '85%'}} id="standard-basic" label="Фамилия" variant="standard" />
                            </Grid>
                        </Grid>
                            <Grid style={{paddingBottom: '5%'}}>
                                <TextField
                                    onChange={(event) => setLog(event.target.value)}
                                    value={log}
                                    style={{width: '92.5%'}} id="standard-basic" label="Почта" variant="standard" />
                            </Grid>
                            <Grid style={{paddingBottom: '10%'}}>
                                <TextField
                                    onChange={(event) => setPass(event.target.value)}
                                    value={pass}
                                    style={{width: '92.5%'}} id="standard-basic" label="Пароль" variant="standard" />
                            </Grid>

                        <Grid container>
                            <Grid item xs={6}>
                                <Link to={`/`}>
                                    <Button variant="text">Войти</Button>
                                </Link>
                            </Grid>
                            <Grid item xs={6}>
                                <Button onClick={() => Create()} variant="contained">Зарегистрироваться</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={5}>
                        <img src={registration} alt=""/>
                    </Grid>
                </Grid>
            </Box>
    )
}
export default RegistrationPage;