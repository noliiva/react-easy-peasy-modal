import React from 'react';
import PropTypes from 'prop-types';

import { Consumer } from './Context';
import Portal from './Portal';
import InnerModal from './InnerModal';

const Modal = ({
  renderOverlay = React.Fragment,
  autoClose,
  children,
  ...otherProps
}) => (
  <Consumer>
    {({ visible, close }) => visible && (
      <Portal>
        {renderOverlay({
          children: (
            <InnerModal autoClose={autoClose} close={close} >
              {children({ close, ...otherProps })}
            </InnerModal>
          ),
        })}
      </Portal>
    )}
  </Consumer>
);

Modal.propTypes = {
  renderOverlay: PropTypes.func,
  autoClose: PropTypes.bool,
  children: PropTypes.func,
};

export default Modal;
