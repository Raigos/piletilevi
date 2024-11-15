import * as React from 'react'

import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import PropTypes from 'prop-types'

const headCells = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'category',
    label: 'Applies to',
  },
  {
    id: 'startDate',
    label: 'Time period',
  },
  {
    id: 'discountAmount',
    label: 'Discount amount',
  },
]

const TableHeader = ({ order, orderBy, onRequestSort }) => {
  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={order}
              onClick={event => onRequestSort(event, headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell aria-label="actions" />
      </TableRow>
    </TableHead>
  )
}

TableHeader.propTypes = {
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.oneOf(['name', 'category', 'startDate', 'discountAmount'])
    .isRequired,
  onRequestSort: PropTypes.func.isRequired,
}

export default TableHeader
