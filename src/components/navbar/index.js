import React, {useState} from "react";
import "../navbar/style.scss"
import spain from "../../media/spain.png"
import uk from "../../media/united-kingdom.png"
import { Link, animateScroll as scroll } from "react-scroll"
import { useTranslation } from "react-i18next"

function Navbar() {

  const [active, setActive] = useState("nav-menu");
  const [toggleIcon, setToggleIcon] = useState("nav-toggler")
  const navToggle = () => {
      active === "nav-menu" 
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");

      toggleIcon === "nav-toggler"
      ? setToggleIcon("nav-toggler toggle")
      : setToggleIcon("nav-toggler");
  }

    const { t, i18n } = useTranslation();

    function handleClick(lang) {
      i18n.changeLanguage(lang);
    }
    return (
    <nav className="nav">
        <img onClick={()=>handleClick('spa')} src={spain}/>
        <img onClick={()=>handleClick('en')} src={uk}/>
        <ul className={active}>
          <li className="nav-item"><a className="nav-link"><Link onClick={() => scroll.scrollToTop()}>Home</Link></a></li>
          <li className="nav-item"><a className="nav-link"><Link to="about" smooth={true} duration={1000}>{t('about-me')}</Link></a></li>
          <li className="nav-item"><a className="nav-link"><Link to="skills" smooth={true} duration={1000}>{t('skills')}</Link></a></li>
          <li className="nav-item"><a className="nav-link"><Link to="projects" smooth={true} duration={1000}>{t('projects')}</Link></a></li>
          <li className="nav-item"><a className="nav-link"><Link to="contact" smooth={true} duration={1000}>{t('contact')}</Link></a></li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>   
    </nav>
    )
}

export default Navbar;