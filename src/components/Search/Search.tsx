import React from 'react'
//import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search'

import './search.scss'
import { Input } from '@mui/material'

const Search = () => {
  return (
    <div className="search-box">
      <div className="search-box__wrapper">
        <Input placeholder="Search" disableUnderline={true} />
        <SearchIcon />
      </div>
    </div>
  )
}

export default Search
