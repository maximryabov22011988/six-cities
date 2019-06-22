import React from 'react';
import renderer from 'react-test-renderer';

import Content from './Content';

it('Content correctly render', () => {
  const content = renderer.create(<Content />).toJSON();

  expect(content).toMatchSnapshot();
});
