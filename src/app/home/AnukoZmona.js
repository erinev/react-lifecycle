import React, { PropTypes } from 'react';

class AnukoZmona extends React.Component {
  constructor(props, context) {
    console.log('%c AnukoZmona -> constructor ', 'background: #222; color: #88E320');
    super(props, context);

    this.state = {
      counter: 0
    };

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  componentWillMount() {
    console.log('%c AnukoZmona -> componentWillMount ', 'background: #222; color: #88E320');
  }

  componentDidMount() {
    console.log('%c AnukoZmona -> componentDidMount ', 'background: #222; color: #88E320');
  }

  componentWillReceiveProps(nextProps) {
    console.log('%c AnukoZmona -> componentWillReceiveProps ', 'background: #222; color: #88E320');
  }

  shouldComponentUpdate(nextProps, nextState) {
    let shouldComponentUpdate = false;

    if (this.props.anukasCounter !== nextProps.anukasCounter || this.state.counter !== nextState.counter) {
      shouldComponentUpdate = true;
    }

    console.log(`%c AnukoZmona -> shouldComponentUpdate: ${shouldComponentUpdate} `, 'background: #222; color: #88E320');

    return shouldComponentUpdate;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('%c AnukoZmona -> componentWillUpdate ', 'background: #222; color: #88E320');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('%c AnukoZmona -> componentDidUpdate ', 'background: #222; color: #88E320');
  }

  componentWillUnmount() {
    console.log('%c AnukoZmona -> componentWillUnmount ', 'background: #222; color: #88E320');
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
    console.log('%c AnukoZmona -> render ', 'background: #222; color: #88E320');
    console.log('\n');

    return (
      <div>
        <h4>AnukoZmona</h4>
        <p>Vaikas counter = { this.props.vaikasCounter } | Anukas counter = { this.props.anukasCounter } | AnukoZmona counter = { this.state.counter }</p>
        <button type="button" onClick={ this.incrementCounter }>Inc AnukoZmona</button>
        <button type="button" onClick={ this.decrementCounter }>Dec AnukoZmona</button>
      </div>
    );
  }
}

AnukoZmona.propTypes = {
  vaikasCounter: PropTypes.number.isRequired,
  anukasCounter: PropTypes.number.isRequired
};

export default AnukoZmona;
