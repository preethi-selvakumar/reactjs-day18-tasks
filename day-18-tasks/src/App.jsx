import React, { useState } from 'react';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
import Task6 from './components/Task6';
import Task7 from './components/Task7';
import Task8 from './components/Task8';
import Task9 from './components/Task9';
import Task10 from './components/Task10';
import Task11 from './components/Task11';
import Task12 from './components/Task12';
import Task13 from './components/Task13';
import MiniProject1 from './components/MiniProject1';
import MiniProject2 from './components/MiniProject2';
import MiniProject3 from './components/MiniProject3';
import MiniProject4 from './components/MiniProject4';

const sections = [
  { title: '3. Basic GET Request', component: <Task3 /> },
  { title: '4. Handle API Errors', component: <Task4 /> },
  { title: '5. Loading State', component: <Task5 /> },
  { title: '6. POST Request', component: <Task6 /> },
  { title: '7. PUT Request', component: <Task7 /> },
  { title: '8. DELETE Request', component: <Task8 /> },
  { title: '9. Global Axios Configuration', component: <Task9 /> },
  { title: '10. Axios Interceptors', component: <Task10 /> },
  { title: '11. Cancel API Requests', component: <Task11 /> },
  { title: '12. Retry Failed Requests', component: <Task12 /> },
  { title: '13. Async/Await with Axios', component: <Task13 /> },
  { title: 'Mini Project 1: User List', component: <MiniProject1 /> },
  { title: 'Mini Project 2: Product CRUD App', component: <MiniProject2 /> },
  { title: 'Mini Project 3: Weather App', component: <MiniProject3 /> },
  { title: 'Mini Project 4: Image Gallery', component: <MiniProject4 /> },
];

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style>{`
        .app-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .main-title {
          text-align: center;
          font-size: 32px;
          font-weight: bold;
          color: #34495e;
          margin-bottom: 40px;
        }

        .card {
          background-color: #f4f4f4;
          border-radius: 10px;
          margin-bottom: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: all 0.3s ease-in-out;
        }

        .card-header {
          padding: 20px;
          font-size: 18px;
          font-weight: bold;
          color: #2c3e50;
          background-color: #e0e0e0;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .card-header:hover {
          background-color: #d0d0d0;
        }

        .card-body {
          padding: 20px;
          background-color: #fff;
          animation: fadeIn 0.3s ease-in-out;
        }

        .card-body h2 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 24px;
          margin-bottom: 20px;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="app-container">
        <h1 className="main-title">ReactJS Day 18 Tasks</h1>
        {sections.map((section, index) => (
          <div className="card" key={index}>
            <div
              className="card-header"
              onClick={() => toggleSection(index)}
            >
              {section.title}
            </div>
            {openIndex === index && (
              <div className="card-body">
                <h2>{section.title}</h2>
                {section.component}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
