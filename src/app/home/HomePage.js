import React from 'react';
import Container from './Container';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h2>React lifecycle</h2>
        <hr/>
        <Container />
      </div>
    );
  }
}

export default HomePage;
