import React, { useState } from "react";
// import "../styles/App.css";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [relationShipStatus, setRelationShipStatus] = useState("");

  const handleClick = () => {
    if (!firstName || !secondName) {
      setRelationShipStatus("Please Enter valid input");
      return;
    }

    let s = firstName;
    let q = secondName;

    // Step 1: Count common characters between both names
    let commonCount = 0;
    let sArr = s.split("");
    let qArr = q.split("");

    // Count common characters
    sArr.forEach((char) => {
      const commonIndex = qArr.indexOf(char);
      if (commonIndex !== -1) {
        commonCount++;
        qArr.splice(commonIndex, 1);
      }
    });

    // Step 2: Calculate remaining length after subtracting common characters
    let remainingLength = s.length + q.length - commonCount * 2;
    let result = remainingLength % 6;

    // Step 3: Determine relationship status
    switch (result) {
      case 0:
        setRelationShipStatus("Siblings");
        break;
      case 1:
        setRelationShipStatus("Friends");
        break;
      case 2:
        setRelationShipStatus("Love");
        break;
      case 3:
        setRelationShipStatus("Affection");
        break;
      case 4:
        setRelationShipStatus("Marriage");
        break;
      case 5:
        setRelationShipStatus("Enemy");
        break;
      default:
        setRelationShipStatus("Invalid Result");
    }
  };

  const handleClear = () => {
    setFirstName("");
    setSecondName("");
    setRelationShipStatus("");
  };

  return (
    <div id="main">
      <h1>Flames App</h1>
      <input
        data-testid="input1"
        name="name1"
        type="text"
        placeholder="Enter first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        data-testid="input2"
        name="name2"
        type="text"
        placeholder="Enter second name"
        value={secondName}
        onChange={(e) => setSecondName(e.target.value)}
      />
      <button
        data-testid="calculate_relationship"
        name="calculate_relationship"
        onClick={handleClick}
      >
        Calculate Relationship Future
      </button>
      <button data-testid="clear" name="clear" onClick={handleClear}>
        Clear
      </button>
      <h3 data-testid="answer">{relationShipStatus}</h3>
    </div>
  );
}
