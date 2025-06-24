import React from 'react';
import "../css/Motivation.css";  
import { GrLinkNext } from "react-icons/gr";

const Exam = () => {
  return (
    <div className="six-boxes">
<div className="box">
  <img
    src="/IBPS.png"
    alt="IBPS Logo"
    className="exam-image"
  />
  <h3>IBPS CALENDAR OUT For MT/SO/CSA</h3>

  <a
    href="https://www.ibps.in/wp-content/uploads/Revised_IBPS_CALENDAR_2025-26-for-Website_updated_16.6.25.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-4 py-2 mt-2 bg-green-600 text-white rounded hover:bg-green-700"
  >
    Click Here <GrLinkNext className="ml-2" />
  </a>
</div>


<div className="box">
  <img
    src="/SBI.jpg"
    alt="SBI Logo"
    className="exam-image"
  />
  <h3>SBI PO Notification out for 541 vacancies</h3>

  <a
    href="https://www.bankersadda.com/wp-content/uploads/multisite/2025/06/24111204/SBI-PO-Notification-2025.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-4 py-2 mt-2 bg-green-600 text-white rounded hover:bg-green-700"
  >
    Click Here <GrLinkNext className="ml-2" />
  </a>
</div>


<div className="box">
  <img
    src="/GIC.png"
    alt="GIC Logo"
    className="exam-image"
  />
  <h3>GIC RE 2025 Recruitment</h3>

  <a
    href="https://www.gicre.in/en/people-resources/career-en"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-4 py-2 mt-2 bg-green-600 text-white rounded hover:bg-green-700"
  >
    Click Here <GrLinkNext className="ml-2" />
  </a>
</div>

<div className="box">
  <img
    src="/rbi new.png"
    alt="rbi Logo"
    className="exam-image"
  />
  <h3>RBI GRADE B 2025</h3>

  <a
    rel="noopener noreferrer"
    className="inline-flex items-center px-4 py-2 mt-2 bg-green-600 text-white rounded hover:bg-green-700"
  >
    Coming Soon <GrLinkNext className="ml-2" />
  </a>
</div>


<div className="box">
  <img
    src="/nabard-old-removebg-preview.png"
    alt="nabard Logo"
    className="exam-image"
  />
  <h3>NABARD GRADE A&B 2025</h3>

  <a
    rel="noopener noreferrer"
    className="inline-flex items-center px-4 py-2 mt-2 bg-green-600 text-white rounded hover:bg-green-700"
  >
    Coming Soon <GrLinkNext className="ml-2" />
  </a>
</div>

<div className="box">
  <img
    src="/sebi new.png"
    alt="sebi Logo"
    className="exam-image"
  />
  <h3>SEBI GRADE A 2025</h3>

  <a
    rel="noopener noreferrer"
    className="inline-flex items-center px-4 py-2 mt-2 bg-green-600 text-white rounded hover:bg-green-700"
  >
    Coming Soon <GrLinkNext className="ml-2" />
  </a>
</div>

  
      
    </div>
  );
}

export default Exam;
