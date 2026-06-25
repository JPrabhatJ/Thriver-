import React, { useRef, useState, useEffect } from "react";
import "../css/Hero.css";
import { GrLinkNext } from "react-icons/gr";
import { FaTrophy } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { PiTreeStructureFill } from "react-icons/pi";
import { SiMediamarkt } from "react-icons/si";
import { ImBooks } from "react-icons/im";
import { FaVideo } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { SlCallIn } from "react-icons/sl";



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
          <a href="https://fci.gov.in/" target="_blank" rel="noopener noreferrer"><img src="/fci.png" alt="ibps" /></a>
          <a href="https://www.pfrda.org.in" target="_blank" rel="noopener noreferrer"><img src="/PFRDA_L new.png" alt="pfrda" /></a>
          <a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer"><img src="/sebi new.png" alt="sebi" /></a>
          <a href="https://www.onlinesbi.sbi/" target="_blank" rel="noopener noreferrer"><img src="/sbi-bg.png" alt="sbi" /></a>
          <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer"><img src="/rbi new.png" alt="rbi" /></a>
          <a href="https://www.nhb.org.in" target="_blank" rel="noopener noreferrer"><img src="/nhb new.png" alt="nhb" /></a>
          <a href="https://www.nabard.org" target="_blank" rel="noopener noreferrer"><img src="/nabard-old-removebg-preview.png" alt="nabard" /></a>
          <a href="https://www.ifsca.gov.in/" target="_blank" rel="noopener noreferrer"><img src="/ifs new.png" alt="irdai" /></a>
          <a href="https://www.irdai.gov.in" target="_blank" rel="noopener noreferrer"><img src="/irdai new.png" alt="irdai" /></a>
           <a href="https://www.ibps.in/" target="_blank" rel="noopener noreferrer"><img src="/ibps-bg.png" alt="ibps" /></a>
             <a href="https://nationalinsurance.nic.co.in/" target="_blank" rel="noopener noreferrer"><img src="/nicl.png" alt="pfrda" /></a>
        </div>
      </div>

      <div ref={testimonialsRef} className="testimonials-title">  
        <h2>Thriver's HAll of fame🏆</h2>
      </div>


      
      <div
        ref={scrollRef}
        className={`four-boxes ${showBoxes ? "fade-in" : "hidden"}`}
      >
        <FlipCard
          id="Rishabh"
          imgSrc="/Topper3.png"
          name="Rishabh Kashyap"
          position="RBI GRADE B, AIR-91"
          type="Classroom Student"
          insights="AKASH cracked RBI Grade B using our advanced test series and revision planner. Strategic mocks and detailed mentorship were key to his AIR-91 success."
        />
        <FlipCard
          id="Karnima"
          imgSrc="/Topper2.png"
          name="Karnima Arora"
          position="IRDAI Assistant Manager"
          type="Online Student"
          insights="Anoop utilized our online study plan. Regular doubt-clearing sessions, pre-recorded content, and speed tests helped him secure his dream role at IRDAI."
        />
        <FlipCard
          id="Akash"
          imgSrc="/Topper1.png"
          name="Akash Meena"
          position="SEBI IT Officer"
          type="Interview Guidance"
          insights="Nishant cleared SEBI with our IT-specific test plan and expert-led technical interview training. His confidence and preparation stood out."
        />
        <FlipCard
          id="Kamal"
          imgSrc="/Topper4.png"
          name="Kamal Preet Singh"
          position="NHB Assistant Manager"
          type="Mains + Interview Student"
          insights="Arjit joined after prelims and aced mains with our focused strategy. Daily revision of targets and weekly mock interviews helped him confidently crack NHB."
        />
        <FlipCard
          id="Lakshay"
          imgSrc="/Topper5.png"
          name="Lakshay Verma"
          position="NABARD Grade A"
          type="Full Course Enrollee"
          insights="Prabhat followed our end-to-end guidance program with weekly mentorship calls and structured test series. He cracked NABARD in first attempt with confidence."
        />
        <FlipCard
          id="cta"
          imgSrc="/1070509.webp"
          name="You can be the next officer"
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
        <FaTrophy style={{ marginRight: "8px" }} />
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
        <FaUserGraduate style={{ marginRight: "8px" }} />
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
        Discussion Forum
  </div>

  <div className="small-box">
        <IoPeopleSharp style={{ marginRight: "8px" }} />
        offline meetups and seminars
  </div>

