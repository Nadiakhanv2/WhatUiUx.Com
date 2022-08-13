import React , {useState} from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

// BEM --- Block Element Modifier
const Menu = () => {
  return (
  <>
    <p>
      <a href="/">Home</a>
    </p>
    <p>
      <a href="/wgpt3">What is GPT?</a>
    </p>
    <p>
      <a href="/possibility">Open AI</a>
    </p>
    <p>
      <a href="/features">Case Studies</a>
    </p>
    <p>
      <a href="/blog">Library</a>
    </p>
  </>);
}

const Navbar = (props) => {
const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3Navbar">
      <div className="gpt3NavbarLinks">
        <div className="gpt3NavbarLinksLogo">
          <img
            src={props.logo}
            alt="GPT3 Logo"
            width={93}
            className="img-fluid"
          />
        </div>
        <div className="gpt3NavbarLinksConntainer">
          <Menu />
        </div>
      </div>
      <div className="gpt3NavbarSign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3NavbarMenu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3NavbarMenuContainer scaleUpCenter">
            <div className="gpt3NavbarMenuContainerLinks">
              <Menu />
              <div className="gpt3NavbarMenuContainerLinksSign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
