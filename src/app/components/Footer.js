import React from "react";
import styles from "@/app/styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ marginTop: 60 }}>
      <div className={styles.newsletter}>
        <div className="container" style={{ position: "absolute", zIndex: 10 }}>
          <h4>Subscribe to our newsletter</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}
          >
            <input placeholder="john@datawealthy.com" type="mail" />
            <button data-normal="false">Subscribe</button>
          </div>
        </div>
        <div className={styles.design}>
          <Image
            src={"/3d_design.svg"}
            alt="3D_DESIGN"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className={`container ${styles.footer}`}>
        <ul>
          <li>
            <p className="m" style={{ fontWeight: 600 }}>
              Courses
            </p>
          </li>
          <li>
            <Link href={"/learn/getting-started"}>Getting Started</Link>
          </li>
          <li>
            <Link href={"/learn/learn-pytorch"}>Learn PyTorch</Link>
          </li>
          <li>
            <Link href={"/learn/pytorch-advanced"}>PyTorch Advanced</Link>
          </li>
        </ul>
        <ul>
          <li>
            <p className="m" style={{ fontWeight: 600 }}>
              Projects
            </p>
          </li>
          <li>
            <Link href={"/projects/learning-projects"}>Learning Projects</Link>
          </li>
          <li>
            <Link href={"/projects/master-pytorch"}>
              Master PyTorch Projects
            </Link>
          </li>
          <li>
            <Link href={"/projects/simulation-projects"}>
              Simulation Projects
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <p className="m" style={{ fontWeight: 600 }}>
              ML Agents
            </p>
          </li>
          <li>
            <Link href={"/ml-agents/unity-ml-agents"}>Unity ML Agents</Link>
          </li>
          <li>
            <Link href={"/ml-agents/custom-environment"}>
              Custom Environment
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <p className="m" style={{ fontWeight: 600 }}>
              Resources
            </p>
          </li>
          <li>
            <Link href={"/data-collection"}>Data Collection</Link>
          </li>
          <li>
            <Link href={"/blogs"}>Blogs</Link>
          </li>
          <li>
            <Link href={"/instructor"}>Instructor/Author</Link>
          </li>
          <li>
            <Link href={"https://datawealthy.com/about"} target="_blank">About Us</Link>
          </li>
          <li>
            <Link href={"https://datawealthy.com/contact"} target="_blank">Contact Us</Link>
          </li>
          <li>
            <Link href={"https://github.com/datawealthy"} target="_blank">GitHub</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Image
              src={"/logo-brand.svg"}
              width={200}
              height={60.29}
              alt="Learn AI brought to you by Data Wealthy"
            />
          </li>
        </ul>
      </div>
      <hr className="container" />
      <div className="container" style={{marginBottom: 20, marginTop: 20}}>
        <p className="s">&copy; Made by <b><Link href="https://github.com/adityajideveloper">adityajideveloper</Link></b> and brought to you by <b><Link href="https://datawealthy.com">Data Wealthy</Link>.</b></p>
    </div>
    </footer>
  );
}
