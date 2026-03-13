import Image from "next/image";
import { Header } from "./components/header";
import ParticlesBackground from "./components/ParticlesBackground";

export default function Home() {
    return (
        <>

            {/* background particles */}
            <ParticlesBackground />

            <Header />


            <main id="top">
                <section className="hero container">
                    <p className="kicker">Portfolio • 2026</p>
                    <h1>Interaction Design</h1>
                    <p className="sub">
                        Hi, I’m Julia Huynh — an Interaction Design student at George Brown College focused on UX/UI design for
                        web and digital products. I specialize in creating intuitive interfaces through research, wireframing,
                        and interactive prototyping. Currently seeking UX/UI internship opportunities in Toronto.
                    </p>

                    <div className="cta">
                        <a className="btn" href="#projects">View projects</a>
                        <a className="btn ghost" href="#contact">Contact</a>
                    </div>

                    <div className="stats">
                        <div className="stat">
                            <p className="stat-label">Focus</p>
                            <p className="stat-value">UX • UI • Interaction</p>
                        </div>
                        <div className="stat">
                            <p className="stat-label">Tools</p>
                            <p className="stat-value">Figma • Notion • Adobe</p>
                        </div>
                        <div className="stat">
                            <p className="stat-label">Vibe</p>
                            <p className="stat-value">Clean • Soft • Intentional</p>
                        </div>
                    </div>

                </section>

                <section id="about" className="section container">
                    <h2>About</h2>
                    <p className="text">
                        Write a short intro about yourself. Keep it real and scannable.
                        Mention what you love designing, what kind of problems you enjoy solving,
                        and what you want next.
                    </p>

                    <div className="pill-row">
                        <span className="pill">User-centered</span>
                        <span className="pill">Visual hierarchy</span>
                        <span className="pill">Prototyping</span>
                        <span className="pill">Research</span>
                    </div>
                </section>

                <section id="projects" className="section container">
                    <div className="section-head">
                        <h2>Projects</h2>
                        <a className="link" href="#" title="Optional: link to another page">See all →</a>
                    </div>

                    <div className="grid">
                        <a className="card" href="#">
                            <img src="./assets/img/p1.jpg" alt="Project 1 preview" />
                            <div className="card-body">
                                <div className="tag">UI/UX</div>
                                <h3>Project One</h3>
                                <p>Short description that sounds confident and clean.</p>
                            </div>
                        </a>

                        <a className="card" href="#">
                            <img src="./assets/img/p2.jpg" alt="Project 2 preview" />
                            <div className="card-body">
                                <div className="tag">Research</div>
                                <h3>Project Two</h3>
                                <p>What problem you solved + 1 outcome line.</p>
                            </div>
                        </a>

                        <a className="card" href="#">
                            <img src="./assets/img/p3.jpg" alt="Project 3 preview" />
                            <div className="card-body">
                                <div className="tag">Interaction</div>
                                <h3>Project Three</h3>
                                <p>Micro-interactions, motion, prototype thinking.</p>
                            </div>
                        </a>
                    </div>


                    <div className="grid">
                        <a className="card" href="#">
                            <img src="./assets/img/p1.jpg" alt="Project 1 preview" />
                            <div className="card-body">
                                <div className="tag">UI/UX</div>
                                <h3>Project One</h3>
                                <p>Short description that sounds confident and clean.</p>
                            </div>
                        </a>

                        <a className="card" href="#">
                            <img src="./assets/img/p2.jpg" alt="Project 2 preview" />
                            <div className="card-body">
                                <div className="tag">Research</div>
                                <h3>Project Two</h3>
                                <p>What problem you solved + 1 outcome line.</p>
                            </div>
                        </a>

                        <a className="card" href="#">
                            <img src="./assets/img/p3.jpg" alt="Project 3 preview" />
                            <div className="card-body">
                                <div className="tag">Interaction</div>
                                <h3>Project Three</h3>
                                <p>Micro-interactions, motion, prototype thinking.</p>
                            </div>
                        </a>
                    </div>
                </section>

                <section id="contact" className="section container">
                    <h2>Contact</h2>
                    <p className="text">
                This is my contact section. You can reach me at the email below, or find me on social media. I’m always open to chatting about design, potential opportunities, or just saying hi.
                    </p>

                    <div className="contact-grid">
                        <a className="contact-card" href="mailto:huynhthuynhi070301@gmail.com">
                            <p className="contact-label">Email</p>
                            <p className="contact-value">huynhthuynhi070301@gmail.com</p>
                        </a>

                        <a className="contact-card" href="https://www.behance.net/huynhnhi3" target="_blank" rel="noreferrer">
                            <p className="contact-label">Behance</p>
                            <p className="contact-value">/huynhnhi3</p>
                        </a>

                        <a className="contact-card" href="#" target="_blank" rel="noreferrer">
                            <p className="contact-label">LinkedIn</p>
                            <p className="contact-value">/yourprofile</p>
                        </a>

                        <a className="contact-card" href="#" target="_blank" rel="noreferrer">
                            <p className="contact-label">Instagram</p>
                            <p className="contact-value">/yourprofile</p>
                        </a>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="container footer-inner">
                    <p>© 2026 Julia Huynh. All rights reserved.</p>
                    <a className="link" href="#top">Back to top ↑</a>
                </div>
            </footer>


        </>
    );
}
