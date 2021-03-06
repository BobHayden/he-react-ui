import React from 'react';
import PropTypes from 'prop-types';

export default function Calendar(props) {
  const { className, ...restProps } = props;

  return (
    <svg
      className={className}
      {...restProps}
      viewBox="0 0 26 26"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(5.000000, 5.000000)">
        <path d="M4,2.5 L12,2.5 L12,1.5 C12,0.94771525 12.4477153,0.5 13,0.5 C13.5522847,0.5 14,0.94771525 14,1.5 L14,2.5 C15.1045695,2.5 16,3.3954305 16,4.5 L16,6 L16,14 C16,14.8284271 15.3284271,15.5 14.5,15.5 L1.5,15.5 C0.671572875,15.5 0,14.8284271 0,14 L0,6 L0,4.5 C-2.22044605e-16,3.3954305 0.8954305,2.5 2,2.5 L2,1.5 C2,0.94771525 2.44771525,0.5 3,0.5 C3.55228475,0.5 4,0.94771525 4,1.5 L4,2.5 Z M14,7.5 L2,7.5 L2,13.5 L14,13.5 L14,7.5 Z" />
      </g>
    </svg>
  );
}

Calendar.propTypes = {
  className: PropTypes.string,
};
