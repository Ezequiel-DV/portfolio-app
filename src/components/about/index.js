import { Card, CardContent, CardActions, Button, CardMedia, makeStyles, Typography } from "@material-ui/core"
import { borderRadius } from "@material-ui/system";
import profile1 from "../images/profile1.jpeg"
import TypeWriterEffect from "react-typewriter-effect"
import pdf from "../images/Ezequiel-Del Vitto- CV.pdf"
import { useTranslation } from "react-i18next"

const About = ({ title, dark, id}) => {
    const { t, i18n } = useTranslation();

    function handleClick(lang) {
      i18n.changeLanguage(lang);
    }

    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{t('about-title')}</Typography>
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
                            text="Full Stack Developer - English Certified Translator"
                            textStyle={{fontSize: "1.2rem", fontWeight: "500px"}}
                            startDelay={2000}
                            cursorColor="black"
                            typeSpeed={50}
                        />
                        <Typography variant="h6" color="textSecondary">
                        <p>{t('description')}</p>
                        <p>{t('description2')}</p>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" className={classes.pdfbutton}>
                        <a href={pdf}>DOWNLOAD CV</a>
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
        [theme.breakpoints.up("sm")]: {
            bottom: "0.5rem",
            right: "0.5rem"
        },
        backgroundColor: "tomato",
        padding: theme.spacing(1),
        "&:hover": {
            backgroundColor: "#fff",
        },
        "&: ul": {
            listStyleType: "none",
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