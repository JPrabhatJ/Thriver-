import React from 'react';
import "../css/Syllabus.css";  


const Exam = () => {
  return (
    <div className="six-boxes">
      <div className="box">
          <img
            src='public/rbi new.png'  
            alt="Exam 1"
            className="exam-image"
          />
          <h3>RBI Grade B</h3>
          <h4>Any Graduate</h4>
          <p><strong>Age:(21 - 30),</strong> 25LPA+ 🤑</p>
          <p><strong>Exam Stages:</strong>Pre, Mains, Interview</p> 
        </div>
        <div className="box">
          <img
            src='public/sebi new.png'
            alt="Exam 2"
            className="exam-image"
          />
          <h3>SEBI Grade A & B</h3>
          <h4>Any Graduate and Specialist Course</h4>
          <p><strong>Age:(21 - 30),</strong> 35LPA+ 🤩</p>
          <p><strong>Exam Stages:</strong>Pre, Mains, Interview</p>
        </div>

        {/* Card 3 */}
        <div className="box">
          <img
            src='public/nabard-old-removebg-preview.png'
            className="exam-image"
          />
         <h3>NABARD Grade A & B</h3>
          <h4>Any Graduate and Specialist Course</h4>
          <p><strong>Age:(21 - 30),</strong> 20LPA+ 🥰</p>
          <p><strong>Exam Stages:</strong>Pre, Mains, Interview</p>
        </div>

        {/* Card 4 */}
        <div className="box">
          <img
            src='public/irdai new.png'
            alt="Exam 4"
            className="exam-image"
          />
          <h3>IRDAI Grade A & B</h3>
          <h4>Any Graduate</h4>
          <p><strong>Age:(21 - 30),</strong> 25LPA+ 🤗</p>
          <p><strong>Exam Stages:</strong>Pre, Mains, Interview</p>
        </div>

        {/* Card 5 */}
        <div className="box">
          <img
            src='public/nhb new.png'
            alt="Exam 5"
            className="exam-image"
          />
          <h3>NHB Grade A</h3>
          <h4>Any Graduate</h4>
          <p><strong>Age:(21 - 30),</strong> 20LPA+ 🫡</p>
          <p><strong>Exam Stages:</strong>Pre, Mains, Interview</p>
        </div>

        {/* Card 6 */}
        <div className="box">
          <img
            src='public/PFRDA_L new.png'
            alt="Exam 6"
            className="exam-image"
          />
          <h3>PFRDA Grade A</h3>
          <h4>Any Graduate</h4>
          <p><strong>Age:(21 - 30),</strong> 30LPA+ 🥳</p>
          <p><strong>Exam Stages:</strong>Pre, Mains, Interview</p>
        </div>

        {/* Card 6 */}
        <div className="box">
          <img
            src='public/ifs new.png'
            alt="Exam 6"
            className="exam-image"
          />
          <h3>IFSCA</h3>
          <h4>Any Graduate</h4>
          <p><strong>Age:(21 - 30),</strong> 30LPA+ 😎</p>
          <p><strong>Exam Stages:</strong>Pre, Mains, Interview</p>
        </div>
    </div> 
  );
}

export default Exam;
