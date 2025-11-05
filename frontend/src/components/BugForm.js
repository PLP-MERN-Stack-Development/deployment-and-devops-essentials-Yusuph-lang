import React, { useState } from "react";
import "./BugForm.css";

const BugForm = ({ onBugAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Open");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const newBug = { title, description, status };

    try {
      const response = await fetch("http://localhost:5000/api/bugs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBug),
      });

      if (response.ok) {
        setMessage("✅ Bug added successfully!");
        setTitle("");
        setDescription("");
        setStatus("Open");
        const savedBug = await response.json();
        onBugAdded(savedBug);
      } else {
        setMessage("❌ Failed to add bug. Try again.");
      }
    } catch (error) {
      console.error("Error submitting bug:", error);
      setMessage("⚠️ Network error. Please try again later.");
    }
  };

  return (
    <form className="bug-form" onSubmit={handleSubmit}>
      <h3>Report a New Issue</h3>
      <input
        type="text"
        placeholder="Bug Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Bug Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Resolved">Resolved</option>
      </select>
      <button type="submit">Submit</button>
      {message && <p className="message">{message}</p>}
    </form>
  );
};

export default BugForm;
