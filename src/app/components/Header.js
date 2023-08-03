"use client";
import { useState, useEffect } from "react";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/Header.module.css";

import arrow_down from "@/app/icons/arrow-down-s-line.svg";

import terminal from "@/app/icons/terminal.svg";
import pytorch_logo from "@/app/icons/pytorch-logo.svg";
import pytorch_advanced from "@/app/icons/pytorch-advance.svg";

import book_line from "@/app/icons/book-line.svg";
import code_block from "@/app/icons/code-box-line.svg";
import walk_line from "@/app/icons/walk-line.svg";

import unity_logo from "@/app/icons/unity-logo.svg";
import football_line from "@/app/icons/football-line.svg";

import menu_icon from "@/app/icons/menu-line-2.svg";
import menu_close from "@/app/icons/menu-close.svg";

export default function Header() {
  const [menu_opened, set_menu_opened] = useState(false);

  useEffect(() => {
    console.log("Hello I was called!");
    if (menu_opened) {
      document.getElementById("body").style.position = "fixed";
    } else {
      document.getElementById("body").style.position = "unset";
    }
  }, [menu_opened]);

  return (
    <>
      <nav className={`container ${styles.nav}`} data-menu_opened={menu_opened}>
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
            <div>
              <span>Learn</span>
              <Image
                src={arrow_down}
                width={25}
                height={25}
                alt="arrow_down"
                className={styles.arrow_down}
              />
            </div>
            <div className={styles.links_content}>
              <Link href={"/learn/getting-started"}>
                <div className={styles.sublink}>
                  <Image src={terminal} width={50} height={50} alt="TERMINAL" />
                  <div style={{ marginTop: 10 }}>
                    <b>
                      <p className="m">Getting Started</p>
                    </b>
                    <p className={`s ${styles.desc}`}>
                      Kick start you AI journey by downloading and setup
                      required tools.
                    </p>
                  </div>
                </div>
              </Link>

              <Link href={"/learn/learn-pytorch"}>
                <div className={styles.sublink}>
                  <Image
                    src={pytorch_logo}
                    width={41.366}
                    height={50}
                    alt="PYTORCH_LOGO"
                  />
                  <div style={{ marginTop: 10 }}>
                    <b>
                      <p className="m">Learn PyTorch</p>
                    </b>
                    <p className={`s ${styles.desc}`}>
                      Gradually start learning PyTorch to boost your ML/Deep
                      Learning Skills.
                    </p>
                  </div>
                </div>
              </Link>

              <Link href={"/learn/pytorch-advanced"}>
                <div className={styles.sublink}>
                  <Image
                    src={pytorch_advanced}
                    width={50}
                    height={50}
                    alt="PYTORCH_ADVANCED"
                  />
                  <div style={{ marginTop: 10 }}>
                    <b>
                      <p className="m">PyTorch Advanced</p>
                    </b>
                    <p className={`s ${styles.desc}`}>
                      Become a Professional in creating ML/Deep Learning Models
                      and PyTorch Mobile.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.links}>
            <div>
              <span>Projects</span>
              <Image
                src={arrow_down}
                width={25}
                height={25}
                alt="arrow_down"
                className={styles.arrow_down}
              />
            </div>
            <div className={styles.links_content}>
              <Link href={"/projects/learning-projects"}>
                <div className={styles.sublink}>
                  <Image
                    src={book_line}
                    width={50}
                    height={50}
                    alt="BOOK_LINE"
                  />
                  <div style={{ marginTop: 10 }}>
                    <b>
                      <p className="m">Learning Projects</p>
                    </b>
                    <p className={`s ${styles.desc}`}>
                      Some beginner friendly project designed for students who
                      are learning PyTorch.
                    </p>
                  </div>
                </div>
              </Link>

              <Link href={"/projects/master-pytorch"}>
                <div className={styles.sublink}>
                  <Image
                    src={code_block}
                    width={50}
                    height={50}
                    alt="CODE_BLOCK"
                  />
                  <div style={{ marginTop: 10 }}>
                    <b>
                      <p className="m">Master PyTorch</p>
                    </b>
                    <p className={`s ${styles.desc}`}>
                      A set of projects which will help you boost your PyTorch
                      Journey.
                    </p>
                  </div>
                </div>
              </Link>

              <Link href={"/projects/simulation-projects"}>
                <div className={styles.sublink}>
                  <Image
                    src={walk_line}
                    width={50}
                    height={50}
                    alt="WALK_LINE"
                  />
                  <div style={{ marginTop: 10 }}>
                    <b>
                      <p className="m">Simulation Projects</p>
                    </b>
                    <p className={`s ${styles.desc}`}>
                      Projects involving ML Agents and reinforcement learning.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.links}>
            <div>
              <span>ML Agents</span>
              <Image
                src={arrow_down}
                width={25}
                height={25}
                alt="arrow_down"
                className={styles.arrow_down}
              />
            </div>
            <div className={styles.links_content}>
              <Link href={"/ml-agents/unity-ml-agents"}>
                <div className={styles.sublink}>
                  <Image
                    src={unity_logo}
                    width={41.5}
                    height={50.545}
                    alt="UNITY_LOGO"
                  />
                  <div style={{ marginTop: 10 }}>
                    <b>
                      <p className="m">Unity ML Agents</p>
                    </b>
                    <p className={`s ${styles.desc}`}>
                      Train and embed intelligent agents by leveraging
                      state-of-the-art deep learning technology.
                    </p>
                  </div>
                </div>
              </Link>

              <Link href={"/ml-agents/custom-environment"}>
                <div className={styles.sublink}>
                  <Image
                    src={football_line}
                    width={50}
                    height={50}
                    alt="CUSTOM_ENV"
                  />
                  <div style={{ marginTop: 10 }}>
                    <b>
                      <p className="m">Custom Environment</p>
                    </b>
                    <p className={`s ${styles.desc}`}>
                      A complete tutorial for using pre-build simulation/game
                      environments for ML Agents.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.links}>
            <Link href={"/data-collection"}>
              <span>Data Collection</span>
            </Link>
          </div>
          <div className={styles.links}>
            <Link href={"/blogs"}>
              <span>Blogs</span>
            </Link>
          </div>
        </div>
        <div
          className={styles.menu}
          style={{ cursor: "pointer" }}
          onClick={() => set_menu_opened(!menu_opened)}
        >
          {!menu_opened ? (
            <Image src={menu_icon} width={40} height={40} alt="MENU_ICON" />
          ) : (
            <Image src={menu_close} width={40} height={40} alt="MENU_CLOSE" />
          )}
        </div>
      </nav>

      {/* Mobile Menu Code */}

      {menu_opened && (
        <div className={styles.menu_content}>
          <div>
            <p className="m">
              <b>Learn</b>
            </p>
            <Link href={"/learn/getting-started"}>
              <div className={styles.sublink}>
                <Image src={terminal} width={50} height={50} alt="TERMINAL" />
                <div style={{ marginTop: 10 }}>
                  <b>
                    <p className="m">Getting Started</p>
                  </b>
                  <p className={`s ${styles.desc}`}>
                    Kick start you AI journey by downloading and setup required
                    tools.
                  </p>
                </div>
              </div>
            </Link>

            <Link href={"/learn/learn-pytorch"}>
              <div className={styles.sublink}>
                <Image
                  src={pytorch_logo}
                  width={41.366}
                  height={50}
                  alt="PYTORCH_LOGO"
                />
                <div style={{ marginTop: 10 }}>
                  <b>
                    <p className="m">Learn PyTorch</p>
                  </b>
                  <p className={`s ${styles.desc}`}>
                    Gradually start learning PyTorch to boost your ML/Deep
                    Learning Skills.
                  </p>
                </div>
              </div>
            </Link>

            <Link href={"/learn/pytorch-advanced"}>
              <div className={styles.sublink}>
                <Image
                  src={pytorch_advanced}
                  width={50}
                  height={50}
                  alt="PYTORCH_ADVANCED"
                />
                <div style={{ marginTop: 10 }}>
                  <b>
                    <p className="m">PyTorch Advanced</p>
                  </b>
                  <p className={`s ${styles.desc}`}>
                    Become a Professional in creating ML/Deep Learning Models
                    and PyTorch Mobile.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <p className="m">
              <b>Projects</b>
            </p>
            <Link href={"/projects/learning-projects"}>
              <div className={styles.sublink}>
                <Image src={book_line} width={50} height={50} alt="BOOK_LINE" />
                <div style={{ marginTop: 10 }}>
                  <b>
                    <p className="m">Learning Projects</p>
                  </b>
                  <p className={`s ${styles.desc}`}>
                    Some beginner friendly project designed for students who are
                    learning PyTorch.
                  </p>
                </div>
              </div>
            </Link>

            <Link href={"/projects/master-pytorch"}>
              <div className={styles.sublink}>
                <Image
                  src={code_block}
                  width={50}
                  height={50}
                  alt="CODE_BLOCK"
                />
                <div style={{ marginTop: 10 }}>
                  <b>
                    <p className="m">Master PyTorch</p>
                  </b>
                  <p className={`s ${styles.desc}`}>
                    A set of projects which will help you boost your PyTorch
                    Journey.
                  </p>
                </div>
              </div>
            </Link>

            <Link href={"/projects/simulation-projects"}>
              <div className={styles.sublink}>
                <Image src={walk_line} width={50} height={50} alt="WALK_LINE" />
                <div style={{ marginTop: 10 }}>
                  <b>
                    <p className="m">Simulation Projects</p>
                  </b>
                  <p className={`s ${styles.desc}`}>
                    Projects involving ML Agents and reinforcement learning.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <p className="m">
              <b>ML Agents</b>
            </p>
            <Link href={"/ml-agents/unity-ml-agents"}>
              <div className={styles.sublink}>
                <Image
                  src={unity_logo}
                  width={41.5}
                  height={50.545}
                  alt="UNITY_LOGO"
                />
                <div style={{ marginTop: 10 }}>
                  <b>
                    <p className="m">Unity ML Agents</p>
                  </b>
                  <p className={`s ${styles.desc}`}>
                    Train and embed intelligent agents by leveraging
                    state-of-the-art deep learning technology.
                  </p>
                </div>
              </div>
            </Link>

            <Link href={"/ml-agents/custom-environment"}>
              <div className={styles.sublink}>
                <Image
                  src={football_line}
                  width={50}
                  height={50}
                  alt="CUSTOM_ENV"
                />
                <div style={{ marginTop: 10 }}>
                  <b>
                    <p className="m">Custom Environment</p>
                  </b>
                  <p className={`s ${styles.desc}`}>
                    A complete tutorial for using pre-build simulation/game
                    environments for ML Agents.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link href={"/data-collection"}>
              <span>Data Collection</span>
            </Link>
          </div>

          <div>
            <Link href={"/blogs"}>
              <span>Blogs</span>
            </Link>
          </div>
        </div>
      )}

      {/* Alert/Notification Code */}

      <div
        className="container"
        style={{
          backgroundColor: "var(--secondary)",
          borderRadius: 11,
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: menu_opened ? 70 : 0,
        }}
      >
        <p className="m">This Project is currently under work.</p>
      </div>
    </>
  );
}
