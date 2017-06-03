import React, { PropTypes } from 'react';
import Anukas from './Anukas';

class Vaikas extends React.Component {
  constructor(props, context) {
    console.log('%c Vaikas -> constructor ', 'background: #222; color: #FF5733');
    super(props, context);

    this.state = {
      counter: 0
    };

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  componentWillMount() {
    console.log('%c Vaikas -> componentWillMount ', 'background: #222; color: #FF5733');
  }

  componentDidMount() {
    console.log('%c Vaikas -> componentDidMount ', 'background: #222; color: #FF5733');
  }

  componentWillReceiveProps(nextProps) {
    console.log('%c Vaikas -> componentWillReceiveProps ', 'background: #222; color: #FF5733');
  }

  shouldComponentUpdate(nextProps, nextState) {
    let shouldComponentUpdate = false;

    if (this.props.componentNameToRemove !== nextProps.componentNameToRemove ||
      this.props.tevasCounter !== nextProps.tevasCounter ||
      this.state.counter !== nextState.counter) {
      shouldComponentUpdate = true;
    }

    console.log(`%c Vaikas -> shouldComponentUpdate: ${shouldComponentUpdate} `, 'background: #222; color: #FF5733');

    return shouldComponentUpdate;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('%c Vaikas -> componentWillUpdate ', 'background: #222; color: #FF5733');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('%c Vaikas -> componentDidUpdate ', 'background: #222; color: #FF5733');
  }

  componentWillUnmount() {
    console.log('%c Vaikas -> componentWillUnmount ', 'background: #222; color: #FF5733');
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
    console.log('%c Vaikas -> render ', 'background: #222; color: #FF5733');
    console.log('\n');

    if (this.props.componentNameToRemove === 'Vaikas') {
      return null;
    }

    return (
      <div>
        <hr/>
        <h4>Vaikas</h4>
        <p>Tevas counter = { this.props.tevasCounter } | Vaikas counter = { this.state.counter }</p>
        <button type="button" onClick={ this.incrementCounter }>Inc Vaikas</button>
        <button type="button" onClick={ this.decrementCounter }>Dec Vaikas</button>

        { this.props.componentNameToRemove !== 'Anukas' && <Anukas componentNameToRemove = { this.props.componentNameToRemove } tevasCounter={ this.props.tevasCounter } vaikasCounter={ this.state.counter } /> }
      </div>
    );
  }
}

Vaikas.propTypes = {
  componentNameToRemove: PropTypes.string.isRequired,
  tevasCounter: PropTypes.number.isRequired
};

export default Vaikas;
