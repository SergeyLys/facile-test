import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css'

type Props = {
  handleClose: () => void;
}

export const Modal: React.FC<Props> = ({ children, handleClose }) => {
  const [containerEl] = useState(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(containerEl);

    return () => {
      document.body.removeChild(containerEl);
    };
  });

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    containerEl
  );
};
