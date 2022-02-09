import "../header/style.scss"
import cvpicture from "../../media/picturecv.jpeg"
import { useTranslation } from "react-i18next"

function Header() {

    const { t, i18n } = useTranslation();

    function handleClick(lang) {
      i18n.changeLanguage(lang);
    }

    return (
        <div className="header">
            <img src={cvpicture} alt="CVPicture" className="CVPicture"/>
            <div>
                <h1>Ezequiel Del Vitto</h1>
                <h2>{t('header-desc')}</h2>
            </div>
            <div className="circle"></div>
        </div>
    )
}

export default Header