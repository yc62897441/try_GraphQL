// 套件
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// 靜態資源

// 自定義 components

// 自定義函數 or 參數

function AnotherPage() {
    return (
        <main>
            <h1>AnotherPage</h1>
            <Link to="/">HomePage</Link>
            <Link to="/UseQueryPage">UseQueryPage</Link>
        </main>
    )
}

export default AnotherPage
