import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/app/styles/Header.module.css";
import arrow_down from "@/app/icons/arrow-down-s-line.svg";

export default function Header() {
  return (
    <>
      <nav className="container">
        <div className="nav-sec">
          <Link href="/">
            <svg
              width="60"
              height="26"
              viewBox="0 0 60 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 25.7143L10.0533 0H20.2281L30.2814 25.7143H20.066L18.2013 20.9228H12.0801L10.2154 25.7143H0ZM13.1341 14.3345H17.1068L15.1204 9.42325L13.1341 14.3345Z"
                fill="#3333FF"
              />
              <path
                d="M32.3222 25.7143V0H42.1322V25.7143H32.3222Z"
                fill="#3333FF"
              />
              <path
                d="M60 19.4754C60 22.921 57.1642 25.7143 53.666 25.7143C50.1679 25.7143 47.3321 22.921 47.3321 19.4754C47.3321 16.0297 50.1679 13.2365 53.666 13.2365C57.1642 13.2365 60 16.0297 60 19.4754Z"
                fill="#3333FF"
              />
            </svg>
          </Link>
          <div className={styles.divider}></div>
          <div className={styles.links}>
            <span>Learn</span>
            <Image src={arrow_down} width={25} height={25} alt="arrow_down" />
          </div>
          <div className={styles.links}>
            <span>Projects</span>
            <Image src={arrow_down} width={25} height={25} alt="arrow_down" />
          </div>
          <div className={styles.links}>
            <span>ML Agents</span>
            <Image src={arrow_down} width={25} height={25} alt="arrow_down" />
          </div>
          <div className={styles.links}>
            <span>Data Collection</span>
          </div>
          <div className={styles.links}>
            <span>Blogs</span>
          </div>
        </div>
      </nav>
      <div className="container" style={{backgroundColor: "var(--secondary)", borderRadius: 11, height: 50, display: "flex", justifyContent: "center", alignItems: "center"}}><p className="m">This Project is currently under work.</p></div>
    </>
  );
}
