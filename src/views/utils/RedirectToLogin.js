import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { get } from 'lodash';

import { code as serverAnswer } from '../../api';

const propTypes = {
  isRequireAuth: PropTypes.bool.isRequired,
};

/* eslint-disable */
class RedirectToLogin extends React.Component {
  render() {
    const { isRequireAuth } = this.props;
    if (isRequireAuth) {
      return <Redirect to="/login" />;
    }
    return null;
  }
}
/* eslint-disable */

RedirectToLogin.propTypes = propTypes;

const mapStateToProps = (state) => ({
  isRequireAuth: get(state, 'app.errors.status', null) === serverAnswer.REQUIRE_AUTH,
});

export default connect(mapStateToProps)(RedirectToLogin);
