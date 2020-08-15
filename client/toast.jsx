import React from 'react';
import PropTypes from 'prop-types';
import {
  ParentToastContainer, ToastContainer, ToastNotification, ToastExit,
} from './styles/ToastStyles';

const Toast = ({ showToast, name, addTo }) => (
  <ParentToastContainer>
    {showToast && (
      <ToastContainer>
        <ToastNotification data-testid="toast-name">
          <strong>{name}</strong>
          {' '}
          {addTo}
        </ToastNotification>
        <ToastExit>
          <strong>View</strong>
        </ToastExit>
      </ToastContainer>
    )}
  </ParentToastContainer>
);

Toast.propTypes = {
  name: PropTypes.string.isRequired,
  addTo: PropTypes.string.isRequired,
};

export default Toast;


//onclick, add object to state
  //for each object in state run another function that passes name and addTo to state then delays for 5 seconds