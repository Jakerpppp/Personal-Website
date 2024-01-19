import './projects.css'
import Card from '../../components/Card/card'
import Modal from '../../components/Modal/modal'

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
        <Modal/>
        </>
    )
}

export default Projects
