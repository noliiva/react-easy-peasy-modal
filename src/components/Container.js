import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Container extends React.Component {
  componentDidMount() {
    document.body.addEventListener('click', this.onClickOutside);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.onClickOutside);
  }

  onClickOutside = (event) => {
    const { autoClose } = this.props;
    if (autoClose) {
      const elt = ReactDOM.findDOMNode(this.container);
      if (elt && !elt.contains(event.target)) {
        this.props.close();
      }
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div ref={(node) => { this.container = node; }} >
        {children}
      </div>
    );
  }
}

Container.propTypes = {
  close: PropTypes.func,
  autoClose: PropTypes.bool,
  children: PropTypes.node,
};

export default Container;
