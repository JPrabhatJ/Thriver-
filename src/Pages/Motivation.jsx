import React from 'react';
import "../css/Motivation.css";  

const Exam = () => {
  return (
    <div className="six-boxes">
      
      {/* Card 1 */}
      <div className="box">
        <img
          src='public/rbi new.png'  
          alt="RBI Logo"
          className="exam-image"
        />
        <h3>RBI Grade B</h3>
        <h4>🌀 "Be the Backbone of India's Financial Stability."</h4>
        <p><strong>Works with elite minds</strong></p>
        <p>Regulating: All Banks, Insurance, other financial bodies</p>
      </div>

      {/* Card 2 */}
      <div className="box">
        <img
          src='public/sebi new.png'
          alt="SEBI Logo"
          className="exam-image"
        />
        <h3>SEBI Grade A & B</h3>
        <h4>📈 "Shape the Future of Indian Capital Markets."</h4>
        <p><strong>Contribute to managing markets.</strong></p>
        <p>Regulating: Financial Markets, Stock Exchanges, Share Trading</p>
      </div>

      {/* Card 3 */}
      <div className="box">
        <img
          src='public/nabard-old-removebg-preview.png'
          alt="NABARD Logo"
          className="exam-image"
        />
        <h3>NABARD Grade A & B</h3>
        <h4>🌾 "Empower Rural India. Drive Agricultural Growth."</h4>
        <p><strong>Help the government provide financial aid to rural India.</strong></p>
        <p>Lead efforts to grow rural India with financial empowerment.</p>
      </div>

      {/* Card 4 */}
      <div className="box">
        <img
          src='public/irdai new.png'
          alt="IRDAI Logo"
          className="exam-image"
        />
        <h3>IRDAI Grade A & B</h3>
        <h4>📜 "Regulate to Protect. Insure to Empower."</h4>
        <p><strong>Be the insurer who leads the insurance world.</strong></p>
        <p><strong>Lead and regulate India's insurance sector.</strong></p>
      </div>

      {/* Card 5 */}
      <div className="box">
        <img
          src='public/nhb new.png'
          alt="NHB Logo"
          className="exam-image"
        />
        <h3>NHB Grade A</h3>
        <h4>🏠 "Build the Nation, One Home at a Time."</h4>
        <p><strong>Help Govt. build homes for our nation.</strong> </p>
        <p>Shelter being the main life asset, be the one who approves housing</p>
      </div>

      {/* Card 6 */}
      <div className="box">
        <img
          src='public/PFRDA_L new.png'
          alt="PFRDA Logo"
          className="exam-image"
        />
        <h3>PFRDA Grade A</h3>
        <h4>🛡️ "Secure Futures. Shape Retirement for Millions."</h4>
        <p>Help Govt. manages peoples hard earned money</p>
        <p>Secure future proof security and stability</p>
      </div>

      {/* Card 7 */}
      <div className="box">
        <img
          src='public/ifs new.png'
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