<div className="small-box">
        <ImBooks style={{ marginRight: "8px" }} />
        Free pyq books and notes
  </div>

<div className="small-box">
        <FaVideo  style={{ marginRight: "8px" }} />
        Video & audio Lessons
  </div>

    </div>
  </div>
</section>

<section className="join-thriver-section">
  <div className="content">
    <h1>ELITE Govt. Job Prep, 50% faster atleast.</h1>
    <h2>By ex-RBI, SIDBI, Bank PO and alumni of IIM, ISB and IIT</h2>
    
    <div className="stats">
      <div className="stat-item">
        <h3>970+ selection overall</h3>
      </div>
        <span className="separator">|</span>
      <div className="stat-item">
        <h3>30,000+ Students enrolled</h3>
      </div>
        <span className="separator">|</span>
         <div className="stat-item">
        <h3>93% selection rate</h3>
      </div>
        <span className="separator">|</span>
      <div className="stat-item">
        <h3>Updated curriculum</h3>
      </div>
       <span className="separator">|</span>
       <div className="stat-item">
        <h3>Guidance on each step</h3>
      </div>
    </div>
<a
  href="https://docs.google.com/forms/d/1-Chp5eZwVJlgHfJMrXgv8EBGqP5OIlW1BJLeJhmrzsc"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "none" }}
>
  <button className="request-callback-btn">
    <SlCallIn className="top-2px" /> Request Callback
  </button>
</a>


  </div>
  <div className="bottom-blur"></div>

</section>


<div className="app-download-card">
  <div className="card-content">
    <h2>Get Our THRIVER Mobile App</h2>
    <p>
      Download the Thriver app and stay ahead with your learning journey anytime, anywhere. Access your classes, track progress, and never miss any update.
    </p>
    <div className="app-buttons">
        <img src="/Google.avif" alt="Download on Google Play" />
        <img src="/Apple.avif" alt="Download on the App Store" />
    </div>
    <h3 className="maintenance-text">🚨Currently on maintenance phase🚨</h3>
    <h3 className="maintenance-text2">New App rolling out very soon for smooth and better learning experience</h3>
  </div>
  <div className="card-image">
    <img src="/New Mobile.jpeg" alt="Thriver App Preview" />
  </div>
</div>



      {/* Accordion Section */}
      <section className="accordion-section">
        <h2>Topper's No.1 Choice since 2020</h2>
        <div className="accordion">
          {[
            {
              question: "Why you should choose us?",
              answer:"Our courses are carefully designed to provide comprehensive, step-by-step guidance, whether you’re a beginner or an experienced professional. We focus on practical skills, personalized mentorship, and real-world applications to help you succeed confidently."
            },
            {
              question: "What are different types of courses you offer?",
              answer: "We offer a diverse range of courses tailored to various skill levels, from beginner to advanced. Our curriculum covers practical training, industry-relevant skills, and specialized topics to help you achieve your learning goals effectively."
            },
            {
              question: "What will be the duration of the course?",
              answer: "The duration of our courses varies based on your current skill level and the specific program you choose. Typically, courses range from a few weeks to several months, allowing flexible pacing to suit your learning needs."
            },
            {
              question: "What is the scheme for money back?",
              answer: "We offer a 30-day money-back guarantee. If you find the curriculum doesn’t meet your expectations within the first 30 days of enrollment, you can request a full refund—no questions asked."
            },
            {
              question: "Who will teach us?",
              answer: "Our courses are taught by industry pioneers and veteran educators who have personally cracked these exams or possess extensive, relevant professional experience. They bring real-world insights and proven strategies to help you succeed."
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
