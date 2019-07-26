import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import withActiveItem from '../../../hocs/withActiveItem';

import { ENTER, ESC, MOUSE_LEFT_BUTTON } from '../../../constants/keyCodes';

const propTypes = {
  caption: PropTypes.string.isRequired,
  defaultOption: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
  onChangeSorting: PropTypes.func.isRequired,
};

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentOption: props.defaultOption,
      isOpen: false,
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

  getCurrentOptionText() {
    const { currentOption } = this.state;
    const { options } = this.props;
    return options.find((item) => item.id === currentOption).name;
  }

  handleOpen = () => {
    this.setState({
      isOpen: true,
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  handleOutsideClick = (evt) => {
    evt.preventDefault();
    const { target } = evt;
    const { isOpen } = this.state;
    if (isOpen && !this.selectRef.current.contains(target)) {
      this.handleClose();
    }
  };

  handleOptionClick = (id) => (evt) => {
    const { nativeEvent } = evt;
    const { onChangeSorting } = this.props;
    if (nativeEvent.which === MOUSE_LEFT_BUTTON || nativeEvent.which === ENTER) {
      this.setState(
        {
          currentOption: id,
        },
        () => onChangeSorting(this.getCurrentOptionText())
      );
      this.handleClose();
    }
  };

  handleEscPress = (evt) => {
    const { nativeEvent } = evt;
    if (nativeEvent && nativeEvent.which === ESC) {
      this.handleClose();
    }
  };

  renderOptionItems = (options, currentOption) => {
    return options.map(({ id, name }) => {
      const Option = ({ className, onClick, onKeyUp, children }) => (
        <li className={className} tabIndex="0" onClick={onClick} onKeyUp={onKeyUp}>
          {children}
        </li>
      );
      const WrappedOption = withActiveItem(Option);

      return (
        <WrappedOption
          className="places__option"
          isActive={currentOption === id}
          key={id}
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
        ref={this.selectRef}
        tabIndex="0"
        onClick={this.handleOutsideClick}
        onKeyDown={this.handleEscPress}
      >
        {caption && <span className="places__sorting-caption">{caption}</span>}

        <span className="places__sorting-type" tabIndex="0" onClick={this.handleOpen} onFocus={this.handleOpen}>
          {this.getCurrentOptionText()}
          <svg className="places__sorting-arrow" height="4" width="7">
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>

        {isOpen && (
          <ul className={cn('places__options places__options--custom', isOpen && 'places__options--opened')}>
            {this.renderOptionItems(options, currentOption)}
          </ul>
        )}
      </div>
    );
  }
}

Select.propTypes = propTypes;

export default Select;
