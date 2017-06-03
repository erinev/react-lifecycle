import React from 'react';
import { Link } from 'react-router';
import Tevas from './Tevas';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      componentNameToRemove: ''
    };

    this.removeComponent = this.removeComponent.bind(this);
    this.displayAllComponents = this.displayAllComponents.bind(this);
  }

  removeComponent(event) {
    this.setState({
      componentNameToRemove: event.target.getAttribute('data-component-name')
    });
    console.log(event.target.getAttribute('data-component-name'));
  }

  displayAllComponents() {
    this.setState({
      componentNameToRemove: ''
    });
  }

  render() {
    return (
      <div>
        <h3>React lifecycle. Go back to <Link to="/Home">Home</Link></h3>
        <p>
          <button type="button" data-component-name="Tevas" onClick={ this.removeComponent }>Remove Tevas</button>
          <button type="button" data-component-name="Vaikas" onClick={ this.removeComponent }>Remove Vaikas</button>
          <button type="button" data-component-name="Anukas" onClick={ this.removeComponent }>Remove Anukas</button>
          <button type="button" data-component-name="AnukoZmona" onClick={ this.removeComponent }>Remove AnukoZmona</button>
          <button type="button" onClick={ this.displayAllComponents }>Display All</button>
        </p>

        { this.state.componentNameToRemove !== 'Tevas' && <Tevas componentNameToRemove={ this.state.componentNameToRemove } /> }
      </div>
    );
  }
}

export default HomePage;
