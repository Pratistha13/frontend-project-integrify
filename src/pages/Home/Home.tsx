import React from 'react'
import { Button } from '@mui/material'

import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Navbar/Sidebar/Sidebar'

import './home.scss'

const Home = () => {
  const [drawerState, setDrawerState] = React.useState(false)

  //handle drawer stater
  const handleDrawerState = (state: boolean) => {
    setDrawerState(state)
  }

  return (
    <div className="home">
      {/*nabvar component */}
      <Navbar onClick={handleDrawerState} drawerState={drawerState} />
      <Sidebar onClick={handleDrawerState} drawerState={drawerState} />
      HomePage
      <Button color="primary">Hello World</Button>
    </div>
  )
}

export default Home
