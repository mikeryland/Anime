// import logo from './logo.svg';
// import './App.css';

// import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
// import { onError } from '@apollo/client/link/error';

// import Api from './GraphQL/api';

// import AnimeList from './Main/AnimeList'
// import { cache } from '@emotion/css';

// //graphql connection
// const errorLink = onError(({ graphqlErrors, networkError }) => {
//     if (graphqlErrors) {
//         graphqlErrors.map(({ message, location, path }) => {
//             alert('Graphql error ${message}');
//         })
//     }
// });
// const link = from(
//     [
//         errorLink,
//         new HttpLink({ uri: 'https://graphql.anilist.co/' })
//     ]
// )

// const client = new ApolloClient(
//     {
//         cache: new InMemoryCache(),
//         link: link
//     }
// )




// function App() {
//     return (

//         <ApolloProvider client={client}>
//             {""}

//         </ApolloProvider>

//     )
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>


// }

// export default App;
