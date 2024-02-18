import React from 'react';
import { db } from './firebase';

class Chat extends React.Component {
  state = { messages: [], text: '' };

  componentDidMount() {
    // TODO: Subscribe to messages
  }

  componentWillUnmount() {
    // TODO: Unsubscribe from messages
  }

  handleTextChange = event => {
    this.setState({ text: event.target.value });
  };

  handleSendMessage = event => {
    event.preventDefault();
    // TODO: Send message
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.messages.map(message => (
            <li key={message.id}>{message.text}</li>
          ))}
        </ul>
        <form onSubmit={this.handleSendMessage}>
          <input
            value={this.state.text}
            onChange={this.handleTextChange}
            placeholder="Type a message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default Chat;