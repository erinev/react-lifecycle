import React, { PropTypes } from 'react';
import AnukoZmona from './AnukoZmona';

class Anukas extends React.Component {
  constructor(props, context) {
    console.log('%c Anukas -> constructor ', 'background: #222; color: #E3CF20');
    super(props, context);

    this.state = {
      counter: 0
    };

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  componentWillMount() {
    console.log('%c Anukas -> componentWillMount ', 'background: #222; color: #E3CF20');
  }

  componentDidMount() {
    console.log('%c Anukas -> componentDidMount ', 'background: #222; color: #E3CF20');
  }

  componentWillReceiveProps(nextProps) {
    console.log('%c Anukas -> componentWillReceiveProps ', 'background: #222; color: #E3CF20');
  }

  shouldComponentUpdate(nextProps, nextState) {
    let shouldComponentUpdate = false;

    if (this.props.componentNameToRemove !== nextProps.componentNameToRemove ||
      this.props.vaikasCounter !== nextProps.vaikasCounter ||
      this.state.counter !== nextState.counter) {
      shouldComponentUpdate = true;
    }

    console.log(`%c Anukas -> shouldComponentUpdate: ${shouldComponentUpdate} `, 'background: #222; color: #E3CF20');

    return shouldComponentUpdate;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('%c Anukas -> componentWillUpdate ', 'background: #222; color: #E3CF20');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('%c Anukas -> componentDidUpdate ', 'background: #222; color: #E3CF20');
  }

  componentWillUnmount() {
    console.log('%c Anukas -> componentWillUnmount ', 'background: #222; color: #E3CF20');
  }

  incrementCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrementCounter() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    console.log('%c Anukas -> render ', 'background: #222; color: #E3CF20');
    console.log('\n');

    if (this.props.componentNameToRemove === 'Anukas') {
      return null;
    }

    return (
      <div>
        <hr/>
        <h4>Anukas</h4>
        <p>Tevas counter = { this.props.tevasCounter } | Vaikas counter = { this.props.vaikasCounter } | Anukas counter = { this.state.counter }</p>
        <button type="button" onClick={ this.incrementCounter }>Inc Anukas</button>
        <button type="button" onClick={ this.decrementCounter }>Dec Anukas</button>
        { this.props.componentNameToRemove !== 'AnukoZmona' &&
        <AnukoZmona tevasCounter={ this.props.tevasCounter } vaikasCounter={ this.props.vaikasCounter } anukasCounter={ this.state.counter } /> }
      </div>
    );
  }
}

Anukas.propTypes = {
  componentNameToRemove: PropTypes.string.isRequired,
  tevasCounter: PropTypes.number.isRequired,
  vaikasCounter: PropTypes.number.isRequired
};

export default Anukas;
