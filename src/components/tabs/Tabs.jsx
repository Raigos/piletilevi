import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Tabs, Tab, Box } from '@mui/material'
import { useEventStatus } from './../../hooks/useEventStatus'
import { tabsStyles } from './style'

const StatusTabs = ({ filteredDiscounts, onStatusChange }) => {
  const [value, setValue] = useState(0)
  const { counts } = useEventStatus(filteredDiscounts)

  const tabs = [
    { label: 'All', count: filteredDiscounts.length, status: 'all' },
    { label: 'Currently Active', count: counts.active, status: 'active' },
    { label: 'Upcoming', count: counts.upcoming, status: 'upcoming' },
    { label: 'Archived', count: counts.archived, status: 'archived' },
  ]

  const handleChange = (e, newValue) => {
    setValue(newValue)
    onStatusChange(tabs[newValue].status)
  }

  return (
    <Box sx={{ py: 2.5 }}>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        sx={tabsStyles.tabs}
        onChange={handleChange}
      >
        {tabs.map(({ label, count }) => (
          <Tab
            key={label}
            label={`${label} (${count})`}
            sx={{ px: '8px', py: '1px' }}
          />
        ))}
      </Tabs>
    </Box>
  )
}

StatusTabs.propTypes = {
  filteredDiscounts: PropTypes.arrayOf(
    PropTypes.shape({
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onStatusChange: PropTypes.func.isRequired,
}

export default StatusTabs
