import React from 'react'

const Header = (props) => {
  return (
    <div className="gpt3Header sectionPadd">
      <div className="gpt3HeaderContent">
        <h1 className="gradientTxt">
          Let's Build Something Amazing With GPT-3 OpenAI
        </h1>
        <p>
          Yet bed only for travelling assisstance indulgence .Not thought all
          exercise blessing. Indulgence was everything joy alternation
          boisterous the attachment. Party we years to order allow asked of.
        </p>
        <div className="gpt3HeaderContentInput">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3HeaderContentPeople">
          <Image />
        </div>
      </div>
    </div>
  );
}

export default Header
