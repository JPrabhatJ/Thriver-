import React from 'react';
import "../css/Exam.css";

const Exam = () => {
  return (
    <div className="six-boxes">
      <div className="box">
        <img src="/RRMentor.jpeg" alt="Mohan Kashyap" className="exam-image" />
        <h1>RaviRanjan Mishra</h1>
       <p>The RBI Director, with 25 years of experience, currently serves as an interviewer for senior-level recruitment. Ravi Sir previously worked at Allahabad Bank as a Scale 3 officer before joining the RBI. A veteran mentor with such extensive experience will surely help you in your journey as well.</p>
         </div>

    <div className="box">
  <img src="/Mentor1.jpeg" alt="Gayatri Rao" className="exam-image" />
  <h1>Mohan Kashyap</h1>
  <p>
    Mohan Sir has mentored over 1 lakh students and has cracked the CAT exam seven times, each with a 99+ percentile. His deep expertise and experience will undoubtedly help students confidently tackle Phase 1 of any competitive exam.
  </p>
</div>


      <div className="box">
        <img src="/Mentor2.jpeg" alt="Manas Shah" className="exam-image" />
        <h1>Gayatri Rao</h1>
        <p>With over two decades of experience at SEBI, Gayatri brings extensive expertise in teaching and mentoring students from diverse backgrounds. Her proficiency in finance and management makes students feel confident and comfortable with accounting-related subjects.</p>
      </div>

      <div className="box">
        <img src="/Mentor3.jpeg" alt="NHB Grade A" className="exam-image" />
       <h1>Manas Shah</h1>
        <p>Manas Shah has successfully cracked SEBI and RBI exams and secured an All India Rank 3 in the NABARD exam. He possesses deep insight into the strategies, tips, and tricks required to crack competitive exams efficiently—with the right guidance and approach.</p>
      </div>

      <div className="box">
        <img src="/AvniMentor.jpeg" alt="Avni Rathore" className="exam-image" />
       <h1>Avni Rathore</h1>
        <p>Avni, an IIM Kozhikode alumna, left her role at McKinsey to pursue her passion for teaching and mentoring students in cracking the aptitude sections of major competitive exams. She scored an impressive 99.93 percentile in the CAT and, prior to her MBA, worked for three years as a Management Trainee at Punjab National Bank.</p>
      </div>
    </div>
  );
};

export default Exam;
