import React, { PropTypes } from 'react';

class Container extends React.Component {
  constructor(props, context) {
    console.log('%c Container -> constructor ', 'background: #222; color: #bada55');
    super(props, context);
  }

  componentWillMount() {
    console.log('%c Container -> componentWillMount ', 'background: #222; color: #bada55');
  }

  componentDidMount() {
    console.log('%c Container -> componentDidMount() ', 'background: #222; color: #bada55');
  }

  render() {
    console.log('%c Container -> render ', 'background: #222; color: #bada55');

    return (
      <h3>Container component</h3>
    );
  }
}

export default Container;
