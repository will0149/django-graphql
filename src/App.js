import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import BlogsInfo from './components/Blogs';

import logo from './logo.svg';
import './App.css';
const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/', // your GraphQL Server 
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
        <p>
          <BlogsInfo/>
        </p>
      </div>
    </ApolloProvider>
  );
}

export default App;
