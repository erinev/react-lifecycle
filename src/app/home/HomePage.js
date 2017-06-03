import React from 'react';
import { Link } from 'react-router';
import Tevas from './Tevas';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h3>React lifecycle. Go back to <Link to="/Home">Home</Link></h3>
        <Tevas />
      </div>
    );
  }
}

export default HomePage;
