import "../skills/style.scss"

function Skill(props) {

const { img, link } = props.data

return (
<div className="card-wrapper">
    <div className="img-container">
    <a href={link} target="_blank"><img src={img}/></a>
</div>
</div>
)
}

export default Skill