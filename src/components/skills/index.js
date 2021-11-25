import { Link, Card, CardMedia, CardContent, Grid, makeStyles, Typography } from "@material-ui/core"
import cert1 from "../images/cert1.jpg"
import cert2 from "../images/cert2.jpg"
import cert3 from "../images/cert3.jpg"
import cert4 from "../images/cert4.jpg"
import { useTranslation } from "react-i18next"

const Projects = ({title, dark, id}) => {

    const { t, i18n } = useTranslation();

    function handleClick(lang) {
      i18n.changeLanguage(lang);
    }

    const skillsData = [
        {
            title: [t('diploma1')],
            image: cert1,
            link: "https://i.ibb.co/bdrNv3G/cert1.jpg",
    
        },
        {
            title: [t('diploma2')],
            image: cert2,
            link: "https://i.ibb.co/16vqNHV/cert2.jpg",
        },
        {
            title: [t('diploma3')],
            image: cert3,
            link: "https://i.ibb.co/z8F6VRy/cert3.jpg",
        },
        {
            title: [t('diploma4')],
            image: cert4,
            link: "https://i.ibb.co/J2nbNd7/cert4.jpg",
        },
    
    ];

    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Grid container className={classes.griddiploma}>
                    {
                        skillsData.map(({title, image, link}, index)=>(
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card className={classes.carddiploma}>
                                    <CardMedia image={image} className={classes.diploma}/>
                                    <CardContent className={classes.titulodiploma}>
                                        <Link href={link} color="primary" target="_blank" rel="noopener noreferrer">
                                            {title}
                                        </Link>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
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
        maxWidth: "90vw",
        margin: "0 auto",
        padding: theme.spacing(5),
    },
    griddiploma: {
        marginTop: theme.spacing(10),
    },
    carddiploma: {
        maxWidth: 345,
        minHeight: 275,
        margin: theme.spacing(3),
    },
    titulosdiploma: {
        display: "flex",
        flexDirection: "column",
    },
    diploma: {
        height: 0,
        paddingTop: '56.25%', // 16:9,
    }
  }))

export default Projects