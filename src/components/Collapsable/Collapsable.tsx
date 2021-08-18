import React, {Children, isValidElement} from 'react';
import {Panel, Props as PanelProps} from "./Panel";
import './styles.css'

type Props = {}

type ICollapsable = React.FC<Props> & {
  Panel: React.FC<PanelProps>
}

export const Collapsable: ICollapsable = ({children}) => {
  return (
    <div className="collapsable">
      {Children.map(children, (child) => {
        if (isValidElement(child) && child.type === Panel) {
          return child;
        }
      })}
    </div>
  )
};

Collapsable.Panel = Panel;
