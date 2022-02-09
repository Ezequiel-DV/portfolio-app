import Project from "./Project"
import "../projects/style.scss"
import project1 from "../../media/project1.png"
import project2 from "../../media/project2.png"
import project3 from "../../media/project3.png"
import { useTranslation } from "react-i18next"


function Projects() {

    const { t, i18n } = useTranslation();

    function handleClick(lang) {
      i18n.changeLanguage(lang);
    }

    const projects = [
        {
            title: [t('form-title')],
            description: [t('form-desc')],
            github: "https://github.com/Ezequiel-DV/form-app",
            deployed: "https://form-app-ezequiel-dv.vercel.app/",
            img: project1
        },
        {
            title: [t('catalog-title')],
            description: [t('catalog-desc')],
            github: "https://github.com/Ezequiel-DV/catalog-app",
            deployed: "https://catalog-app-six.vercel.app/",
            img: project2
        },
        {
            title: [t('todolist-title')],
            description: [t('todolist-desc')],
            github: "https://github.com/Ezequiel-DV/task-app",
            deployed: "https://task-app-omega.vercel.app/",
            img: project3
        }
    ]

    return (
        <div className="wrapper" id="projects">
            <h2>{t('projects')}</h2>
            <div className= "projects">
                {
                    projects.map(project => {
                        return <Project
                                title={project.title}
                                description={project.description}
                                github={project.github}
                                deployed={project.deployed}
                                img={project.img}
                                key={Math.floor(Math.random() * 100000)}/>
                    })
                }
            </div>
        </div>
    )
}

export default Projects;