import React from 'react';
import './style.css'

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>, ...arg: any) => void;
}

export const Button: React.FC<Props> = ({ children, onClick }) => (
  <button onClick={onClick} className="button">{children}</button>
);
