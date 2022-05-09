import React from 'react'
import { useDispatch } from 'react-redux'

import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import CountryList from '../../components/CountryList/CountryList'

import { fetchAllCountries } from '../../redux/actions'

import './home.scss'

const Home = () => {
  const [drawerState, setDrawerState] = React.useState(false)

  //initializing dispatch
  const dispatch = useDispatch()

  //dispatch fetchAllCountries on page load
  React.useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])

  //handle drawer state
  const handleDrawerState = (state: boolean) => {
    setDrawerState(state)
  }

  return (
    <div className="home">
      {/*nabvar component */}
      <Navbar onClick={handleDrawerState} drawerState={drawerState} />
      <Sidebar onClick={handleDrawerState} drawerState={drawerState} />
      <CountryList />
    </div>
  )
}

export default Home
