import React from 'react';
import PropTypes from 'prop-types';

import './alert.scss';

const Alert = ({ errorText }) => <div className="alert">{errorText}</div>;

Alert.propTypes = {
  errorText: PropTypes.string,
};

Alert.defaultProps = {
  errorText: 'You did something wrong, check your actions',
};

export default Alert;
