import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import withActiveItem from '../../hocs/withActiveItem';

import { ENTER, ESC, MOUSE_LEFT_BUTTON } from '../../constants/keyCodes';

const propTypes = {
  caption: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  ).isRequired,
  defaultOption: PropTypes.number.isRequired
};

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentOption: props.defaultOption,
      isOpen: false
    };

    this.selectRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('click', this.handleOutsideClick);
    window.addEventListener('keydown', this.handleEscPress);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleOutsideClick);
    window.addEventListener('keydown', this.handleEscPress);
  }

  get currentOptionText() {
    const { currentOption } = this.state;
    const { options } = this.props;
    return options.find(item => item.id === currentOption).name;
  }

  handleOpen = () => {
    this.setState({
      isOpen: true
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false
    });
  };

  handleOutsideClick = evt => {
    evt.preventDefault();
    const { target } = evt;
    const { isOpen } = this.state;
    if (isOpen && !this.selectRef.current.contains(target)) {
      this.handleClose();
    }
  };

  handleOptionClick = id => evt => {
    const { nativeEvent } = evt;
    if (
      nativeEvent.which === MOUSE_LEFT_BUTTON ||
      nativeEvent.which === ENTER
    ) {
      this.setState({
        currentOption: id
      });
      this.handleClose();
    }
  };

  handleEscPress = evt => {
    const { nativeEvent } = evt;
    if (nativeEvent && nativeEvent.which === ESC) {
      this.handleClose();
    }
  };

  renderOptionItems = (options, currentOption) => {
    return options.map(({ id, name }) => {
      const Option = ({ className, onClick, onKeyUp, children }) => (
        <li
          className={className}
          tabIndex="0"
          onClick={onClick}
          onKeyUp={onKeyUp}
        >
          {children}
        </li>
      );
      const WrappedOption = withActiveItem(Option);

      return (
        <WrappedOption
          key={id}
          className="places__option"
          isActive={currentOption === id}
          onClick={this.handleOptionClick(id)}
          onKeyUp={this.handleOptionClick(id)}
        >
          {name}
        </WrappedOption>
      );
    });
  };

  render() {
    const { currentOption, isOpen } = this.state;
    const { caption, options } = this.props;

    return (
      <div
        className="places__sorting"
        tabIndex="0"
        ref={this.selectRef}
        onClick={this.handleOutsideClick}
        onKeyDown={this.handleEscPress}
      >
        {caption && <span className="places__sorting-caption">{caption}</span>}

        <span
          className="places__sorting-type"
          tabIndex="0"
          onClick={this.handleOpen}
          onFocus={this.handleOpen}
        >
          {this.currentOptionText}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>

        {isOpen && (
          <ul
            className={classnames(
              'places__options places__options--custom',
              isOpen && 'places__options--opened'
            )}
          >
            {this.renderOptionItems(options, currentOption)}
          </ul>
        )}
      </div>
    );
  }
}

Select.propTypes = propTypes;

export default Select;
