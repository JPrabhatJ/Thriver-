import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/Footer.css";

function Footer() {
  const [visitorsToday, setVisitorsToday] = useState(null);

  useEffect(() => {
    const fakeCount = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    setVisitorsToday(fakeCount);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="social-links">
          <a href='https://www.sebi.gov.in' target="_blank" rel="noopener noreferrer">SEBI</a>
          <a href='https://www.nabard.org' target="_blank" rel="noopener noreferrer">NABARD</a>
          <a href='https://www.rbi.org.in' target="_blank" rel="noopener noreferrer">RBI</a>
          <a href='https://www.nhb.org.in' target="_blank" rel="noopener noreferrer">NHB</a>
          <a href='https://www.pfrda.org.in' target="_blank" rel="noopener noreferrer">PFRDA</a>
          <a href='https://www.irdai.gov.in' target="_blank" rel="noopener noreferrer">IRDAI</a>
          <a href='https://www.ifsca.gov.in/' target="_blank" rel="noopener noreferrer">IFSCA</a>

          <Link to="/exam">Exams</Link>
          <Link to="/motivation">Motivation</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="footer-right">
        <p>Visitors Today: {visitorsToday ?? 'Loading...'}</p>
        <p>&copy; {new Date().getFullYear()} Thriver. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
