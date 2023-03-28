import logoicon from "../images/Union.png";
import logoname from "../images/lendsqr.png";
import  "./body.css";


const Header = () =>{
    return(
        <>
        <header className="navbar">
        <nav className="menu-container">
  
  <input type="checkbox" aria-label="Toggle menu" />
  <span></span>
  <span></span>
  <span></span>

  
  <a href="#" className="menu-logo">
    <img src={logoicon} alt="My Awesome Website"/>
    <img src={logoname} className="logos" alt="My Awesome Website"/>
  </a>

  
  <div className="menu">
<div className="search">
<input
            
            type="text"
            placeholder="username"
          />
        <button type="submit"> submit</button>
</div>
        
      
    <ul>
      <li>
        <a href="#signup">
          Doc
        </a>
      </li>
      <li>
        <a href="#login">
          bell
        </a>
      </li>
      <li>
        <a href="">
          
        </a>
      </li>
    </ul>
  </div>
</nav>
             </header>
        </>
    );
}

export default Header;