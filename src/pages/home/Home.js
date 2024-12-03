import React from "react";
import "./Home.css";
import styles from "./Home.module.css";
import Button from "../../components/button/Button";

const buttonStyles = {
  padding: "10px 20px",
  backgroundColor: "red",
  color: "white",
  border: "none",
};

const Home = () => {
  return (
    <div className="container">
      <div className={styles.hero}>
        <h1 className={styles.heading}>Home</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem mollitia, accusamus dicta accusantium hic,
          iure dolor in minus iste culpa aliquam, voluptas voluptatem dolore. Asperiores dicta sed facilis placeat nobis
          voluptates atque?
        </p>
        <Button styles={buttonStyles} target="_blank" url="https://google.com">
          Signup
        </Button>
      </div>
    </div>
  );
};

export default Home;
