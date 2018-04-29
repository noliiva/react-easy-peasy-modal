import React from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext({});

export const { Consumer } = Context;

export class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
      open: this.open,
      close: this.close,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.visible !== this.props.visible) {
      this.setState({ visible: this.props.visible });
    }
  }

  open = () => this.setState({ visible: true });
  close = () => this.setState({ visible: false });

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
