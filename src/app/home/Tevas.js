import React, { PropTypes } from 'react';
import Vaikas from './Vaikas';

class Tevas extends React.Component {
  constructor(props, context) {
    // right place to initialize state and perform binding for functions

    console.log('%c Tevas -> constructor ', 'background: #222; color: #bada55');
    super(props, context);

    this.state = {
      counter: 0
    };

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  componentWillMount() {
    // This is the only lifecycle hook called on server rendering
    // calling this.setState() within this method will not trigger a re-render
    // in most cases constructor can be used instead of componentWillMount
    // Avoid introducing any side-effects or subscriptions in this method.

    console.log('%c Tevas -> componentWillMount ', 'background: #222; color: #bada55');
  }

  componentDidMount() {
    // invoked immediately after React inserts the component into the DOM
    // good place to call some API to get required data if we want to initialize component with some predefined data
    // Initialization that requires DOM nodes should go here
    // Setting state in this method will trigger a re-rendering.

    console.log('%c Tevas -> componentDidMount ', 'background: #222; color: #bada55');
  }

  componentWillReceiveProps(nextProps) {
    //If you need to update the state in response to prop changes (for example, to reset it),
    // you may compare this.props and nextProps and perform state transitions using this.setState() in this method.
    // Note that React may call this method even if the props have not changed, so make sure to compare the current and next values if you only want to handle changes.
    // This may occur when the parent component causes your component to re-render.
    // React doesn't call componentWillReceiveProps with initial props during mounting.
    // It only calls this method if some of component's props may update.

    console.log('%c Tevas -> componentWillReceiveProps ', 'background: #222; color: #bada55');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // This method is not called for the initial render or when forceUpdate() is used.
    // Returning false does not prevent child components from re-rendering when their state changes.
    // if shouldComponentUpdate() returns false, then componentWillUpdate(), render(), and componentDidUpdate() will not be invoked.
    // Note that in the future React may treat shouldComponentUpdate() as a hint rather than a strict directive,
    // and returning false may still result in a re-rendering of the component.

    // Performance: https://facebook.github.io/react/docs/optimizing-performance.html
    // If your component got more complex, you could use a similar pattern of doing a "shallow comparison"
    // between all the fields of props and state to determine if the component should update.
    // This pattern is common enough that React provides a helper to use this logic - just inherit from React.PureComponent.
    //  It only does a shallow comparison, so you can't use it if the props or state may have been mutated in a way that a shallow comparison would miss.
    // The simplest way to avoid this problem is to avoid mutating values that you are using as props or state
    // IMPORTANT! For performance boost:
    // Don't mutate data and extend pure component (shallow comparison implemented by default) class ListOfWords extends React.PureComponent

    // Explanation: https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/update/using_should_component_update.html

    // Anti-pattern when optimizing performance: https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f

    let shouldComponentUpdate = true;

    if (this.props.componentNameToRemove === nextProps.componentNameToRemove && this.state.counter < 0) {
      shouldComponentUpdate = false;
      this.setState({
        counter: 0
      });
    }

    console.log(`%c Tevas -> shouldComponentUpdate: ${shouldComponentUpdate} `, 'background: #222; color: #bada55');

    return shouldComponentUpdate;
  }

  componentWillUpdate(nextProps, nextState) {
    // is invoked immediately before rendering when new props or state are being received.
    // Use this as an opportunity to perform preparation before an update occurs.
    // This method is not called for the initial render.
    // Note that you cannot call this.setState() here.
    // If you need to update state in response to a prop change, use componentWillReceiveProps() instead.

    console.log('%c Tevas -> componentWillUpdate ', 'background: #222; color: #bada55');
  }

  componentDidUpdate(prevProps, prevState) {
    // Use this as an opportunity to operate on the DOM when the component has been updated.
    // This is also a good place to do network requests as long as you compare the current props to previous props
    // (e.g. a network request may not be necessary if the props have not changed).
    // Common case for this method is when we are using a third party library that needs the rendered DOM to perform its job.
    // We initialize the library the first time in the componentDidMount() method but after some prop or state change
    // that triggers a DOM update we need to update as well the third-party library to keep our interface consistent.

    console.log('%c Tevas -> componentDidUpdate ', 'background: #222; color: #bada55');
  }

  componentWillUnmount() {
    // Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests,
    // or cleaning up any DOM elements that were created in componentDidMount

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
    // When called, it should examine this.props and this.state and return a single React element.
    // You can also return null or false to indicate that you don't want anything rendered.
    // The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it's invoked
    // If you need to interact with the browser, perform your work in componentDidMount() or the other lifecycle methods instead
    // render() will not be invoked if shouldComponentUpdate() returns false.

    console.log('%c Tevas -> render ', 'background: #222; color: #bada55');
    console.log('\n');

    return (
      <div>
        <hr/>
        <h4>Tevas</h4>
        <p>Tevas counter = { this.state.counter }</p>
        <button type="button" onClick={ this.incrementCounter }>Inc Tevas</button>
        <button type="button" onClick={ this.decrementCounter }>Dec Tevas</button>

        { this.props.componentNameToRemove !== 'Vaikas' &&
        <Vaikas componentNameToRemove = { this.props.componentNameToRemove } tevasCounter = { this.state.counter } /> }
      </div>
    );
  }
}

Tevas.propTypes = {
  componentNameToRemove: PropTypes.string.isRequired
};

export default Tevas;
