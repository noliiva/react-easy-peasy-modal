import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class InnerModal extends React.Component {
  componentDidMount() {
    document.body.addEventListener('click', this.onClickOutside);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.onClickOutside);
  }

  onClickOutside = (event) => {
    const { autoClose } = this.props;
    if (autoClose) {
      const container = ReactDOM.findDOMNode(this.containerRef);
      if (container && !container.contains(event.target)) {
        this.props.close();
      }
    }
  }

  render() {
    const { children } = this.props;

    return (
      <children.type
        ref={(node) => { this.containerRef = node; }}
        {...children.props}
      />
    );
  }
}

InnerModal.propTypes = {
  close: PropTypes.func,
  autoClose: PropTypes.bool,
  children: PropTypes.node,
};

export default InnerModal;
