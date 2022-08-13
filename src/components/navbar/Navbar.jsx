import React from 'react'
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

// BEM --- Block Element Modifier

const Navbar = (props) => {
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
        </div>
      </div>
      <div className="gpt3NavbarSign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
    </div>
  );
}

export default Navbar
