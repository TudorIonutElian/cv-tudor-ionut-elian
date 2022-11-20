import Navbar from "./Navbar";
import Hero from "./Hero";

function Header() {
    return (
      <div className="Header">
        <Navbar />
        <Hero />
        This is the rest of header component
      </div>
    );
  }
  
  export default Header;