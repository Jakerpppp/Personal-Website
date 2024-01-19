import './projects.css'
import Card from '../../components/Card/card'

function Projects() {

    return (
        <>
        <div style={{ marginTop: '100px' }}>
            <Card 
                image={"github-mark-white.png"} 
                title={"Test"} 
                description={"Hello there"}/>
            <Card />
            <Card />
            <Card />
        </div>
        </>
    )
}

export default Projects

{/* <div class="card">
        <img src={image} alt="Card Image" class="card-image"/>
        <div class="card-content">
        <h2 class="card-title">{title}</h2>
        <p class="card-description">{description}</p>
        <button class="card-button">More Info!</button>
        </div>
    </div> */}
