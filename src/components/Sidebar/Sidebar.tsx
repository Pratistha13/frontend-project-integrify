import React from 'react'
import Drawer from '@mui/material/Drawer'
import CloseIcon from '@mui/icons-material/Close'
import './sidebar.scss'

interface SidebarProps {
  onClick: Function
  drawerState: boolean
}

const Sidebar = (props: SidebarProps) => {
  const { onClick, drawerState } = props

  const onDrawerClose = () => {
    //Closes the drawer
    onClick(!drawerState)
  }

  return (
    <div className="sidebar">
      {/* Drawer */}

      <Drawer
        anchor="right"
        open={drawerState}
        onClose={onDrawerClose}
        className="sidebar_drawer"
      >
        <div className="sidebar_drawer-content">
          <CloseIcon onClick={onDrawerClose} className="sidebar_close-menu" />
          {/*Themes*/}

          <div className="sidebar_navigation">
            <h2>Themes</h2>
            <ul>
              <li>
                <h2> Blue </h2>
              </li>
              <span className="sidebar_navigation_blue-box"></span>
              <li>
                <h2> Green </h2>
              </li>
              <span className="sidebar_navigation_green-box"></span>
              <li>
                <h2> Red </h2>
              </li>
              <span className="sidebar_navigation_red-box"></span>
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Sidebar
