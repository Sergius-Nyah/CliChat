import React from 'react';
import { auth } from './firebase';

class Login extends React.Component {
  handleSignIn = () => {
    const provider = new auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  render() {
    return (
      <button onClick={this.handleSignIn}>Sign in with Google</button>
    );
  }
}

export default Login;