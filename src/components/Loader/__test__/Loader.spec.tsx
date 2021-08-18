import React from 'react';
import {Loader} from "../Loader";
import {render} from "@testing-library/react";

describe('Loader', () => {
  it('should render correctly', () => {
    const Component = render(<Loader />);
    expect(Component).toMatchSnapshot();
  });
});
