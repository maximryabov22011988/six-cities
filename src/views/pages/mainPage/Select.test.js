import React from 'react';
import renderer from 'react-test-renderer';

import Select from './Select';

const optionsMock = [{ id: 1, name: 'Popular' }];

const defaultOptionId = 1;

it('Select correctly render', () => {
  const select = renderer
    .create(
      <Select
        caption="Sort by"
        options={optionsMock}
        defaultOption={defaultOptionId}
      />
    )
    .toJSON();

  expect(select).toMatchSnapshot();
});
