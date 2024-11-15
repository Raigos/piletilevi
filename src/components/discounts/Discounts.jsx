import * as React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Typography } from '@mui/material'
import SearchBar from '../search/SearchBar'
import DropdownMenu from '../dropdown/DropdownMenu'

import { discountsStyles } from './style'
import { useState } from 'react'

const Discounts = ({
  onSearch,
  appliesTo,
  onAppliesToChange,
  handleOpenModal,
}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {
    onSearch(searchTerm.toLowerCase().trim())
  }

  const handleClear = () => {
    setSearchTerm('')
    onSearch('')

    if (onAppliesToChange) {
      const clearEvent = {
        target: {
          value: 'all',
        },
      }
      onAppliesToChange(clearEvent)
    }
  }

  return (
    <Box sx={{ py: 3 }}>
      <Box sx={discountsStyles.container}>
        <Typography
          variant="h4"
          component="h1"
          sx={discountsStyles.heading}
        >
          Discounts
        </Typography>
        <div>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            onClick={handleOpenModal}
            disableElevation
          >
            create new discount
          </Button>
        </div>
      </Box>

      <Box sx={discountsStyles.inputs}>
        <SearchBar
          onSearch={onSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <Box>
          <DropdownMenu
            value={appliesTo}
            onChange={onAppliesToChange}
          />
        </Box>

        <Button
          variant="outlined"
          sx={{ border: 'solid 2px #19005f' }}
          onClick={handleSearch}
        >
          search
        </Button>

        <Button
          variant="text"
          color="gray"
          size="medium"
          sx={{
            fontSize: '14px',
            textTransform: 'capitalize',
          }}
          onClick={handleClear}
        >
          Clear All
        </Button>
      </Box>
    </Box>
  )
}
Discounts.propTypes = {
  onSearch: PropTypes.func.isRequired,
  appliesTo: PropTypes.string.isRequired,
  onAppliesToChange: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
}

export default Discounts
