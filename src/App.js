import React from 'react'
import SearchBar from './components/SearchBar'
import ParkingLotList from './components/ParkingLotList'
import Navigator from './components/Navigator'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigator />
      <SearchBar />
      <br />
      <ParkingLotList />
    </div>
  )
}

export default App
