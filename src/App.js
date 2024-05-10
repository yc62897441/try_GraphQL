// 套件
import React from 'react'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'

// 靜態資源
import './index.css'

// 自定義 components
import HomePage from './containers/HomePage.jsx'
import AnotherPage from './containers/AnotherPage.jsx'
import UseQueryPage from './containers/UseQueryPage.jsx'

function App({}) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/AnotherPage" element={<AnotherPage />} />
                <Route path="/UseQueryPage" element={<UseQueryPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
