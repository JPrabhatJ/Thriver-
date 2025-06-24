import React, { useRef, useState, useEffect } from "react";
import "../css/Hero.css";
import { GrLinkNext } from "react-icons/gr";
import { FaTrophy } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { PiTreeStructureFill } from "react-icons/pi";
import { SiMediamarkt } from "react-icons/si";
import { ImBooks } from "react-icons/im";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";



/* ✅ Reusable FlipCard Component */
const FlipCard = ({ id, imgSrc, name, position, type, insights, cta }) => (
  <div className="flip-card">
    <input type="checkbox" id={`flip-${id}`} className="card-toggle" hidden />
    <label htmlFor={`flip-${id}`}>
      <div className="box">
        <div className="box-inner">
          <div className="box-front">
            <img src={imgSrc} alt={name} className="box-image" />
            <h2>{name}</h2>
            <h3>{position}</h3>
            <p>{type}</p>
            {cta && (
              <a
                href={cta.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="join-btn">{cta.label}</button>
              </a>
            )}
          </div>
          <div className="box-back">
            <h3>Preparation Insights</h3>
            <p>{insights}</p>
          </div>
        </div>
      </div>
    </label>
  </div>
);

function Hero() {
  const scrollRef = useRef(null);
  const testimonialsRef = useRef(null);
  const [showBoxes, setShowBoxes] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowBoxes(true);
        }
      },
      { threshold: 0 }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);

      if (scrollRef.current.getBoundingClientRect().top < window.innerHeight) {
        setShowBoxes(true);
      }
    }

    return () => {
      if (scrollRef.current) observer.unobserve(scrollRef.current);
    };
  }, []);

  const handleScroll = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <header onClick={scrollToTop} className="logo">
        <img src="your-logo-path.png" alt="Logo" />
      </header>

      <section className="hero">
        <video autoPlay loop muted>
          <source src="/HeroMedia.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>Prepare for Govt. Job</h1>
          <p>
            Which pays <span className="cut-number"><span className="cut">5LPA</span></span>,
            <span className="cut-number"><span className="cut">10LPA</span></span>, 
            25LPA+ 🤑
          </p>
          <div className="hero-buttons">
            <button className="hero-btn" onClick={handleScroll}>
              Our Result
            </button>
            <a
              href="https://docs.google.com/forms/d/1-Chp5eZwVJlgHfJMrXgv8EBGqP5OIlW1BJLeJhmrzsc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="hero-btn secondary">
                Get Started <GrLinkNext />
              </button>
            </a>
          </div>
        </div>
      </section>

      <div className="floating-line">
        <div className="floating-icons">
          <a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer"><img src="/sebi new.png" alt="sebi" /></a>
          <a href="https://www.nabard.org" target="_blank" rel="noopener noreferrer"><img src="/nabard-old-removebg-preview.png" alt="nabard" /></a>
          <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer"><img src="/rbi new.png" alt="rbi" /></a>
          <a href="https://www.nhb.org.in" target="_blank" rel="noopener noreferrer"><img src="/nhb new.png" alt="nhb" /></a>
          <a href=" https://www.pfrda.org.in" target="_blank" rel="noopener noreferrer"><img src="/PFRDA_L new.png" alt="pfrda" /></a>
          <a href="https://www.irdai.gov.in" target="_blank" rel="noopener noreferrer"><img src="/irdai new.png" alt="irdai" /></a>
          <a href="https://www.ifsca.gov.in/" target="_blank" rel="noopener noreferrer"><img src="/ifs new.png" alt="irdai" /></a>
        </div>
      </div>

      <div ref={testimonialsRef} className="testimonials-title">
        <h2>Thriver's HAll of fame🏆</h2>
      </div>

      {/* ✅ Flip Cards Section */}
      <div
        ref={scrollRef}
        className={`four-boxes ${showBoxes ? "fade-in" : "hidden"}`}
      >
        <FlipCard
          id="akash"
          imgSrc="/WhatsApp Image 2025-05-14 at 2.48.21 PM.jpeg"
          name="AKASH SINGH"
          position="RBI GRADE B, AIR-91"
          type="Classroom Student"
          insights="AKASH cracked RBI Grade B using our advanced test series and revision planner. Strategic mocks and detailed mentorship were key to his AIR-91 success."
        />
        <FlipCard
          id="anoop"
          imgSrc="/WhatsApp Image 2025-05-14 at 2.48.22 PM (1).jpeg"
          name="ANOOP RAJ"
          position="IRDAI Assistant Manager"
          type="Online Student"
          insights="Anoop utilized our online study plan. Regular doubt-clearing sessions, pre-recorded content, and speed tests helped him secure his dream role at IRDAI."
        />
        <FlipCard
          id="nishant"
          imgSrc="/WhatsApp Image 2025-05-14 at 2.48.22 PM.jpeg"
          name="NISHANT ROY"
          position="SEBI IT Officer"
          type="Interview Guidance"
          insights="Nishant cleared SEBI with our IT-specific test plan and expert-led technical interview training. His confidence and preparation stood out."
        />
        <FlipCard
          id="arjit"
          imgSrc="/WhatsApp Image 2025-05-15 at 6.14.42 PM.jpeg"
          name="ARJIT SINGH"
          position="NHB Assistant Manager"
          type="Mains + Interview Student"
          insights="Arjit joined after prelims and aced mains with our focused strategy. Daily revision of targets and weekly mock interviews helped him confidently crack NHB."
        />
        <FlipCard
          id="prabhat"
          imgSrc="/WhatsApp Image 2025-05-21 at 11.56.36 PM.jpeg"
          name="PRABHAT JHA"
          position="NABARD Grade A"
          type="Full Course Enrollee"
          insights="Prabhat followed our end-to-end guidance program with weekly mentorship calls and structured test series. He cracked NABARD in first attempt with confidence."
        />
        <FlipCard
          id="cta"
          imgSrc="/1070509.webp"
          name="You can be the next"
          insights="With utmost care we will understand your background and prepare a roadmap for your rapid and meaningful preparation."
          cta={{
            label: "Join Now",
            link: "https://docs.google.com/forms/d/1-Chp5eZwVJlgHfJMrXgv8EBGqP5OIlW1BJLeJhmrzsc",
          }}
        />
      </div>

       <section className="team">
      <img src="/Team.jpeg" alt="team" className="team"></img>
      </section>

