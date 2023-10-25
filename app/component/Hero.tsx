import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={styles.heroPage}>
        <div className={styles.heroPageContainer}>
          <div className={styles.introduction}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src="coolDude.png" alt="cool" />
            </div>
            <div className={styles.nameAndStack}>
              <h1>SOKOOYA NIFEMI</h1>
              <h1>FULL STACK DEVELOPER</h1>
            </div>
          </div>
          <div>
            <div>
              <h1>Welcome</h1>
            </div>
            <div>
              <img src="pixelatedArrow.svg" alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
