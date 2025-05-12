import "./App.css";
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calcBmi = (e) => {
    e.preventDefault();

    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (!weightNum || !heightNum || weightNum <= 0 || heightNum <= 0) {
      alert("Please enter valid numeric values for weight and height.");
      return;
    }

    const bmiVal = ((weightNum / (heightNum * heightNum)) * 703).toFixed(1);
    setBmi(bmiVal);

    if (bmiVal < 18.5) {
      setMessage("You are underweight");
    } else if (bmiVal >= 18.5 && bmiVal < 24.9) {
      setMessage("You are healthy");
    } else {
      setMessage("You are overweight");
    }
  };

  const resetForm = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setMessage("");
  };

  return (
    <div className="container">
      <h2>💪 BMI Calculator</h2>
      <form onSubmit={calcBmi} className="form">
        <div className="input-group">
          <label htmlFor="weight">Weight (lbs)</label>
          <input
            id="weight"
            type="number"
            placeholder="Enter your weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            min="0"
            step="any"
          />
        </div>
        <div className="input-group">
          <label htmlFor="height">Height (in)</label>
          <input
            id="height"
            type="number"
            placeholder="Enter your height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            min="0"
            step="any"
          />
        </div>
        <div className="button-group">
          <button type="submit">Calculate</button>
          <button type="button" className="reset-btn" onClick={resetForm}>
            Reset
          </button>
        </div>
      </form>

      {bmi && (
        <div className="result">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
