import * as React from 'react'
import { Tabs, Tab, Box } from '@mui/material'
import { useState } from 'react'
import { tabsStyles } from './style'
const tabs = [
  { label: 'Currently Active', count: 22 },
  { label: 'Upcoming', count: 14 },
  { label: 'Archived', count: 2 },
]

const StatusTabs = () => {
  const [value, setValue] = useState(0)

  return (
    <Box sx={{ py: 2.5 }}>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        sx={tabsStyles.tabs}
        onChange={(e, newValue) => setValue(newValue)}
      >
        {tabs.map(({ label, count }) => (
          <Tab
            key={label}
            label={`${label} (${count})`}
            sx={{ px: '8px', py: '1px' }}
            TabScrollButtonProps={{
              sx: { height: '10px' },
            }}
          />
        ))}
      </Tabs>
    </Box>
  )
}

export default StatusTabs
