import React from 'react';
import {Input} from "../Input";
import {render} from "@testing-library/react";

describe('Input', () => {
  it('should render correctly', () => {
    const Component = render(<Input onChange={() => {}} />);
    expect(Component).toMatchSnapshot();
  });
});
