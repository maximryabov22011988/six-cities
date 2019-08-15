import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Select from './Select';
import { defaultId, options } from '../../../mocks/options';

it('Select renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <Select
        caption="Sort by"
        defaultOption={defaultId}
        options={options}
        onChangeSorting={jest.fn()}
      />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
