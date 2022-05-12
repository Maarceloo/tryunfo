import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <div>
          <Form />
        </div>
        <div>
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
