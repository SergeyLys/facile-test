import React from 'react';
import {Collapsable} from "../Collapsable";
import {render} from "@testing-library/react";

describe('Collapsable', () => {
  it('should render correctly', () => {
    const Component = render(
      <Collapsable>
        <Collapsable.Panel header={<p>Header</p>}>
          <p>Content</p>
        </Collapsable.Panel>
      </Collapsable>
    );
    expect(Component).toMatchSnapshot();
  });
});
