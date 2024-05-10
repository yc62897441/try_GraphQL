// 套件
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// 使用 useQuery 來抓資料
// https://www.apollographql.com/docs/react/get-started/#step-5-fetch-data-with-usequery
// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client'

// 靜態資源

// 自定義 components

// 自定義函數 or 參數

const GET_LOCATIONS = gql`
    query GetLocations {
        locations {
            id
            name
            description
            photo
        }
    }
`

function UseQueryPage() {
    // 使用 @apollo/client + graphql 來 fetch 的方式
    // 每當 component render 時，useQuery 會自動執行查詢並傳回一個包含「loading、error 和 data」屬性的結果物件
    // Apollo Client 會自動追蹤查詢的 loading、error 狀態，這些狀態反映在 loading、error 屬性中。
    // 當查詢結果傳回時，它會附加到 data 屬性。
    // https://www.apollographql.com/docs/react/get-started/#step-5-fetch-data-with-usequery
    const { loading, error, data } = useQuery(GET_LOCATIONS) // 只會在第一次進入頁面時打 API，因為有設定快取 cache: new InMemoryCache()

    // 一般 react 中的 fetch 方式
    const [dataFromFetch, setDataFromFetch] = useState(null)
    useEffect(() => {
        queryData()
    }, [])
    async function queryData() {
        try {
            const res = await fetch(`https://api.github.com/search/repositories?q=react`) // 每次切換路由，回到 component 時都會發送 API request(network 有發送 request)
            const resData = await res.json()
            setDataFromFetch(resData.items)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <main>
            <h1>UseQueryPage</h1>
            <Link to="/">HomePage</Link>
            <Link to="/AnotherPage">AnotherPage</Link>
            <br />

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error : {error.message}</p>
            ) : (
                data.locations.map(({ id, name, description, photo }) => (
                    <div key={id}>
                        <h3>{name}</h3>
                        <img width="400" height="250" alt="location-reference" src={`${photo}`} />
                        <br />
                        <b>About this location:</b>
                        <p>{description}</p>
                        <br />
                    </div>
                ))
            )}
            <br />

            {dataFromFetch && dataFromFetch.length > 0 && dataFromFetch.map((datum, index) => <div key={index}>{datum.description}</div>)}
        </main>
    )
}

export default UseQueryPage
