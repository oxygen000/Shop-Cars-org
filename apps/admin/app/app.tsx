import { Component } from 'react';
import NxWelcome from './nx-welcome';

export class App extends Component {
  override render() {
    return (
      <div>
        <NxWelcome title="admin" />
      </div>
    );
  }
}

export default App;
