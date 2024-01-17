import './navbar.css'

function Navbar() {
    return (
      <div className="physicalNavbar">
        <div className="Navbar">
            <div className="navLinks d-flex justify-content-center">
                <a href="#">Home</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div>
        </div>
      </div>
    );
}
  
  export default Navbar;