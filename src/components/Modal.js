import React from 'react';
import PropTypes from 'prop-types';

import { Consumer } from './Context';
import Portal from './Portal';
import Container from './Container';

const Modal = ({
  renderOverlay = () => null,
  autoClose,
  children,
}) => (
  <Consumer>
    {({ visible, close }) => visible && (
      <Portal>
        {
          renderOverlay({
            children: (
              <Container autoClose={autoClose} close={close} >
                {children({ close })}
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
