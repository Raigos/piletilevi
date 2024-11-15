import * as React from 'react'
import PropTypes from 'prop-types'

import { Box, IconButton, Button, Typography } from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { tableStyles as paginationStyles } from './style'

const Pagination = ({ count, page, onChange, rowsPerPage }) => {
  const totalPages = Math.ceil(count / rowsPerPage)
  const currentPage = page + 1

  const pageNumbers = []

  //Calculates pageNumbers and ellipsis
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 || // Always show first page
      i === totalPages || // Always show last page
      (i >= currentPage - 1 && i <= currentPage + 1) // Show current page and its neighbors
    ) {
      pageNumbers.push(i)
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      pageNumbers.push('...')
    }
  }

  //Removes consecutive ellipsis
  const filteredNumbers = pageNumbers.filter(
    (num, index) => num !== '...' || pageNumbers[index - 1] !== '...',
  )

  return (
    <Box sx={paginationStyles.container}>
      <IconButton
        sx={paginationStyles.icon}
        onClick={() => onChange(page - 1)}
        disabled={page === 0}
        size="small"
      >
        <ChevronLeft />
      </IconButton>

      {filteredNumbers.map((pageNum, index) =>
        pageNum === '...' ? (
          <Box
            key={`ellipsis-${index}`}
            sx={paginationStyles.ellipsis}
          >
            <Typography>...</Typography>
          </Box>
        ) : (
          <Button
            key={`page-${pageNum}`}
            variant="text"
            onClick={() => onChange(pageNum - 1)}
            size="small"
            sx={{
              fontSize: '18px',
              lineHeight: '0.89',
              minWidth: '32px',
              px: 1,
              color: currentPage === pageNum ? '#1a1a1a' : '#3c00e5',
              textDecoration: currentPage === pageNum ? 'underline' : 'none',
            }}
          >
            {pageNum}
          </Button>
        ),
      )}

      <IconButton
        sx={paginationStyles.icon}
        onClick={() => onChange(page + 1)}
        disabled={page >= totalPages - 1}
        size="small"
      >
        <ChevronRight />
      </IconButton>
    </Box>
  )
}

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
}

export default Pagination
