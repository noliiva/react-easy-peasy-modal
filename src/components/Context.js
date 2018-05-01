/* eslint-disable react/no-unused-state */

import React from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext({});

export const { Consumer } = Context;

export class Provider extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    return { ...prevState, visible: nextProps.visible };
  }

  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
      open: this.open,
      close: this.close,
    };
  }

  open = () => { this.setState({ visible: true }); };
  close = () => { this.setState({ visible: false }); };

  render() {
    return (
      <Context.Provider value={this.state} >
        {this.props.children}
      </Context.Provider>
    );
  }
}

Provider.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node,
};

/* eslint-enable react/no-unused-state */
