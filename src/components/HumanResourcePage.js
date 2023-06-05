import React from 'react';
import './HumanResourcePage.css';

const HumanResourcePage = () => {
  return (
    <div className="human-resource-container">
      <h2 className="human-resource-header">Human Resource Page</h2>
      <div className="subsections-container">
        <div className="subsection">
          <h3 className="subsection-title">Recruitment</h3>
          <p className="subsection-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <input
              type="text"
              
              placeholder="Enter salary"

            />
        </div>
        <div className="subsection">
          <h3 className="subsection-title">Employee Relations</h3>
          <p className="subsection-description">Praesent consequat velit et neque consectetur.</p>
          <input
              type="text"
              
              placeholder="Enter salary"

            />
        </div>
        <div className="subsection">
          <h3 className="subsection-title">Training and Development</h3>
          <p className="subsection-description">Vestibulum semper lacus et tortor bibendum dapibus.</p>
          <input
              type="text"
              
              placeholder="Enter salary"

            />
        </div>
        {/* Add more subsections as needed */}
       
      </div>
    </div>
  );
};

export default HumanResourcePage;
