import { Button, Paper, Radio, TextField, makeStyles, Typography } from "@material-ui/core"
import {purple} from "@material-ui/core/colors"
import React, { useState } from "react";

const Contact = ({title, dark, id}) => {
    const classes = useStyles();
    const [value, setValue] = useState("Mandame un mensaje")

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className={`${classes.section} ${dark && classes.section}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Paper className={classes.root}>
                    <div className={classes.titleandchoices}>
                        <Typography variant="h5">CONTÁCTAME</Typography>
                        <div className={classes.choices}>
                            <span>Mandame un mensaje</span>
                            <Radio
                                value="Mandame un mensaje"
                                checked={value === "Mandame un mensaje"}
                                color="primary"
                                onChange={handleChange}
                            />
                            <span>Pedime un presupuesto</span>
                            <Radio
                                value="Pedime un presupuesto"
                                checked={value === "Pedime un presupuesto"}
                                color="primary"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <form action="https://formspree.io/f/xpzkonaj" method="POST" className={classes.form} noValidate autoComplete="off">
                        <TextField label="name" name="fname"/>
                        <TextField label="e-mail" name="email"/>
                        {
                            value === "Pedime un presupuesto" ? (
                                <>
                                <TextField label="Tipo de proyecto"/>
                                <TextField label="Presupuesto estimado"/> 
                                </>
                            ) : null
                        }
                        <TextField label="Mensaje" name="message"/>
                        <Button variant="contained" type="submit">Enviar</Button>
                    </form>
                </Paper>   
            </div>
        </div>

    )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    sectiondark: {
        background: "#333",
        color: "#fff",
    },
    root: {
        marginTop: theme.spacing(4),
        background: "tomato",
        color: "#fff",
        fontSize: "1.2rem",
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: theme.spacing(4),
        "& button": {
            backgroundColor: "#fff",
            color: "tomato",
            fontWeight: 900,
            fontSize: "1.2rem",
            marginTop: theme.spacing(4)
        },
        "& button:hover": {
            backgroundColor: theme.palette.primary.main,
            color: "#fff"
        }
    },
    sectioncontent: {
        maxWidth: "80vw",
    },
    titleandchoices: {
        "& h5": {
            marginTop: theme.spacing(1),

        }
    },
    form: {
        display: "flex",
        flexDirection: "column",
        "& input": {
            marginBottom: theme.spacing(1)
        }
    }
  }))

export default Contact