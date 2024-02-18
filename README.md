# CliChat: Real-Time Peer-to-Peer Chat Application

Imagine a robust, real-time chat application that leverages the power of Electron, Firebase, and React to deliver a seamless chatting experience. Now, stop imagining. :)
users can engage in peer-to-peer conversations, with all messages securely stored in a Firebase Firestore database for persistent access.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Follow these steps to get P2PChat up and running on your local machine:

1. Clone the repository:
`git clone https://github.com/Sergius-Nyah/CliChat.git`
2. Navigate into the cloned repository and install the dependencies:
`npm i --save react react-dom firebase electron react-router-dom redux react-redux axios`
3. Start app 
`npm start`
## Alternatively, 
Install `nodemon` as a development dependency to automatically restart your application whenever you make changes, instead of starting manually everytime:
`npm install --save-dev nodemon`
4. Modify the `start` script in your `package.json` file to use `nodemon`:
```json
"scripts": {
  "start": "nodemon --exec electron ."
}
```
5. Start
Run `npm start`

## Features

- **Real-Time Chat**: Engage in real-time conversations with other users.
- **Google Authentication**: Securely sign in using your Google account.
- **Persistent Storage**: Access your chat history at any time, thanks to our Firebase Firestore database.
- **Network Checks**: Stay informed with our built-in network checks that ensure you're online and ready to chat.

## Contributing

We welcome PRs. If you'd like to contribute, please fork the repository and make changes as you'd like.

## License
## License

 [MIT license](https://opensource.org/licenses/MIT).