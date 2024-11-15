import React, { useState, useMemo, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material'
import PropTypes from 'prop-types'
import edit from '../../assets/edit.svg'

import TableHeader from './TableHeader'
import { tableStyles } from './style'
import Pagination from '../pagination/Pagination'

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

const DiscountsTable = ({ filteredDiscounts }) => {
  const [page, setPage] = useState(0)
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('name')

  const rowsPerPage = 10
  // Calculate visible rows with sorting and pagination - moved above early returns
  const visibleRows = useMemo(
    () =>
      [...filteredDiscounts]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [filteredDiscounts, order, orderBy, page, rowsPerPage],
  )

  // Calculate empty rows for last page - moved above early returns
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - filteredDiscounts.length)
      : 0

  useEffect(() => {
    setPage(0) // Reset to first page when filtered results change
  }, [filteredDiscounts])

  const formatTimePeriod = (startDate, endDate) => {
    const formatDate = date => {
      return new Date(date).toLocaleDateString('et-EE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    }
    return `${formatDate(startDate)} - ${formatDate(endDate)}`
  }

  const formatDiscountAmount = amount => {
    return typeof amount === 'number' ? `${amount}€` : `${amount}`
  }

  const handleChangePage = newPage => {
    setPage(newPage)
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  return (
    <>
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={tableStyles.container}
      >
        <Table
          sx={{ minWidth: 650 }}
          aria-label="discounts table"
        >
          <TableHeader
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {filteredDiscounts.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  align="center"
                  sx={{ py: 8 }}
                >
                  No results found
                </TableCell>
              </TableRow>
            ) : (
              <>
                {visibleRows.map(discount => (
                  <TableRow
                    key={discount.id}
                    sx={{
                      '&:not(:first-of-type):nth-of-type(even)': {
                        backgroundColor: theme => theme.palette.table.secondary,
                      },
                    }}
                  >
                    <TableCell
                      align="left"
                      sx={tableStyles.title}
                    >
                      {discount.name}
                    </TableCell>
                    <TableCell align="left">{discount.category}</TableCell>
                    <TableCell align="left">
                      {formatTimePeriod(discount.startDate, discount.endDate)}
                    </TableCell>
                    <TableCell align="left">
                      {formatDiscountAmount(discount.discountAmount)}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        aria-label="edit discount"
                        sx={tableStyles.icon}
                        size="small"
                      >
                        <img
                          src={edit}
                          alt="Pen "
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={5} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {filteredDiscounts.length > 0 && (
        <Pagination
          count={filteredDiscounts.length}
          page={page}
          onChange={handleChangePage}
          rowsPerPage={rowsPerPage}
        />
      )}
    </>
  )
}

DiscountsTable.propTypes = {
  filteredDiscounts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      discountAmount: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default DiscountsTable
