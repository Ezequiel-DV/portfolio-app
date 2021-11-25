import { createMuiTheme, MuiThemeProvider, makeStyles } from "@material-ui/core"
import { green, purple } from "@material-ui/core/colors"
import Navbar from "./components/navbar"
import About from "./components/about"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Contact from "./components/contact"
import { useTranslation } from "react-i18next"

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] },
    secondary: {main: "#333"}
  }
})

function App() {

  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar/>
      <About title={t('about-title')} id="about" dark={true}/>
      <Skills title={t('skills')} id="skills" dark={false}/>
      <Projects title={t('projects')} id="projects" dark={true}/>
      <Contact title={t('contact')} id="contact" dark={false}/>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
  
  }
}))

export default App;
