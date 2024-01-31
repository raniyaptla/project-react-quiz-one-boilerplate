import React from "react";

export default function Result() {
  return (
    <div className="result">
      <h1>Result</h1>
      <div className="score-section">
        <h3>You need more practice!</h3>
        <h1 className="score">Your score is 20%</h1>
        <table className="flex spaced-table">
          <tbody>
            <tr>
              <td className="details">Total number of questions</td>
              <td className="number">15</td>
            </tr>
            <tr>
              <td className="details">Number of attempted questions</td>
              <td className="number">9</td>
            </tr>
            <tr>
              <td className="details">Number of correct answers</td>
              <td className="number">3</td>
            </tr>
            <tr>
              <td className="details">Number of wrong answers</td>
              <td className="number">6</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="buttons">
        <button className="play">Play Again</button>
        <button className="home">Back to home</button>
      </div>
    </div>
  );
}
