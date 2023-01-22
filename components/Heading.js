import React from "react";
import styles from "../styles/Heading.module.css";

const Heading = ({ pageTitle }) => {
  return (
    <header className={styles.headingContainer}>
      <img
        className={styles.headingImage}
        src="/heading-img.png"
        alt="Heading"
      />
      <h1 className={styles.pageTitle}>{pageTitle}</h1>
    </header>
  );
};

export default Heading;
