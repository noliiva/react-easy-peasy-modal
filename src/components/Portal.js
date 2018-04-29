import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Portal extends React.Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('div');
    this.container.className = 'overlay';

    this.body = document.body;
  }

  componentDidMount() {
    document.documentElement.setAttribute('class', 'withOverlay');
    this.body.appendChild(this.container);
  }

  componentWillUnmount() {
    document.documentElement.removeAttribute('class');
    this.body.removeChild(this.container);
  }

  render() {
    const { children } = this.props;

    return ReactDOM.createPortal(children, this.container);
  }
}

Portal.propTypes = {
  children: PropTypes.node,
};

export default Portal;
