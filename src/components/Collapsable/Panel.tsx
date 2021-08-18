import React, {useState} from 'react';

export type Props = {
  header: React.ReactNode;
  isOpen?: boolean;
}

export const Panel: React.FC<Props> = ({ children, header, isOpen}) => {
  const [isCollapsed, setCollapsed] = useState<boolean>(isOpen || true);
  return (
    <div>
      <div className="collapsable-row-title" onClick={() => setCollapsed(!isCollapsed)}>{header}</div>
      {!isCollapsed && <div className="collapsable-row-content">{children}</div>}
    </div>
  )
};

