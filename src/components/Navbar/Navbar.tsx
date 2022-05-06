import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MenuIcon from '@mui/icons-material/Menu'

import './navbar.scss'
import Search from '../Search/Search'

interface NavbarProps {
  onClick: Function
  drawerState: boolean
}

const Navbar = (props: NavbarProps) => {
  const { onClick, drawerState } = props

  const onDrawerClick = () => {
    onClick(!drawerState)
  }

  return (
    <div className="navbar">
      <div className="navbar_content container">
        {/* logo area */}
        <div className="navbar_content-left">Country App</div>
        {/* Search area */}
        <div className="navbar_content-search">
          <Search />
        </div>
        {/* items on the right side */}
        <div className="navbar_content-right">
          <div className="navbar_content-cart">
            <ShoppingCartIcon />
            {/* cart counter */}
            <div className="navbar_content-cart-counter">4</div>
          </div>
          <div className="navbar_content_menu">
            <MenuIcon onClick={onDrawerClick} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
