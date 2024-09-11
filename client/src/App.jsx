import React, { useState } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, gql, useQuery, useMutation } from '@apollo/client';

// Setup Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

// Define GraphQL Queries and Mutations
const GET_FIELDS = gql`
  query GetSoccerFields {
    getSoccerFields {
      id
      name
      location
      description
    }
  }
`;

const ADD_FIELD = gql`
  mutation AddSoccerField($name: String!, $location: String!, $description: String) {
    addSoccerField(name: $name, location: $location, description: $description) {
      id
      name
      location
      description
    }
  }
`;

export default function App() {
  //const { loading, error, data } = useQuery(GET_FIELDS);
  //const [addField] = useMutation(ADD_FIELD);

  const [field, setField] = useState({ name: '', location: '', description: '' });

  //if (loading) return <p>Loading...</p>;
  //if (error) return <p>Error: {error.message}</p>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addField({ variables: field });
      window.location.reload(); // Reload the data
    } catch (err) {
      console.error('Error adding field:', err);
    }
  };

  return (
    <div>
      <h1>Soccer Field Spot!</h1>
      {/* <ul>
        {data.getSoccerFields.map((field) => (
          <li key={field.id}>
            {field.name} - {field.location} <br />
            {field.description}
          </li>
        ))}
      </ul> */}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Field Name"
          value={field.name}
          onChange={(e) => setField({ ...field, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={field.location}
          onChange={(e) => setField({ ...field, location: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={field.description}
          onChange={(e) => setField({ ...field, description: e.target.value })}
        ></textarea>
        <button type="submit">Add  A Soccer Field!</button>
      </form>
    </div>
  );
}

// // Wrap App in ApolloProvider
// export default function Root() {
//   return (
//     <ApolloProvider client={client}>
//       <App />
//     </ApolloProvider>
//   );
// }
