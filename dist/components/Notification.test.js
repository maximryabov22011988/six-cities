'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const renderer = require('react-test-renderer');
const Notification_1 = require('./Notification');
it('Notification correctly render', () => {
  const tree = renderer
    .create(React.createElement(Notification_1.Notification, { show: true, message: 'Error' }))
    .toJSON();
  expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Notification.test.js.map
