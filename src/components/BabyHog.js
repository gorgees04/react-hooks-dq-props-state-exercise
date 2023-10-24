import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({ name, hobby, eyeColor }) {
  const [weight, setWeight] = useState(1);
  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    name = e.target.name;
    if (name === "+") {
      setWeight(weight + 0.5);
    } else if (name === "-" && weight > 0) {
      setWeight(weight - 0.5);
    }
  }
  console.log(eyeColor);

  const hogBabyImg = () => {
    if (eyeColor === "sun") {
      return SunBaby;
    } else if (eyeColor === "blue") {
      return BlueBaby;
    } else if (eyeColor === "glowing") {
      return GlowingBaby;
    }
  };

  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight: {weight} Tons</h3>
      <h3>Hobby: {hobby}</h3>
      <h4>Eye Color: {eyeColor}</h4>

      <button name="+" onClick={handleChangeWeight}>
        Increase Weight
      </button>
      <button name="-" onClick={handleChangeWeight}>
        Decrease Weight
      </button>

      <div className="hb-wrap">
        <img
          src={hogBabyImg()}
          style={{ height: `${200 + weight * 10}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
