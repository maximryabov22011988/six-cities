import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { get } from 'lodash';

import { code as serverAnswer } from '../../api';

interface Props {
  isRequireAuth: boolean,
}

/* eslint-disable */
class RedirectToLogin extends React.Component<Props> {
  render() {
    const { isRequireAuth } = this.props;
    if (isRequireAuth) {
      return <Redirect to="/login" />;
    }
    return null;
  }
}
/* eslint-disable */

const mapStateToProps = (state) => ({
  isRequireAuth: get(state, 'app.errors.status', null) === serverAnswer.REQUIRE_AUTH,
});

export default connect(mapStateToProps)(RedirectToLogin);
