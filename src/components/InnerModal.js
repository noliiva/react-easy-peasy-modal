import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class InnerModal extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    document.body.addEventListener('click', this.onClickOutside);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.onClickOutside);
  }

  onClickOutside = (event) => {
    const { autoClose } = this.props;
    if (autoClose) {
      const elt = ReactDOM.findDOMNode(this.containerRef);
      if (elt && !elt.contains(event.target)) {
        this.props.close();
      }
    }
  }

  render() {
    const { children } = this.props;

    return (
      <children.type
        ref={this.containerRef}
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
