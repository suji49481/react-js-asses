import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rollNo: ''
  });

  const handleApplyClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      {!showForm && (
        <div className="box">
          <h2>MERN stack Developer</h2>
          <button onClick={handleApplyClick}>Apply Now</button>
        </div>
      )}

      {showForm && !submitted && (
        <form className="box" onSubmit={handleSubmit}>
          <h2>MERN stack Developer</h2>
          <input
            type="text"
            name="name"
            placeholder="Register your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="rollNo"
            placeholder="Enter your roll_no"
            value={formData.rollNo}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit now</button>
        </form>
      )}

      {submitted && (
        <div className="success-box">
          <p>You have been submitted successfully</p>
        </div>
      )}
    </div>
  );
};

export default App;
