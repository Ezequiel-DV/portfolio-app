import { AppBar, makeStyles, Toolbar, IconButton, Drawer, Divider, ListItem, ListItemIcon } from "@material-ui/core"
import logo from "../images/LOGOEDV.png"
import logo2 from "../images/logoLinkedin.png"
import logo3 from "../images/logoGmail.png"
import { Link, animateScroll as scroll } from "react-scroll"
import { List } from "@material-ui/core"
import InfoIcon from '@material-ui/icons/Info';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import BuildIcon from '@material-ui/icons/Build';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import MenuIcon from "@material-ui/icons/Menu"
import CancelIcon from "@material-ui/icons/Cancel"
import {useState} from "react"

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)

    const links = [
        {
            id: "about",
            text: "Sobre mi",
            icon: <InfoIcon fontsize="large" className={classes.about}/>
        },
        {
            id: "skills",
            text: "Habilidades",
            icon: <EmojiObjectsIcon fontsize="large" className={classes.light}/>
        },
        {
            id: "projects",
            text: "Proyectos",
            icon: <BuildIcon fontsize="large" className={classes.projects}/>
        },
        {
            id: "contact",
            text: "Contacto",
            icon: <ContactMailIcon fontsize="large" className={classes.contact}/>
        },
    ]
    return (
        <>
        <AppBar position="sticky" className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <img src={logo} className={classes.logo} alt="Logo"/>
                <a href="https://www.linkedin.com/in/ezequiel-del-vitto/" target="_blank"><img src={logo2} className={classes.logoLink} alt="Logo"/></a>
                <a href="mailto:delvittoezequiel@gmail.com" target="_blank"><img src={logo3} className={classes.logoG} alt="Logo"/></a>
                <List className={classes.menu}>
                    {
                        links.map(({id, text}, index)=>(
                            <Link key={index} 
                            to={id} spy={true} 
                            activeClass="active" 
                            smooth={true} 
                            duration={500} 
                            offset={-70}>{text}</Link>
                        ))
                    }
                </List>
                <IconButton edge="end" 
                    className={classes.menubutton}
                    onClick={()=>setOpen(!open)}>
                    <MenuIcon fontSize="large"/>
                </IconButton>
            </Toolbar>
        </AppBar>
            <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
                <IconButton onClick={()=>setOpen(false)} className={classes.cancelicon}>
                    <CancelIcon fontSize="large"/>
                </IconButton>
                <Divider/>
                {
                        links.map(({id, text, icon}, index)=>(
                            <Link key={index} 
                            className={classes.sidebar}
                            to={id} 
                            spy={true} 
                            activeClass="active" 
                            smooth={true} 
                            duration={500} 
                            offset={-70}>
                            <ListItem component="h5">
                                <span>
                                    <ListItemIcon>
                                        {icon}
                                    </ListItemIcon>
                                </span>{text}
                            </ListItem>
                            </Link>
                        ))
                }
        </Drawer>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#fafafa",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
    },
    toolbar: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    logoG: {
        height: "2rem",
        objectFit: "contain",
        "&:hover": {
            cursor: "pointer"
        } 
    },
    logoLink: {
        height: "3rem",
        objectFit: "contain",
        "&:hover": {
            cursor: "pointer"
        } 
    },
    logo: {
        height: "2rem",
        objectFit: "contain",
        "&:hover": {
            cursor: "pointer"
        }
    },
    about: {
        color: "#34B2E8",
    },
    light: {
        color: "#ffcc00",
    },
    projects: {
        color: "#179F1D"
    },
    contact: {
        color: "#EBAE2A"
    },
    menu: {
        [theme.breakpoints.down("sm")]: {
            display:"none"
        },
        "& a": {
            color: "#333",
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginLeft: theme.spacing(3)
        },
        "& a:hover": {
            cursor: "pointer",
            color: "tomato",
            borderBottom: "3px solid tomato"
        }
    },
    menubutton: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
            color: "tomato",
            position: "absolute",
            top: 0,
            right: 10,
        }
    },
    cancelicon: {
        color: "tomato",
        position: "absolute",
        top: 0,
        right: 10,
    },
    sidebar: {
        width: "40vw",
        [theme.breakpoints.down("sm")]: {
            width: "60vw",
        },
        "& h5": {
            margin: theme.spacing(10, 0, 0, 4),
            fontSize: "1.4rem",
            color: "#333",
            fontWeight: "bold"
        },
        "& h5:hover": {
            color: "tomato",
            cursor: "pointer"
        }
    } 
  }))

export default Navbar