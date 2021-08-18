import React, {ChangeEvent} from 'react';
import './style.css'

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const Input: React.FC<Props> = ({ children, placeholder, onChange }) => (
  <input placeholder={placeholder} onChange={onChange} className="input">{children}</input>
);
