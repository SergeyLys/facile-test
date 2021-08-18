import React from 'react';
import {Button} from "../Button";
import {render} from "@testing-library/react";

describe('Button', () => {
  it('should render correctly', () => {
    const Component = render(<Button>Click me</Button>);
    expect(Component).toMatchSnapshot();
  });
});
