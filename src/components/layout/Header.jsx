import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="div-header">
      <img
        className="logo-header"
        src="../../../public/img/planet-express-logo.png"
      ></img>
      <Link to="/">
        <button className="header-button">HOME</button>
      </Link>
      <Link to="/characters">
        <button className="header-button">PERSONAJES</button>
      </Link>
    </div>
  );
};

export default Header;
