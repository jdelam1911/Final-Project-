import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';

function App() {
    return (
        <ApolloProvider client={client}>
            <ChakraProvider>
                <Navbar />
                <div>
                    <h1>Welcome to Futbol Field Finder!</h1>
                </div>
            </ChakraProvider>
        </ApolloProvider>
    );
}

export default App;
