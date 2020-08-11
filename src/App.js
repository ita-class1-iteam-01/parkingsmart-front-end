import React from 'react'
import DateContainer from './containers/dateContainer'
import ParkingLotList from './components/ParkingLotList'
import Navigator from './components/Navigator'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigator />
      <DateContainer />
      <br />
      <ParkingLotList />
    </div>
  )
}

export default App
