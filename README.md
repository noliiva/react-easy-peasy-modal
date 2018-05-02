# React easy-peasy modal ![alt text](https://img.shields.io/badge/state-not_tested-yellow.svg)

Just another react modal based on portal, context api and render props.


## Requirements
* react ^16.3.2
* react-dom ^16.3.2


## Example
```
import react from 'react';
import styled from 'styled-components';
import { Modal, ModalProvider, ModalConsumer } from 'react-easy-peasy-modal';

const Overlay = styled.div`
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  display: flex;
  background-color: rgba(0,0,0,0.5);
`;

const ModalContent = styled.div`
  position: relative;
  min-height: 50vh;
  max-height: 85vh;
  max-width: 60vw;
  margin: auto;
  padding: 2em;
  background: #FFF;
  box-shadow: 0 8px 16px rgba(0,0,0,0.45);
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1em;
  right: 1em;
`;

const renderOverlay = ({ children }) => <Overlay>{children}</Overlay>;

const MyComponent = () => (
  <ModalProvider>
    <ModalConsumer>
      {({ open }) => <button onClick={open} >Show my modal !</button>}
    </ModalConsumer>
    
    <Modal autoClose renderOverlay={renderOverlay} >
      {({ close }) => (
        <ModalContent>
          <CloseButton onClick={close} >X</CloseButton>
          Oh my modal !
        </ModalContent>
      )}
    </Modal>
  </ModalProvider>
);
```
