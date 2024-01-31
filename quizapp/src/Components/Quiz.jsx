import React from "react";

export default function Quiz() {
  return (
    <div className="qz">
      <h2>Question</h2>

      <div>
        <span>1 of 15</span>
        <h5>Which is the only mammal that can jump?</h5>
      </div>

      <div className="opts">
        <p className="opt">Dog</p>
        <p className="opt">Goat</p>
      </div>

      <div className="opts">
        <p className="opt">Elephant</p>
        <p className="opt">Lion</p>
      </div>

      <div className="btns">
        <button className="prev">Previous</button>
        <button className="nxt">Next</button>
        <button className="quit">Quit</button>
      </div>
    </div>
  );
}
