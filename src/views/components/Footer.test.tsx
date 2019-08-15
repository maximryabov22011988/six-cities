import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Footer from './Footer';

it('Footer renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <Footer className="footer container">
        {null}
      </Footer>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
