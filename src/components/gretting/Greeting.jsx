import styles from "./Greeting.module.css";
import React from "react";

export function Greeting({ name }) {
  return (
    <>
      <h2 className={styles.subtitle}> Welcome, {name} </h2>
      <p> Build apps with Web Starter Kit </p>
    </>
  );
}
