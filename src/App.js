import React from 'react'
import SearchBarContainer from './containers/searchBarContainer'
import Navigator from './components/Navigator'
import './App.css'
import ParkingLotInfoContainer from './containers/ParkingLotInfoContainer'

function App() {
  return (
    <div className="App">
      <Navigator />
      <SearchBarContainer />
      <br />
      <ParkingLotInfoContainer />
    </div>
  )
}

export default App
