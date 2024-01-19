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
