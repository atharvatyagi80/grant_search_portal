import React from 'react';

function ActionButtons({ selectedGrant }) {
  return (
    <div className="action-buttons">
      <h3>Selected Grant: {selectedGrant.title}</h3>
      <button id="download-pdf">Download PDF</button>
      <button id="submit-application">Submit Grant Application</button>
    </div>
  );
}

export default ActionButtons;
