import React from 'react';

class Tevas extends React.Component {
  constructor(props, context) {
    console.log('%c Tevas -> constructor ', 'background: #222; color: #bada55');
    super(props, context);

    this.state = {
      counter: 0
    };

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  componentWillMount() {
    console.log('%c Tevas -> componentWillMount ', 'background: #222; color: #bada55');
  }

  componentDidMount() {
    console.log('%c Tevas -> componentDidMount ', 'background: #222; color: #bada55');
    console.log('\n');
  }

  componentWillReceiveProps(nextProps) {
    console.log('%c Tevas -> componentWillReceiveProps ', 'background: #222; color: #bada55');
  }

  shouldComponentUpdate(nextProps, nextState) {
    let shouldComponentUpdate = true;

    /*if (nextState.counter < 0) {
      shouldComponentUpdate = false;
    }*/

    console.log(`%c Tevas -> shouldComponentUpdate: ${shouldComponentUpdate} `, 'background: #222; color: #bada55');

    return shouldComponentUpdate;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('%c Tevas -> componentWillUpdate ', 'background: #222; color: #bada55');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('%c Tevas -> componentDidUpdate ', 'background: #222; color: #bada55');
    console.log('\n');
  }

  componentWillUnmount() {
    console.log('%c Tevas -> componentWillUnmount ', 'background: #222; color: #bada55');
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
    console.log('%c Tevas -> render ', 'background: #222; color: #bada55');

    return (
      <div>
        <hr/>
        <h4>Tevas counter = { this.state.counter }</h4>
        <button type="button" onClick={ this.incrementCounter }>Inc Tevas</button>
        <button type="button" onClick={ this.decrementCounter }>Dec Tevas</button>
      </div>
    );
  }
}

export default Tevas;
