import { createMuiTheme, MuiThemeProvider, makeStyles } from "@material-ui/core"
import { green, purple } from "@material-ui/core/colors"
import Navbar from "./components/navbar"
import About from "./components/about"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Contact from "./components/contact"

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] },
    secondary: {main: "#333"}
  }
})

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar/>
      <About title="Sobre mi" id="about" dark={true}/>
      <Skills title="Habilidades" id="skills" dark={false}/>
      <Projects title="Proyectos" id="projects" dark={true}/>
      <Contact title="Contacto" id="contact" dark={false}/>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
  
  }
}))

export default App;
