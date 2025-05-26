import React from 'react';
import "../css/Motivation.css";  

const Exam = () => {
  return (
    <div className="six-boxes">
      
      <div className="box">
        <img
          src='/rbi new.png'  
          alt="RBI Logo"
          className="exam-image"
        />
        <h3>RBI Grade B</h3>
        <h4>🌀 "Be the Backbone of India's Financial Stability."</h4>
        <p><strong>Works with elite minds</strong></p>
        <p>Regulating: All Banks, Insurance, other financial bodies</p>
      </div>

      <div className="box">
        <img
          src='/sebi new.png'
          alt="SEBI Logo"
          className="exam-image"
        />
        <h3>SEBI Grade A & B</h3>
        <h4>📈 "Shape the Future of Indian Capital Markets."</h4>
        <p><strong>Contribute to managing markets.</strong></p>
        <p>Regulating: Financial Markets, Stock Exchanges, Share Trading</p>
      </div>

      <div className="box">
        <img
          src='/nabard-old-removebg-preview.png'
          alt="NABARD Logo"
          className="exam-image"
        />
        <h3>NABARD Grade A & B</h3>
        <h4>🌾 "Empower Rural India. Drive Agricultural Growth."</h4>
        <p><strong>Help the government provide financial aid to rural India.</strong></p>
        <p>Lead efforts to grow rural India with financial empowerment.</p>
      </div>

      <div className="box">
        <img
          src='/irdai new.png'
          alt="IRDAI Logo"
          className="exam-image"
        />
        <h3>IRDAI Grade A & B</h3>
        <h4>📜 "Regulate to Protect. Insure to Empower."</h4>
        <p><strong>Be the insurer who leads the insurance world.</strong></p>
        <p><strong>Lead and regulate India's insurance sector.</strong></p>
      </div>


      <div className="box">
        <img
          src='/nhb new.png'
          alt="NHB Logo"
          className="exam-image"
        />
        <h3>NHB Grade A</h3>
        <h4>🏠 "Build the Nation, One Home at a Time."</h4>
        <p><strong>Help indian Govt. build homes for our nation.</strong> </p>
        <p>Shelter being the main life asset, be the one who approves housing</p>
      </div>

      <div className="box">
        <img
          src='/PFRDA_L new.png'
          alt="PFRDA Logo"
          className="exam-image"
        />
        <h3>PFRDA Grade A</h3>
        <h4>🛡️ "Secure Futures. Shape Retirement for Millions."</h4>
        <p>Help Govt. manages peoples hard earned money</p>
        <p>Secure future proof security and stability</p>
      </div>

      <div className="box">
        <img
          src='/ifs new.png'
          alt="IFSCA Logo"
          className="exam-image"
        />
        <h3>IFSCA</h3>
        <h4>🌍 "Lead India’s Global Financial Gateway."</h4>
        <p>Grow with elite minds in leading organisation.</p>
        <p>Help Govt. make right financial decisions.</p>
      </div>
      
    </div>
  );
}

export default Exam;
