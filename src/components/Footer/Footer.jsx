import ClickableLogo from "../ClickableLogo/ClickableLogo.jsx"


function Footer() {

    return(
        <footer>
        <h1>Contact Me!</h1>
        <h2>jake.rawal3@gmail.com</h2>
        <div>
            <ClickableLogo picture={"/github-mark.svg"} link={"https://github.com/Jakerpppp"} /> 
        </div>
        </footer>
    )
}

export default Footer