import React from 'react'
import Drawer from '@mui/material/Drawer'
import CloseIcon from '@mui/icons-material/Close'

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
        <div className="sidebar__drawer-content">
          <CloseIcon className="sidebar__close-menu" />
          {/*Themes*/}

          <div className="sidebar__navigation">
            <h2>Themes</h2>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Sidebar
