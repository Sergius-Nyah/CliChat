import React from 'react';
import { auth } from './firebase';

class App extends React.Component {
  state = { user: null };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  render() {
    if (this.state.user) {
      return <Chat user={this.state.user} />;
    } else {
      return <Login />;
    }
  }
}

export default App;