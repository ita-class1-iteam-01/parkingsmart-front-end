import React from 'react'
import SearchBar from './components/SearchBar'
import ParkingLotList from './components/ParkingLotList'
import './App.css'

function App() {
  return (
    <div className="App">
      <SearchBar />
      <br />
      <ParkingLotList />
    </div>
  )
}

export default App
