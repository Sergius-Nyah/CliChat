import React from 'react';
import { render, act } from '@testing-library/react';
import { auth } from './firebase';
import App from './App';

// Mock the firebase auth module
jest.mock('./firebase', () => ({
  auth: {
    onAuthStateChanged: jest.fn()
  }
}));

describe('App', () => {
  it('renders Login component when user is null', async () => {
    auth.onAuthStateChanged.mockImplementationOnce(cb => cb(null));

    let container;
    await act(async () => {
      container = render(<App />);
    });

    expect(container.getByTestId('login')).toBeInTheDocument();
  });

  it('renders Chat component when user is not null', async () => {
    const user = { uid: '123', displayName: 'Test User' };
    auth.onAuthStateChanged.mockImplementationOnce(cb => cb(user));

    let container;
    await act(async () => {
      container = render(<App />);
    });

    expect(container.getByTestId('chat')).toBeInTheDocument();
  });
});