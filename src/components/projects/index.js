import { Link, Card, CardMedia, CardContent, Grid, makeStyles, Typography } from "@material-ui/core"
import projectsData from "../projectsData";

const Projects = ({title, dark, id}) => {
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