import React from 'react';
import './style.css'

export const Loader: React.FC = () => (
  <div className="loader">
    <svg xmlns="http://www.w3.org/2000/svg" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <path d="M30 50A20 20 0 0 0 70 50A20 22 0 0 1 30 50" fill="#0089cc" stroke="none">
        <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51;360 50 51"></animateTransform>
      </path>
    </svg>
  </div>
);
