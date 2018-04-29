import React from 'react';
import PropTypes from 'prop-types';

import { Consumer } from './Context';
import Portal from './Portal';
import Container from './Container';

const Modal = ({
  renderOverlay = () => null,
  autoClose,
  children,
  ...otherProps
}) => (
  <Consumer>
    {({ visible, close }) => visible && (
      <Portal>
        {
          renderOverlay({
            children: (
              <Container autoClose={autoClose} >
                {children({ close, ...otherProps })}
              </Container>
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
