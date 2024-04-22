import logo from "../../public/logo.png";
export const Header = () => {
  return (
    <div className="conatiner">
      <div className="header">
        <img className="logo" src={logo}></img>
        <li className="header-items">
          <ul>About</ul>
          <ul>Cart</ul>
          <ul className="contact">Contact Us</ul>
        </li>
      </div>
    </div>
  );
};
