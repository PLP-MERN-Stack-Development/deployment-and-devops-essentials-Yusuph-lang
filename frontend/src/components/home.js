import React, { useState, useEffect } from "react";
import "./Home.css";
import BugForm from "./BugForm";

// ✅ Function to fetch bugs from backend API
const getBugs = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/bugs"); // adjust backend port if needed
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching bugs:", error);
    return [];
  }
};

const Home = () => {
  const [bugs, setBugs] = useState([]);

  // ✅ Fetch bugs when the page loads
  useEffect(() => {
    async function fetchData() {
      const result = await getBugs();
      setBugs(result);
    }
    fetchData();
  }, []);

  return (
    <div className="home-container">
      {/* 🌍 Hero Section */}
      <header className="hero">
        <h1>SDG 1 – No Poverty</h1>
        <p>Together, we can end poverty in all its forms everywhere.</p>
      </header>

      {/* 🧠 About Section */}
      <section className="intro">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Sustainable_Development_Goal_01NoPoverty.svg"
          alt="SDG 1 Logo"
          className="goal-image"
        />
        <div className="text">
          <h2>About SDG 1</h2>
          <p>
            <strong>Sustainable Development Goal 1 (SDG 1)</strong> aims to end
            poverty in all its forms by 2030. It focuses on providing access to
            basic needs like food, shelter, healthcare, and education while
            ensuring equality of opportunity.
          </p>
          <p>
            This web app contributes to SDG 1 by allowing communities,
            developers, and organizations to <strong>report and track issues</strong> that
            hinder poverty reduction efforts.
          </p>
        </div>
      </section>

      {/* 📊 Key Facts */}
      <section className="facts">
        <h2>Key Facts</h2>
        <ul>
          <li>
            Over <strong>700 million</strong> people live below the poverty line.
          </li>
          <li>1 in 5 children live in extreme poverty.</li>
          <li>
            Empowerment, education, and innovation can break the cycle of
            poverty.
          </li>
        </ul>
      </section>

      {/* 🚀 Bug Tracker Section */}
      <section className="bug-tracker">
        <h2>Community Bug Tracker</h2>
        <p>
          Below is a list of challenges, issues, or “bugs” reported in ongoing
          SDG 1 poverty reduction projects. This tool helps teams resolve them
          quickly and transparently.
        </p>
<BugForm onBugAdded={(newBug) => setBugs([...bugs, newBug])} />

        {bugs.length > 0 ? (
          <ul className="bug-list">
            {bugs.map((bug) => (
              <li key={bug._id} className="bug-item">
                <h3>{bug.title}</h3>
                <p>{bug.description}</p>
                <p>
                  <strong>Status:</strong> {bug.status}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-bugs">No issues reported yet. 🎉</p>
        )}
      </section>

      {/* 🕊 Mission Section */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          The <strong>SDG 1 Bug Tracker</strong> supports collaboration among
          developers and organizations to identify, resolve, and learn from
          challenges faced during poverty reduction efforts.
        </p>
      </section>

      {/* 🔗 Footer */}
      <footer>
        <p>
          Learn more about SDG 1 at{" "}
          <a
            href="https://sdgs.un.org/goals/goal1"
            target="_blank"
            rel="noopener noreferrer"
          >
            United Nations SDG Portal
          </a>
        </p>
        <p>© {new Date().getFullYear()} SDG 1 Development Team</p>
      </footer>
    </div>
  );
};

export default Home;


