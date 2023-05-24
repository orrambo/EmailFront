import React from "react";
import '../styles/ChangeProfile.css'
import {Modal, Button, Box, Typography, Grid, TextField, Avatar} from "@mui/material";
import {Link} from "react-router-dom";

function ChangeProfile(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div fixed className="profile_container">
            <Box className="profile_box">
                <Grid container className="profile_grid_container">
                    <Grid className="profile_avatar_container" item xs={4}>
                        <Avatar className="profile_avatar" src="/broken-image.jpg"/>
                    </Grid>
                    <Grid item xs={7} className="profile_grid_text_field">
                        <Grid style={{paddingBottom: '5%'}}>
                            <TextField style={{width: '60%'}} id="standard-read-only-input" label="Имя" defaultValue="Hello World"
                                       InputProps={{readOnly: true,}} variant="standard" />
                        </Grid>
                        <Grid style={{paddingBottom: '5%'}}>
                            <TextField style={{width: '60%'}} id="standard-read-only-input" label="Фамилия" defaultValue="Hello World"
                                       InputProps={{readOnly: true,}} variant="standard" variant="standard" />
                        </Grid>
                        <Grid style={{paddingBottom: '5%'}}>
                            <TextField style={{width: '60%'}} id="standard-read-only-input" label="Пароль" defaultValue="Hello World"
                                       InputProps={{readOnly: true,}} variant="standard" variant="standard" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="profile_grid_button">
                    <Grid style={{width: '50%'}} item xs={6} className="profile_button_container1">
                        <Button variant="contained">Изменить данные</Button>
                    </Grid>
                    <Grid style={{width: '50%'}} item xs={6} className="profile_button_container2">
                        <Button variant="contained">Сохранить изменения</Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
export default ChangeProfile