import "../about/style.scss"
import { useTranslation } from "react-i18next"

function About() {

    const { t, i18n } = useTranslation();

    function handleClick(lang) {
      i18n.changeLanguage(lang);
    }

    return (
        <div className="about" id="about">
            <h2>{t('about-me')}</h2>
            <p>{t('about-desc1')}</p>
            <p>{t('about-desc2')}</p>
            <p>{t('about-desc3')}</p>
            <p>{t('about-desc4')}</p>
            <p>{t('about-desc5')}</p>
        </div>
    )
}

export default About