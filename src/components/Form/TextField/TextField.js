/**
 *
 * TextField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../../Icon';
import style from './TextField.scss';

class TextField extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    description: PropTypes.string,
    error: PropTypes.string,
    inline: PropTypes.bool,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    marker: PropTypes.bool,
    isValid: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
  };

  static defaultProps = {
    label: 'Field',
    disabled: false,
    inline: false,
    marker: false,
    value: '',
    isValid: true,
    onBlur: () => {},
    onChange: () => {},
    onFocus: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleFocus = e => {
    const event = {
      value: e.target.value,
      props: this.props,
    };

    this.setState({
      focused: true,
    });
    this.props.onFocus(event);
  };

  handleBlur = e => {
    const event = {
      value: e.target.value,
      props: this.props,
    };

    this.setState({
      focused: false,
    });
    this.props.onBlur(event);
  };

  handleChange = e => {
    const event = {
      value: e.target.value,
      props: this.props,
    };
    this.props.onChange(event);
  };

  render() {
    const {
      className,
      id,
      name,
      label,
      description,
      value,
      disabled,
      error,
      inline,
      marker,
      onBlur,
      onChange,
      onFocus,
      isValid,
      ...restProps
    } = this.props;
    const { focused } = this.state;
    const floating = focused || value !== '';
    const classes = classnames(style.outer, {
      [style.invalid]: !isValid,
      [style.disabled]: disabled,
      [style.inline]: inline,
      [style.focused]: focused,
      [style.hasMarker]: marker,
      [className]: className,
    });

    return (
      <div className={classes} {...restProps}>
        <div className={style.block}>
          <label
            className={classnames(style.label, { [style.floating]: floating })}
            htmlFor={id}
          >
            {label}
          </label>
          <input
            className={style.input}
            id={id}
            name={name}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            disabled={disabled}
            value={value}
          />
          {marker &&
            value !== '' && (
              <Icon
                name={isValid ? 'Tick' : 'Cross'}
                className={style.marker}
              />
            )}
        </div>
        {(description || error) && (
          <label htmlFor={id} className={style.description}>
            {error || description}
          </label>
        )}
      </div>
    );
  }
}

export default TextField;
