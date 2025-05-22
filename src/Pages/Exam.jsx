import React from 'react';
import "../css/Exam.css";  

const exams = [
  {
    title: "RBI Grade B",
    subtitle: "Any Graduate",
    age: "Age:(21 - 30), 25LPA+ 🤑",
    stages: "Pre, Mains, Interview",
    img: "public/rbi new.png",
    syllabus: "RBI Syllabus involves Phase I (GA, Reasoning, Quant, English), Phase II (Economic & Social Issues, Finance & Management), and Interview."
  },
  {
    title: "SEBI Grade A & B",
    subtitle: "Any Graduate and Specialist Course",
    age: "Age:(21 - 30), 35LPA+ 🤩",
    stages: "Pre, Mains, Interview",
    img: "public/sebi new.png",
    syllabus: "SEBI syllabus involves Reasoning, General Awareness, Finance & Management, and Subject-specific papers."
  },
  {
    title: "NABARD Grade A & B",
    subtitle: "Any Graduate and Specialist Course",
    age: "Age:(21 - 30), 20LPA+ 🥰",
    stages: "Pre, Mains, Interview",
    img: "public/nabard-old-removebg-preview.png",
    syllabus: "NABARD exam has Economics & Social issues, Agriculture & Rural Development, and Specific stream papers."
  },
  {
    title: "NHB Grade A",
    subtitle: "Any Graduate",
    age: "Age:(21 - 30), 20LPA+ 🫡",
    stages: "Pre, Mains, Interview",
    img: "public/nhb new.png",
    syllabus: "NHB syllabus includes Reasoning, Quantitative aptitude, English, General awareness, and Housing finance."
  },
  {
    title: "NPS Trust",
    subtitle: "Any Graduate",
    age: "Age:(21 - 30), 25LPA+ ☺️",
    stages: "Pre, Mains, Interview",
    img: "public/new nps.png",
   syllabus: "NPS includes English, Reasoning, Quantitative Aptitude, GA, Speaclist syllabus, followed by Mains and interview."
    
  },
  {
    title: "PFRDA Grade A",
    subtitle: "Any Graduate",
    age: "Age:(21 - 30), 30LPA+ 🥳",
    stages: "Pre, Mains, Interview",
    img: "public/PFRDA_L new.png",
    syllabus: "PFRDA includes English, Reasoning, Finance, and Regulatory Framework knowledge."
  },
  {
    title: "IFSCA",
    subtitle: "Any Graduate",
    age: "Age:(21 - 30), 30LPA+ 😎",
    stages: "Pre, Mains, Interview",
    img: "public/ifs new.png",
    syllabus: "IFSCA exam covers International financial services, Finance, Economics, and Reasoning."
  },
   {
    title: "IRDAI Grade A & B",
    subtitle: "Any Graduate",
    age: "Age:(21 - 30), 25LPA+ 🤗",
    stages: "Pre, Mains, Interview",
    img: "public/irdai new.png",
    syllabus: "IRDAI includes English, Reasoning, Quantitative Aptitude, Insurance, and Financial market awareness."
  }
];

const Exam = () => {
  return (
    <div className="six-boxes">
      {exams.map((exam, index) => (
        <label className="flip-card" key={index}>
          <input type="checkbox" className="card-toggle" hidden />
          <div className="box">
            <div className="box-inner">
              {/* Front Side */}
              <div className="box-front">
                <img src={exam.img} alt={exam.title} className="exam-image" />
                <h3>{exam.title}</h3>
                <h4>{exam.subtitle}</h4>
                <p><strong>{exam.age}</strong></p>
                {exam.stages && <p><strong>Exam Stages:</strong> {exam.stages}</p>}
                {exam.link && (
                  <a href={exam.link} target="_blank" rel="noopener noreferrer">
                    <button className="join">Join us</button>
                  </a>
                )}
              </div>

              {/* Back Side */}
              <div className="box-back">
                <h3>{exam.title} Syllabus</h3>
                <p>{exam.syllabus}</p>
              </div>
            </div>
          </div>
        </label>
      ))}
    </div>
  );
};

export default Exam;
