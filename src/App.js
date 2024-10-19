// src/App.js
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './client';
import PostList from './components/PostList';
import ConnectedPeople from './components/ConnectedPeople';
import Companies from './components/Companies';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Prop ID in React App</h1>
        <ConnectedPeople />
	<Companies />
      </div>
    </ApolloProvider>
  );
}

export default App;
