import * as React from 'react'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { Divider, IconButton, InputBase, Paper } from '@mui/material'
import { Close, Search } from '@mui/icons-material'
import { searchStyles } from './style'

const SearchBar = ({ onSearch, searchTerm, setSearchTerm }) => {
  const [showClear, setShowClear] = useState(false)

  useEffect(() => {
    setShowClear(searchTerm.length > 0)
  }, [searchTerm])

  const handleSubmit = event => {
    event.preventDefault()
    onSearch(searchTerm.toLowerCase().trim())
  }

  const handleInputChange = e => {
    const value = e.target.value
    setSearchTerm(value)

    // if enabled will search on each keystroke
    // onSearch(value.toLowerCase().trim())
  }

  const handleClear = () => {
    setSearchTerm('')
    setShowClear(false)
    onSearch('')
  }

  return (
    <Paper
      component="form"
      variant="outlined"
      onSubmit={handleSubmit}
      sx={searchStyles.search}
    >
      <InputBase
        sx={searchStyles.input}
        onChange={handleInputChange}
        placeholder="Discount name, code"
        inputProps={{ 'aria-label': 'SearchBar discount' }}
        value={searchTerm}
      />
      {showClear && (
        <IconButton
          onClick={handleClear}
          sx={{ p: 1, color: 'icon.main' }}
          aria-label="clear search"
        >
          <Close />
        </IconButton>
      )}

      <Divider
        sx={{ height: '100%', mx: 0.5, borderColor: '#d6d2e1' }}
        orientation="vertical"
      />
      <IconButton
        onClick={() => onSearch(searchTerm.toLowerCase().trim())}
        sx={{ p: 1, color: 'icon.main' }}
        aria-label="search"
      >
        <Search />
      </IconButton>
    </Paper>
  )
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
}

export default SearchBar
