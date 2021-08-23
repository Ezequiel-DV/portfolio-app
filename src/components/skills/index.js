import { Link, Card, CardMedia, CardContent, Grid, makeStyles, Typography } from "@material-ui/core"
import skillsData from "../skillsData";

const Projects = ({title, dark, id}) => {
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