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
      threshold: 0,
    }
  );

  if (scrollRef.current) {
    observer.observe(scrollRef.current);

    if (scrollRef.current.getBoundingClientRect().top < window.innerHeight) {
      setShowBoxes(true);
    }
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
            src="/WhatsApp Video 2025-05-14 at 3.13.02 PM.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
       
          <h1>Prepare for Govt. Job</h1>
          <p>
            Which pays <span className="cut-number"><span className="cut">10LPA</span></span>,
            <span className="cut-number"><span className="cut">15LPA</span></span>, 25LPA+ 🤑
          </p>
          <div className="hero-buttons">
            <button className="hero-btn" onClick={handleScroll}>
             Our Result
            </button>
            <a href='https://docs.google.com/forms/d/1-Chp5eZwVJlgHfJMrXgv8EBGqP5OIlW1BJLeJhmrzsc' target="_blank" rel="noopener noreferrer">
            <button className="hero-btn secondary">Get Started</button>
            </a>
          </div>
        </div>
      </section>

      <div className="floating-line">
        <div className="floating-icons">
          <a href='https://www.sebi.gov.in' target="_blank" rel="noopener noreferrer"><img src='/sebi new.png' alt='sebi' /></a>
          <a href='https://www.nabard.org' target="_blank" rel="noopener noreferrer"><img src='/nabard-old-removebg-preview.png' alt='nabard' /></a>
          <a href='https://www.rbi.org.in' target="_blank" rel="noopener noreferrer"><img src='/rbi new.png' alt='rbi' /></a>
          <a href='https://www.nhb.org.in' target="_blank" rel="noopener noreferrer"><img src='/nhb new.png' alt='nhb' /></a>
          <a href=' https://www.pfrda.org.in' target="_blank" rel="noopener noreferrer"><img src='/PFRDA_L new.png' alt='pfrda' /></a>
          <a href='https://www.irdai.gov.in' target="_blank" rel="noopener noreferrer"><img src='/irdai new.png' alt='irdai' /></a>
          <a href='https://www.ifsca.gov.in/' target="_blank" rel="noopener noreferrer"><img src='/ifs new.png' alt='irdai' /></a>
        </div>
      </div>
      <div ref={testimonialsRef} className="testimonials-title">
        <h2>Our Prides 🏆</h2>
      </div>

      <div
        ref={scrollRef}
        className={`four-boxes ${showBoxes ? "fade-in" : "hidden"}`}
      >
        <label className="flip-card">
  <input type="checkbox" className="card-toggle" />
  <div className="box">
    <div className="box-inner">
      <div className="box-front">
        <img src="/WhatsApp Image 2025-05-14 at 2.48.21 PM.jpeg" alt="Box 1" className="box-image" />
        <h2>AKASH SINGH</h2>
        <h3>RBI GRADE B, AIR-91</h3>
        <p>Classroom Student</p>
        <p>Roll No. 307034304</p>
      </div>
      <div className="box-back">
        <h3>Preparation Insights</h3>
        <p>AKASH cracked RBI Grade B using our advanced test series and revision planner. Strategic mocks and detailed mentorship were key to his AIR-91 success.</p>
      </div>
    </div>
  </div>
</label>

<label className="flip-card">
  <input type="checkbox" className="card-toggle" />
  <div className="box">
    <div className="box-inner">
      <div className="box-front">
        <img src="/WhatsApp Image 2025-05-14 at 2.48.22 PM (1).jpeg" alt="Box 2" className="box-image" />
        <h2>ANOOP RAJ</h2>
        <h3>IRDAI Assistant Manager</h3>
        <p>Online Student</p>
        <p>Roll No. 5603070674</p>
      </div>
      <div className="box-back">
        <h3>Preparation Insights</h3>
        <p>Anoop utilized our online-only plan. Regular doubt-clearing sessions, pre-recorded content, and speed tests helped him secure his dream role at IRDAI.</p>
      </div>
    </div>
  </div>
</label>

<label className="flip-card">
  <input type="checkbox" className="card-toggle" />
  <div className="box">
    <div className="box-inner">
      <div className="box-front">
        <img src="/WhatsApp Image 2025-05-14 at 2.48.22 PM.jpeg" alt="Box 3" className="box-image" />
        <h2>Nishant Roy</h2>
        <h3>SEBI IT Officer</h3>
        <p>Interview Guidance</p>
        <p>Roll No. 230160307004</p>
      </div>
      <div className="box-back">
        <h3>Preparation Insights</h3>
        <p>Nishant cleared SEBI with our IT-specific test plan and expert-led technical interview training. His confidence and preparation stood out.</p>
      </div>
    </div>
  </div>
</label>

<label className="flip-card">
  <input type="checkbox" className="card-toggle" />
  <div className="box">
    <div className="box-inner">
      <div className="box-front">
        <img src='/WhatsApp Image 2025-05-15 at 6.14.42 PM.jpeg' alt="Box 4" className="box-image" />
        <h2>Arjit Singh</h2>
        <h3>NHB Assistant Manager</h3>
        <p>Mains + Interview Student</p>
        <p>Roll No. 1603045554</p>
      </div>
      <div className="box-back">
        <h3>Preparation Insights</h3>
        <p>Arjit joined after prelims and aced mains with our focused strategy. Daily revision of targets and weekly mock interviews helped him confidently crack NHB.</p>
      </div>
    </div>
  </div>
</label>

<label className="flip-card">
  <input type="checkbox" className="card-toggle" />
  <div className="box">
    <div className="box-inner">
      <div className="box-front">
        <img src='/WhatsApp Image 2025-05-21 at 11.56.36 PM.jpeg' alt="Box 5" className="box-image" />
        <h2>Prabhat Jha</h2>
        <h3>NABARD Grade A</h3>
        <p>Full Course Enrollee</p>
        <p>Roll No. 2104030288</p>
      </div>
      <div className="box-back">
        <h3>Preparation Insights</h3>
        <p>Prabhat followed our end-to-end guidance program with weekly mentorship calls and structured test series. He cracked NABARD in first attempt with confidence.</p>
      </div>
      
    </div>
  </div>
</label>

<div className="flip-card">
  <label> 
    <input type="checkbox" className="card-toggle" />
    <div className="box">
      <div className="box-inner">
        <div className="box-front">
          <img src="/1070509.webp" alt="Box 5" className="box-image" />
          <h2>You can be the next</h2>
  <a href='https://docs.google.com/forms/d/1-Chp5eZwVJlgHfJMrXgv8EBGqP5OIlW1BJLeJhmrzsc' target="_blank" rel="noopener noreferrer">
  <button className="join-btn">
    Join Now
  </button>
</a>

        </div>
        <div className="box-back">
          <h3>Join for 1:1 Mentorship</h3>
          <p>With uptomst care we will understand your background and prepare a roadmap for the same for your rapid and meaningful preparation.</p>
        </div>
      </div>
    </div>
  </label>
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
"The duration of our courses depends on your starting level and the depth of the program. For beginners, it may take a few months to cover all fundamentals, while advanced courses may take less time. We also offer flexible study schedules to accommodate your pace, ensuring you get the most out of your learning experience."</p>
        </div>
      )}
    </div>
     <div
      className={`accordion-item ${activeIndex === 3 ? 'active' : ''}`}
    >
      <button className="accordion-header" onClick={() => toggleAccordion(3)}>
        What is the scheme for money back?
      </button>
      {activeIndex === 3 && (
        <div className="accordion-content">
          <p>
"we provide money back for first 30 days if you dont like curriculum, i am sure you will like but still we dont force and return money with no questions asked."</p>
        </div>
      )}
    </div>
  </div>
</section>

    </div>
  );
}

export default Hero;
