import styles from "@/app/styles/page.module.css";
import Link from "next/link";
import Image from "next/image";

import tick from "@/app/icons/tick.svg";
import learn from "@/app/assets/learn.jpg";
import projects from "@/app/assets/projects.jpg"
import ml_agents from "@/app/assets/ml-agents.jpg"

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
      <div className={styles.product_parent}>
        <div
          className={`container ${styles.product}`}
          style={{ backgroundImage: "url(./dot-patterns.svg)" }}
        >
          <div>
            <h3>Learn</h3>
            <div className={styles.product_info}>
              <Image src={tick} width={35} height={35} alt="TICK" />
              <p className="m">Curated courses for all skill levels</p>
            </div>
            <div className={styles.product_info}>
              <Image src={tick} width={35} height={35} alt="TICK" />
              <p className="m">Comprehensive AI learning experience</p>
            </div>
            <div className={styles.product_info}>
              <Image src={tick} width={35} height={35} alt="TICK" />
              <p className="m">Beginner-friendly introduction to AI concepts</p>
            </div>
            <div className={styles.product_info}>
              <Image src={tick} width={35} height={35} alt="TICK" />
              <p className="m">Advanced topics to elevate your expertise</p>
            </div>
            <div className={styles.product_info}>
              <Image src={tick} width={35} height={35} alt="TICK" />
              <p className="m">Accessible and user-friendly resources</p>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <figure className={styles.product_figure}
            >
              <div className={styles.black}></div>
              <Image
                src={learn}
                width={300}
                height={450}
                alt="LEARN"
              />
              <figcaption
                style={{
                  fontSize: 10,
                  color: "var(--dark-secondary)",
                  marginTop: 30,
                }}
              >
                Photograph by <b>Kelly Sikkema</b> on Unsplash
              </figcaption>
            </figure>
          </div>
        </div>
        <div
          className={`container ${styles.product}`}
        >
          <div>
            <h3>Projects</h3>
            <div className={styles.product_info}>
              <Image src={tick} width={35} height={35} alt="TICK" />
              <p className="m">Hands-on projects with real-world applications</p>
            </div>
            <div className={styles.product_info}>
              <Image src={tick} width={35} height={35} alt="TICK" />
              <p className="m">Work on image recognition, NLP, and more</p>
            </div>
            <div className={styles.product_info}>
              <Image src={tick} width={35} height={35} alt="TICK" />
              <p className="m">Collaborate with like-minded learners</p>
            </div>
            <div className={styles.product_info}>
              <Image src={tick} width={35} height={35} alt="TICK" />
              <p className="m">Develop problem-solving and teamwork skills</p>
            </div>
            <div className={styles.product_info}>
              <Image src={tick} width={35} height={35} alt="TICK" />
              <p className="m">Contribute to cutting-edge AI projects</p>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <figure className={styles.product_figure}
            >
              <div className={styles.black} style={{ backgroundImage: "url(./dot-patterns.svg)", backgroundColor: "transparent", backgroundSize: "contain"}}></div>
              <Image
                src={projects}
                width={300}
                height={450}
                alt="LEARN"
              />
              <figcaption
                style={{
                  fontSize: 10,
                  color: "var(--dark-secondary)",
                  marginTop: 30,
                }}
              >
                Photograph by <b>Natalia Ventskovskaya</b> on Unsplash
              </figcaption>
            </figure>
          </div>
        </div>
        <div
          className={`container ${styles.product}`}
          style={{ backgroundImage: "url(./dot-patterns.svg)"}}
        >
          <div>
            <h3>ML Agents</h3>
            <div className={styles.product_info}>
              <Image src={tick} width={35} height={35} alt="TICK" />
              <p className="m">Immersive experience in machine learning</p>
            </div>
            <div className={styles.product_info}>
              <Image src={tick} width={35} height={35} alt="TICK" />
              <p className="m">Explore reinforcement learning techniques</p>
            </div>
            <div className={styles.product_info}>
              <Image src={tick} width={35} height={35} alt="TICK" />
              <p className="m">Dive into generative models</p>
            </div>
            <div className={styles.product_info}>
              <Image src={tick} width={35} height={35} alt="TICK" />
              <p className="m">Create intelligent and adaptive agents</p>
            </div>
            <div className={styles.product_info}>
              <Image src={tick} width={35} height={35} alt="TICK" />
              <p className="m">Shape the future with intelligent systems</p>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <figure className={styles.product_figure}>
              <div className={styles.black}></div>
              <Image
                src={ml_agents}
                width={300}
                height={450}
                alt="LEARN"
              />
              <figcaption
                style={{
                  fontSize: 10,
                  color: "var(--dark-secondary)",
                  marginTop: 30,
                }}
              >
                Photograph by <b>Xu Haiwei</b> on Unsplash
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