<section className="squares">
  <div className="big-square">
    <div className="left-text">
      <div>
        <h2>Why consider Thriver ?</h2>
        <img src="/Why Us.svg" alt="why us" style={{ maxWidth: "100%", marginTop: "20px" }} />
      </div>
    </div>
    <div className="right-boxes">
      <div className="small-box">
        <FaUserGraduate style={{ marginRight: "8px" }} />
        Result-Oriented Training
      </div>
      <div className="small-box">
        <FaHandshake style={{ marginRight: "8px" }} />
        Personal Mentorship
      </div>
      <div className="small-box">
        <PiTreeStructureFill style={{ marginRight: "8px" }} />
        Structured Curriculum
      </div>
      <div className="small-box">
        <FaTrophy style={{ marginRight: "8px" }} />
        Interview Guidance
      </div>
    
     <a
  href="https://docs.google.com/forms/d/1-Chp5eZwVJlgHfJMrXgv8EBGqP5OIlW1BJLeJhmrzsc"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "none" }}
>
  <div className="small-box-unique arrow-cursor">
    Why still waiting Join Now
    <GrLinkNext style={{ marginRight: "8px" }} />
  </div>
</a>

 <div className="small-box">
        <SiMediamarkt style={{ marginRight: "8px" }} />
        Weekly Webinars
  </div>

  <div className="small-box">
        <IoPeopleSharp style={{ marginRight: "8px" }} />
        offline meetups
  </div>

<div className="small-box">
        <ImBooks style={{ marginRight: "8px" }} />
        Free pyq books and notes
  </div>

<div className="small-box">
        <FaPeopleCarryBox style={{ marginRight: "8px" }} />
        weekly and monthly 1:1 session
  </div>

    </div>
  </div>
</section>



      {/* Accordion Section */}
      <section className="accordion-section">
        <h2>Topper's No.1 Choice since 2020</h2>
        <div className="accordion">
          {[
            {
              question: "Why you should choose us?",
              answer: "Our courses are designed to provide comprehensive, step-by-step guidance, whether you’re a beginner or an experienced professional..."
            },
            {
              question: "What are different types of courses you offer?",
              answer: "We offer a wide range of courses tailored to your needs, including beginner to advanced levels..."
            },
            {
              question: "What will be the duration of the course?",
              answer: "The duration of our courses depends on your starting level and the depth of the program..."
            },
            {
              question: "What is the scheme for money back?",
              answer: "We provide money back for first 30 days if you don’t like curriculum..."
            },
            {
              question: "Who will teach us?",
              answer: "We provide industry pioneer and veteran teachers who themselves have cracked these exams or have relevant experience..."
            }
          ].map((item, index) => (
            <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
              <button className="accordion-header" onClick={() => toggleAccordion(index)}>
                {item.question}
              </button>
              {activeIndex === index && (
                <div className="accordion-content">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Hero;
