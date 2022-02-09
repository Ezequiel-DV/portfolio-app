import "../projects/style.scss"
import vercelLogo from "../../media/vercel-logo.png"
import githubLogo from "../../media/github-logo.png"
import { useTranslation } from "react-i18next"

function Project(props) {

    const { t, i18n } = useTranslation();

    function handleClick(lang) {
      i18n.changeLanguage(lang);
    }

    const {title, description, img, github, deployed} = props

    return (
        <div className="project">
            <h3>{title}</h3>
            <div className="image" style={{ backgroundImage: `url(${img})`}}>
            </div>
            <div className="description">
                <p>{description}</p>
                <div className="links">
                    <a href={github} target="_blank" rel="noreferrer"><img src={githubLogo} alt="See on Github" className="icon"/></a>
                    <a href={deployed} target="_blank" rel="noreferrer"><img src={vercelLogo} alt="See on Vercel" className="icon"/></a>
                </div>
            </div>
        </div>
    )
}

export default Project;