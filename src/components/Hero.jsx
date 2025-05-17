import React, { useRef, useState, useEffect } from "react";
import "../css/Hero.css";

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
      {
        threshold: 0.5,
      }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, []);

  const handleScroll = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  // Accordion toggle function
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
          <source
            src="public/WhatsApp Video 2025-05-14 at 3.13.02 PM.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
       
          <h1>Prepare for Govt. Job</h1>
          <p>
            Which pays <span className="cut-number"><span className="cut">10</span></span>,
            <span className="cut-number"><span className="cut">15</span></span>, 25LPA+ 🤑
          </p>
          <div className="hero-buttons">
            <button className="hero-btn" onClick={handleScroll}>
             Our Result
            </button>
            <button className="hero-btn secondary">Get Started</button>
          </div>
        </div>
      </section>

      <div className="floating-line">
        <div className="floating-icons">
          <a href='https://www.sebi.gov.in' target="_blank" rel="noopener noreferrer"><img src='public/sebi new.png' alt='sebi' /></a>
          <a href='https://www.nabard.org' target="_blank" rel="noopener noreferrer"><img src='public/nabard-old-removebg-preview.png' alt='nabard' /></a>
          <a href='https://www.rbi.org.in' target="_blank" rel="noopener noreferrer"><img src='public/rbi new.png' alt='rbi' /></a>
          <a href='https://www.nhb.org.in' target="_blank" rel="noopener noreferrer"><img src='public/nhb new.png' alt='nhb' /></a>
          <a href=' https://www.pfrda.org.in' target="_blank" rel="noopener noreferrer"><img src='public/PFRDA_L new.png' alt='pfrda' /></a>
          <a href='https://www.irdai.gov.in' target="_blank" rel="noopener noreferrer"><img src='public/irdai new.png' alt='irdai' /></a>
          <a href='https://www.ifsca.gov.in/' target="_blank" rel="noopener noreferrer"><img src='public/ifs new.png' alt='irdai' /></a>
        </div>
      </div>
      <div ref={testimonialsRef} className="testimonials-title">
        <h2>Our Prides 🏆</h2>
      </div>

      <div
        ref={scrollRef}
        className={`four-boxes ${showBoxes ? "fade-in" : "hidden"}`}
      >
        <div className="box">
          <img
            src="public/WhatsApp Image 2025-05-14 at 2.48.21 PM.jpeg"
            alt="Box 1"
            className="box-image"
          />
          <h2>AKASH</h2>
          <h3>RBI GRADE B, AIR-91</h3>
          <p>Classroom Student</p>
          <p>Roll No. 307034304</p>
        </div>
        <div className="box">
          <img
            src="public/WhatsApp Image 2025-05-14 at 2.48.22 PM (1).jpeg"
            alt="Box 2"
            className="box-image"
          />
           <h2>ANOOP RAJ</h2>
          <h3>IRDAI Assistant Manager</h3>
          <p>Online Student</p>
          <p>Roll No. 5603070674</p>
        </div>
        <div className="box">
          <img
            src="public/WhatsApp Image 2025-05-14 at 2.48.22 PM.jpeg"
            alt="Box 3"
            className="box-image"
          />
       <h2>Nishant Roy</h2>
          <h3>SEBI IT Officer</h3>
          <p>Interview Guidance</p>
          <p>Roll No. 230160307004</p>
        </div>
        <div className="box">
          <img
            src='public/WhatsApp Image 2025-05-15 at 6.14.42 PM.jpeg'
            alt="Box 4"
            className="box-image"
          />
          <h2>Arjit Singh</h2>
          <h3>NHB Assitant Manager</h3>
          <p>Mains + Interview Student</p>
          <p>Roll No. 1603045554</p>
        </div>
      </div>
      <section className="accordion-section">
  <h2>Topper's No.1 Choice since 2020</h2>
  <div className="accordion">
    <div
      className={`accordion-item ${activeIndex === 0 ? 'active' : ''}`}
    >
      <button className="accordion-header" onClick={() => toggleAccordion(0)}>
        Why you should choose us?
      </button>
      {activeIndex === 0 && (
        <div className="accordion-content">
          <p>"Our courses are designed to provide comprehensive, step-by-step guidance, whether you’re a beginner or an experienced professional. We offer personalized learning paths, expert instructors, and proven results with a track record of success. Join us and unlock your potential for a rewarding career in the government sector."</p>
        </div>
      )}
    </div>

    <div
      className={`accordion-item ${activeIndex === 1 ? 'active' : ''}`}
    >
      <button className="accordion-header" onClick={() => toggleAccordion(1)}>
        What are different types of courses you offer?
      </button>
      {activeIndex === 1 && (
        <div className="accordion-content">
          <p>"We offer a wide range of courses tailored to your needs, including beginner to advanced levels. Our courses cover everything from foundational knowledge to in-depth subject expertise, ensuring you get the guidance you need at every stage. Whether you're preparing for exams or interviews, we provide complete solutions for your success."</p>
        </div>
      )}
    </div>

    <div
      className={`accordion-item ${activeIndex === 2 ? 'active' : ''}`}
    >
      <button className="accordion-header" onClick={() => toggleAccordion(2)}>
        What will be the duration of the course?
      </button>
      {activeIndex === 2 && (
        <div className="accordion-content">
          <p>

ChatGPT said:
"The duration of our courses depends on your starting level and the depth of the program. For beginners, it may take a few months to cover all fundamentals, while advanced courses may take less time. We also offer flexible study schedules to accommodate your pace, ensuring you get the most out of your learning experience."</p>
        </div>
      )}
    </div>
  </div>
</section>

    </div>
  );
}

export default Hero;
