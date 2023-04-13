import React, { useState } from "react";

export default function Word_counter() {
  const [Counter, setCounter] = useState({
    words: 0,
    letters: 0,
    paragraphs: 0,
  });
  // lấy dữ liệu từ textarea
  const handleChange = (e) => {
    const dataText = e.target.value;
    console.log(dataText);
    //ddodj daif nguwoif dungf nhaapj vaof
    const words = dataText.split(/\s+/).length;
    const letters = dataText.replace(/[^a-z]/gi, "").length;
    const paragraphs = dataText.split(/\n\n+/).length;

    setCounter({ words, letters, paragraphs });
  };

  const handleUppercase = () => {
    const inText = document.querySelector("textarea").value;
    document.querySelector("textarea").value = inText.toUpperCase();
  };

  const handleLowercase = () => {
    const inText = document.querySelector("textarea").value;
    document.querySelector("textarea").value = inText.toLowerCase();
  };

  return (
    <div className="container">
      <h2>Word Counter</h2>
      <div className="sivebar">
        <h4>
          Word:<br></br>
          {Counter.words}
        </h4>
        <h4>
          Letter:<br></br>
          {Counter.letters}
        </h4>
        <h4>
          Paragraph:<br></br>
          {Counter.paragraphs}
        </h4>
      </div>

      <div className="table">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={handleChange}
          placeholder="enter/paste your text here"
        ></textarea>
      </div>
      <div className="bottom">
        <button onClick={handleUppercase}>Click to Uppercase</button>
        <button onClick={handleLowercase}>Click to Lowercase</button>
      </div>
    </div>
  );
}
