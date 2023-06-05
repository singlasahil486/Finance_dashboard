import React from 'react';
import './MarketingPage.css';

const MarketingPage = () => {
  return (
    <div className="marketing-container">
      <h2 className="marketing-header">Marketing Page</h2>
      <div className="subparts-container">
        <div className="subpart">
          <h3 className="subpart-title">Digital Marketing</h3>
          <p className="subpart-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="amount-fields">
            <label className="amount-label">Allotted Amount:</label>
            <input type="text" className="amount-input" />
            <label className="amount-label">Remaining Amount:</label>
            <input type="text" className="amount-input" />
          </div>
        </div>
        <div className="subpart">
          <h3 className="subpart-title">Social Media Marketing</h3>
          <p className="subpart-description">Praesent consequat velit et neque consectetur.</p>
          <div className="amount-fields">
            <label className="amount-label">Allotted Amount:</label>
            <input type="text" className="amount-input" />
            <label className="amount-label">Remaining Amount:</label>
            <input type="text" className="amount-input" />
          </div>
        </div>
        <div className="subpart">
          <h3 className="subpart-title">Content Marketing</h3>
          <p className="subpart-description">Vestibulum semper lacus et tortor bibendum dapibus.</p>
          <div className="amount-fields">
            <label className="amount-label">Allotted Amount:</label>
            <input type="text" className="amount-input" />
            <label className="amount-label">Remaining Amount:</label>
            <input type="text" className="amount-input" />
          </div>
        </div>
        {/* Add more subparts as needed */}
      </div>
    </div>
  );
};

export default MarketingPage;
