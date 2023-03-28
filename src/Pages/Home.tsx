import React from 'react';

function TopBanner() {
  return (
    <>
      <div className="row">
        <div className="col-5">
          <img src="./1.jpg" alt="Company Logo" />
        </div>

        <div className="col align-self-center text-start">
          <h1>Joe Hilton's Movie Collection</h1>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
