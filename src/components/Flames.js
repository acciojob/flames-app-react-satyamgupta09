import React, { useState } from "react";

export default function FlamesGame() {
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

    let commonCount = 0;
    let sArr = s.split("");
    let qArr = q.split("");

    // Count common characters
    sArr.forEach((char, index) => {
      const commonIndex = qArr.indexOf(char);
      if (commonIndex !== -1) {
        commonCount++;
        qArr.splice(commonIndex, 1);
      }
    });
    let remainingLength = s.length + q.length - commonCount * 2;
    let result = remainingLength % 6;

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
    <div>
      // <input
      //   data-testid="input1"
      //   name="name1"
      //   type="text"
      //   placeholder="Enter first name"
      //   value={firstName}
      //   onChange={(e) => setFirstName(e.target.value)}
      // />
      // <input
      //   data-testid="input2"
      //   name="name2"
      //   type="text"
      //   placeholder="Enter second name"
      //   value={secondName}
      //   onChange={(e) => setSecondName(e.target.value)}
      // />
      // <button
      //   data-testid="calculate_relationship"
      //   name="calculate_relationship"
      //   onClick={handleClick}
      // >
      //   Calculate Relationship Future
      // </button>
      // <button data-testid="clear" name="clear" onClick={handleClear}>
      //   Clear
      // </button>
      // <h3 data-testid="answer">{relationShipStatus}</h3>
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
