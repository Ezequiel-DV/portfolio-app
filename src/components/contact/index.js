import "../contact/style.scss"
import github from "../../media/github-whitelogo.png"
import linkedin from "../../media/linkedin-logo.png"
import engcv from "../../media/engcv.pdf"
import spacv from "../../media/spacv.pdf"
import { useTranslation } from "react-i18next"

function Contact() {

    const { t, i18n } = useTranslation();

    function handleClick(lang) {
      i18n.changeLanguage(lang);
    }

    return (
        <footer id="contact">
            <div className="footer-content">
                <h3>{t('contact-touch')}</h3>
                <p>{t('contact-desc')}</p>
                <ul className="socials">
                    <li><a href="https://www.github.com/Ezequiel-DV" target="_blank"><img src={github} className="icons"/></a></li>
                    <li><a href="https://www.linkedin.com/in/ezequiel-del-vitto/" target="_blank"><img src={linkedin} className="icons"/></a></li>
                </ul>
                <a href={engcv} target="_blank" className="cvs">Download English CV</a>
                <a href={spacv} target="_blank" className="cvs">Descargar CV Español</a>
            </div>
        </footer>
    )
}

export default Contact