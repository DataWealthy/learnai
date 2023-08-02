import Image from "next/image";
import styles from "@/app/styles/page.module.css";
import Link from "next/link";

import terminal from "@/app/icons/terminal.svg";
import pytorch_logo from "@/app/icons/pytorch-logo.png";
import pytorch_advanced from "@/app/icons/pytorch-advance.svg";

export default function Home() {
  return (
    <>
      <div className="container hero">
        <div className="center">
          <h1 className={`title ${styles.heading}`}>
            Unleash Your{" "}
            <span style={{ color: "var(--accent)" }}>AI Journey</span>
          </h1>
          <p
            className="m"
            style={{ width: "75%", textAlign: "center", marginLeft: "12.5%" }}
          >
            Your gateway to accessible and simplified AI education, empowering
            individuals and businesses to unlock the full potential of
            artificial intelligence through inspiring and comprehensive learning
            resources.
          </p>
          <div className={styles.cta}>
            <Link href="/learn/getting-started">
              <button data-normal="false" className="large-btn">
                Get Started
              </button>
            </Link>
            <Link href="/learn/getting-started">
              <button className="large-btn">Contribute</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <h3>Courses</h3> */}
      </div>
    </>
  );
}
