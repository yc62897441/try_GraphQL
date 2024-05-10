// import React from 'react'
// import ReactDOM from 'react-dom/client'

// import App from './App'

// const domContainer = document.querySelector('#root')
// const root = ReactDOM.createRoot(domContainer)

// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// )

// 連結上 React。Connect your client to React
// https://www.apollographql.com/docs/react/get-started/#step-4-connect-your-client-to-react
import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client' // 相似於 React's Context.Provider, ApolloProvider 包裹住 React app 並且放置 Apollo Client 到脈絡中(context), 就可以在任何的 components 中存取到 client
// 連結上後，就可以在各 components 中使用 useQuery 來抓資料
// https://www.apollographql.com/docs/react/get-started/#step-5-fetch-data-with-usequery

import App from './App'

import { client } from './main'

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    // <React.StrictMode>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    // </React.StrictMode>
)
