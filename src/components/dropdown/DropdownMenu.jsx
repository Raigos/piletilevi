import * as React from 'react'
import PropTypes from 'prop-types'
import { FormControl, Select, MenuItem, ListItemText } from '@mui/material'
import { KeyboardArrowDown } from '@mui/icons-material'
import Checkbox from '@mui/material/Checkbox'
import { appliesToSelectStyles } from './style'
import { APPLIES_TO_OPTIONS } from '../../constants/discountTypes'

const DropdownMenu = ({ value, onChange }) => (
  <FormControl sx={appliesToSelectStyles.container}>
    <Select
      value={value}
      variant="outlined"
      onChange={onChange}
      IconComponent={KeyboardArrowDown}
      displayEmpty
      sx={appliesToSelectStyles.select}
      renderValue={selected =>
        selected
          ? APPLIES_TO_OPTIONS.find(item => item.value === selected)?.label
          : 'Applies to'
      }
    >
      {APPLIES_TO_OPTIONS.map(({ value: itemValue, label }) => (
        <MenuItem
          key={itemValue}
          value={itemValue}
          disableGutters
        >
          <Checkbox checked={value === itemValue} />
          <ListItemText
            primary={label}
            sx={appliesToSelectStyles.item}
          />
        </MenuItem>
      ))}
    </Select>
  </FormControl>
)

DropdownMenu.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default DropdownMenu
