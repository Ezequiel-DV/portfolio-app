import { Link, Card, CardMedia, CardContent, Grid, makeStyles, Typography } from "@material-ui/core"
import picture1 from "../images/project4.png"
import picture2 from "../images/project1.png"
import picture3 from "../images/project2.png"
import { useTranslation } from "react-i18next"

const Projects = ({title, dark, id}) => {

    const { t, i18n } = useTranslation();

    function handleClick(lang) {
      i18n.changeLanguage(lang);
    }

    const projectsData = [
        {
            title: [t('projects-title1')],
            title2: [t('projects-title2')],
            image: picture1,
            link: "https://form-app-ezequiel-dv.vercel.app/",
            link2: "https://github.com/Ezequiel-DV/form-app"
    
        },
        {
            title: [t('projects-title1')],
            title2: [t('projects-title2')],
            image: picture2,
            link: "https://catalog-app-six.vercel.app/",
            link2: "https://github.com/Ezequiel-DV/catalog-app"
        },
        {
            title: [t('projects-title1')],
            title2: [t('projects-title2')],
            image: picture3,
            link: "https://task-app-omega.vercel.app/",
            link2: "https://github.com/Ezequiel-DV/task-app"
        },
    ];


    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Grid container className={classes.grid}>
                    {
                        projectsData.map(({title, title2, image, link, link2}, index)=>(
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia image={image} className={classes.caratula}/>
                                    <CardContent className={classes.titulos}>
                                        <Link href={link} color="primary" target="_blank" rel="noopener noreferrer">
                                            {title}
                                        </Link>
                                        <Link href={link2} color="primary" target="_blank" rel="noopener noreferrer">
                                            {title2}
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
    grid: {
        marginTop: theme.spacing(10),
    },
    card: {
        maxWidth: 345,
        minHeight: 275,
        margin: theme.spacing(3),
    },
    titulos: {
        display: "flex",
        flexDirection: "column"
    },
    caratula: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
  }))

export default Projects