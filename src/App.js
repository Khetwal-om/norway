import React from 'react'
import './App.css'
import NewsList from './components/NewsList'
import SideBar from './components/SideBar'
import Trending from './components/Trending'

function App() {
    return (
        <div className="app">
            <SideBar />
            <NewsList />
            <Trending/>
        </div>
    )
}

export default App
