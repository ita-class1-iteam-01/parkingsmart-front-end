import React from 'react'
import SearchBarContainer from './containers/searchBarContainer'
import ParkingLotList from './components/ParkingLotList'
import Navigator from './components/Navigator'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigator />
      <SearchBarContainer />
      <br />
      <ParkingLotList />
    </div>
  )
}

export default App
