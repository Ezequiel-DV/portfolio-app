import "../skills/style.scss"
import Skill from "../skills/skill"
import html from "../../media/html.png"
import javascript from "../../media/javascript.png"
import react from "../../media/react.png"
import github from "../../media/github.png"
import mongo from "../../media/mongo.png"
import nodejs from "../../media/nodejs.png"
import expressjs from "../../media/expressjs.png"
import HTMLCert from "../../media/HTMLCertificate.pdf"
import JSCert from "../../media/JSCertificate.pdf"
import ReactCert from "../../media/ReactCertificate.pdf"
import GitCert from "../../media/GitCertificate.pdf"
import mongoCert from "../../media/MongoCertificate.pdf"
import nodeCert from "../../media/NodeCertificate.pdf"
import expressCert from "../../media/ExpressCert.pdf"
import { useTranslation } from "react-i18next"

const skillsData = [
    {
        img: html,
        link: HTMLCert
    },
    {
        img: javascript,
        link: JSCert
    },
    {
        img: react,
        link: ReactCert
    },
    {
        img: mongo,
        link: mongoCert
    },
    {
        img: nodejs,
        link: nodeCert
    },
    {
        img: expressjs,
        link: expressCert
    },
    {
        img: github,
        link: GitCert
    }
]

function Skills() {

    const { t, i18n } = useTranslation();

    function handleClick(lang) {
      i18n.changeLanguage(lang);
    }

    
    return (
    <div>
        <div className="title-container" id="skills">
        <h3>{t('skills-cert')}</h3>
        <div className="card-container">
        {skillsData.map((skill, key) => {
            return <Skill data={skill} key={key}/>
        })}
    </div>
    </div>
    </div>
    )
}

export default Skills