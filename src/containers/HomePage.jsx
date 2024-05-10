// 套件
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'

// 靜態資源

// 自定義 components

// 自定義函數 or 參數
import { client } from '../main'

function HomePage() {
    // const [dataFromGraphQL, setDataFromGraphQL] = useState(null)
    // const [dataFromFetch, setDataFromFetch] = useState(null)

    // useEffect(() => {
    //     queryData()
    // }, [])
    // async function queryData() {
    //     try {
    //         // 每次切換路由，回到 Homepage 都會發送 API request(network 有發送 request)
    //         const res = await fetch(`https://api.github.com/search/repositories?q=react`)
    //         const resData = await res.json()
    //         console.log('resData', resData)
    //         setDataFromFetch(resData.items)

    //         // 只有第一次會發送 API request，之後的切換路由回到 Homepage，並無發送 API request
    //         // 但是一樣 console.log('result', result) 會有資料
    //         client
    //             .query({
    //                 query: gql`
    //                     query GetLocations {
    //                         locations {
    //                             id
    //                             name
    //                             description
    //                             photo
    //                         }
    //                     }
    //                 `,
    //             })
    //             .then((result) => {
    //                 console.log('result', result)
    //                 setDataFromGraphQL(result.data.locations)
    //             })
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    return (
        <main>
            <h1>HomePage</h1>
            <Link to="/AnotherPage">AnotherPage</Link>
            <Link to="/UseQueryPage">UseQueryPage</Link>


            {/* {dataFromGraphQL && dataFromGraphQL.length > 0 && dataFromGraphQL.map((datum, index) => <div key={index}>{datum.name}</div>)}
            <br />

            {dataFromFetch && dataFromFetch.length > 0 && dataFromFetch.map((datum, index) => <div key={index}>{datum.description}</div>)} */}
        </main>
    )
}

export default HomePage
