// 初始化 ApolloClient (Initialize ApolloClient)
// https://www.apollographql.com/docs/react/get-started#step-3-initialize-apolloclient
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://flyby-router-demo.herokuapp.com/', // the URL of our GraphQL server.
    cache: new InMemoryCache(), // Apollo Client uses to cache query results after fetching them.
})

//
// client
//     .query({
//         query: gql`
//             query GetLocations {
//                 locations {
//                     id
//                     name
//                     description
//                     photo
//                 }
//             }
//         `,
//     })
//     .then((result) => console.log('result', result))
