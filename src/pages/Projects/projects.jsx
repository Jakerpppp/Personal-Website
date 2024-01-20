import './projects.css'
import Card from '../../components/Card/card'

function Projects() {

    return (
        <>
        <div style={{ marginTop: '100px' }}>
        <h1>Projects</h1>
            <Card 
                image={"github-mark-white.png"} 
                title={"Project Showcase Website"} 
                short_description={"A Website developed in React to showcase my Coding Projects"}
                techUsed={'I used all the Tech in the entire world'}






                />
            <Card />
            <Card />
            <Card />
        </div>
        </>
    )
}

export default Projects
