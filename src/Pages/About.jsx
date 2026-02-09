import React from "react";
import "./CSS/About.css";
import logo from "../Components/Assets/logo.png";

const About = () => {
  return (
    <section
      className="about-us"
      style={{ backgroundImage: `url(${logo})` }}
    >
      <div className="about-overlay"></div>

      {/* Text Section */}
      <div className="about-text">
        <h2>About Zariyah</h2>
<p style={{ fontSize: "1.3rem", lineHeight: "2" }}>
  At <span className="highlight">Zariyah</span>, we believe luxury is more than
  just fashion – it’s an emotion, a story woven into every thread. Inspired by
  timeless traditions and modern elegance, we design kurtis that embody grace,
  comfort, and everlasting sophistication.
</p>

<p style={{ fontSize: "1.3rem", lineHeight: "2" }}>
  Our collection proudly includes <strong>hand-woven, original Lucknowi Chikan
  kurtis</strong> – an art form passed down through generations, loved worldwide
  for its delicate embroidery and timeless beauty. From our store to you, each
  piece carries the soul of heritage and the charm of true craftsmanship.
</p>

<p style={{ fontSize: "1.3rem", lineHeight: "2" }}>
  Every kurti is more than an outfit – it’s a promise. With every purchase:  
  🌸 A poor baby is fed a meal, bringing hope to little hearts sleeping on the
  streets.  
  🌸 Hardworking tailors and their families are supported, empowering them with
  dignity and opportunities for a brighter future.  
</p>

<p style={{ fontSize: "1.3rem", lineHeight: "2", fontWeight: "500" }}>
  When you wear <span className="highlight">Zariyah</span>, you don’t just wear
  fabric that makes you beautiful – you wear kindness, love, and the power to
  transform lives. Because true beauty is not only in what adorns you, but in
  the hope you bring to others. 💛
</p>

        <button>Explore Collection</button>
      </div>
    </section>
  );
};

export default About;
