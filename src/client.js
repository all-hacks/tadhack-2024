// src/client.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.staging.v2.tnid.com/company',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIiLCJjb21wYW55X2lkIjoiMTBlMWIzYWEtMzQ3Yi00ODkyLThjNmEtNDAwOTI4MTkzMDUwIiwiZXhwIjoxNzI5OTExODQ0LCJpYXQiOjE3MjkzMDcwNDQsImlzcyI6IiIsImp0aSI6ImEwMjIzMTNiLTc4YTktNDkxZC04MmI3LTFjMmM0NWY5MjA5ZCIsIm5iZiI6MTcyOTMwNzA0Mywic3ViIjoiQ29tcGFueUlkOjEwZTFiM2FhLTM0N2ItNDg5Mi04YzZhLTQwMDkyODE5MzA1MCIsInR5cCI6ImFjY2VzcyJ9.6YPj7S7e5FvVlX8uk98329iBxI2tFRHELehlrY9sa4gxmNrrjHqvgL1nvhM7fFzWjg1NdGNr-D-OMgjrx5mFhA';
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  //uri: 'https://api.staging.v2.tnid.com/company',
  cache: new InMemoryCache(),
});

export default client;
