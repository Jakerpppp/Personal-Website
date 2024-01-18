import ClickableLogo from "../ClickableLogo/ClickableLogo.jsx"
import './Footer.css'


function Footer() {

    return(
        <footer className="footer-container">
        <h1>Contact Me!</h1>
        <h2>jake.rawal3@gmail.com</h2>
        <div>
            <ClickableLogo picture={"/github-mark-white.png"} link={"https://github.com/Jakerpppp"} /> 
            <ClickableLogo picture={"/LI-In-Bug.png"} link={"https://www.linkedin.com/in/jake-rawal-b67ba2260"} />
        </div>
        </footer>
    )
}

export default Footer