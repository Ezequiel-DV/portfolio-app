import { Card, CardContent, CardActions, Button, CardMedia, makeStyles, Typography } from "@material-ui/core"
import { borderRadius } from "@material-ui/system";
import profile1 from "../images/profile1.jpeg"
import TypeWriterEffect from "react-typewriter-effect"
import pdf from "../images/EzequielDelVitto.pdf"

const About = ({ title, dark, id}) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Card className={classes.card}>
                    <CardMedia image={profile1} className={classes.media} title="picture"/>
                    <CardContent className={classes.cardcontent}>
                        <TypeWriterEffect
                            text="Ezequiel Del Vitto"
                            textStyle={{fontSize: "2rem", fontWeight: "700px", color: "tomato"}}
                            startDelay={100}
                            cursorColor="black"
                            typeSpeed={50}
                        />
                        <TypeWriterEffect
                            text="Frontend developer - Traductor público de inglés"
                            textStyle={{fontSize: "1.2rem", fontWeight: "500px"}}
                            startDelay={2000}
                            cursorColor="black"
                            typeSpeed={50}
                        />
                        <Typography variant="h6" color="textSecondary">
                        <p>¡Hola! Soy Ezequiel y estoy buscando abrirme paso en el ámbito de la programación. Mi stack tecnológico es HTML5, CSS3, Javascript y React.</p>
                        <p>Además, soy traductor público de inglés; mi experiencia abarca desde traducción de textos literarios a documentos públicos.</p>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" className={classes.pdfbutton}>
                            <a href={pdf} download>
                            Descargar CV
                            </a>
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
    },
    sectiondark: {
        background: "#333",
        color: "#fff",
    },
    sectioncontent: {
        maxWidth: "80vw",
        margin: "0 auto",
    },
    card: {
        height: "70vh",
        display: "flex",
        marginTop: theme.spacing(6),
        position: "relative"
    },
    media: {
        width: "250px",
        height: "auto",
        objectFit: "cover",
        borderRadius: "10px",
        margin: theme.spacing(5)
    },
    cardcontent: {
        marginTop: theme.spacing(2),
        "& h6": {
            marginTop: theme.spacing(6),
            [theme.breakpoints.down("sm")]: {
                display: "none"
            },
        },
    },
    pdfbutton: {
        position: "absolute",
        bottom: "4rem",
        right: "4rem",
        [theme.breakpoints.down("sm")]: {
            bottom: "2.5rem",
            right: "1rem"
        },
        backgroundColor: "tomato",
        padding: theme.spacing(3),
        "&:hover": {
            backgroundColor: "#fff",
        },
        "& a": {
            color: "fff",
            textDecoration: "none",
            fontWeight: 900,
        },
        "& a:hover": {
            color: "tomato",
        }
    }
  }))

export default About