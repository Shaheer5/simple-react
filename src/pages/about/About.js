import React, { useState } from "react";

const About = () => {
  const [count, setCount] = useState(0);

  const incrementTwice = () => {
    // setCount(count + 1); // Adds 1 to `count` (e.g., 0 + 1)
    // setCount(count + 1); // Again adds 1 to the same `count` (still 0 + 1)
    setCount((prevCount) => prevCount + 1); // First update: prevCount = 0 -> 1
    setCount((prevCount) => prevCount + 1);
  };

  const numbersOne = [1, 2, 3];
  const numbersTwo = [4, 5, 6];
  const numbersCombined = [[...numbersOne] + [...numbersTwo]];

  let arr2 = [...arr1, 4]

  console.log(numbersCombined);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementTwice}>Increment Twice</button>
    </div>
  );
};

export default About;
