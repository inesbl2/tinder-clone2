import logoTinder from "../images/logo-tinder.png";

function Nav() {
    return (
        <nav>
        <div className="logo-container">
          <img
            className="logo"
            src={logoTinder}
            alt="logo"
          />
        </div>
        </nav>
    );
  }
  
  export default Nav