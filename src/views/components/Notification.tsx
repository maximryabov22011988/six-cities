import * as React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import { get } from 'lodash';

import SvgIcon from './SvgIcon';

import nameSpace from '../../state/name-spaces';

interface Props {
  message: string;
  show: boolean;
}

interface State {
  show: boolean;
}

class Notification extends React.Component<Props, State> {
  timer: number;

  state = {
    show: false,
  };

  componentDidUpdate(prevProps) {
    const { show } = this.props;
    if (prevProps.show !== show && show === true) {
      this.setState({
        show: true,
      });

      this.timer = window.setTimeout(() => {
        this.setState({
          show: false,
        });
      }, 5000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleHide = (evt) => {
    evt.preventDefault();
    this.setState({
      show: false,
    });
  };

  render() {
    const { message } = this.props;
    const { show } = this.state;

    return (
      <div className={cn('notification', show && 'notification--show')}>
        <span>
          <SvgIcon height="20" name="icon-error" width="20" />
          Error
        </span>
        <button className="notification__btn-close" onClick={this.handleHide}>
          <SvgIcon height="14" name="icon-close" width="14" />
        </button>

        {message}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  show: Boolean(get(state[nameSpace.APP], 'errors', false)),
  message: get(state[nameSpace.APP], 'errors.message', ''),
});

export { Notification };

export default connect(mapStateToProps)(Notification);
