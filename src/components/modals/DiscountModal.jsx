import * as React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from '@mui/material'
import { Close } from '@mui/icons-material'
import DropdownMenu from '../dropdown/DropdownMenu'
import { modalStyles } from './style'

const DiscountModal = ({ open, handleClose }) => {
  const [appliesTo, setAppliesTo] = React.useState('')
  const [discountName, setDiscountName] = React.useState('')

  const handleChange = event => {
    setAppliesTo(event.target.value)
  }

  const handleNameChange = event => {
    setDiscountName(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    window.alert(
      `Form submission received!\n\n` +
        `Discount Name: ${discountName || 'Not provided'}\n` +
        `Applies To: ${appliesTo || 'Not selected'}\n\n` +
        `Note: This is a demonstration. The form submission functionality is not implemented, but your request has been properly received by the system.`,
    )
    setDiscountName('')
    setAppliesTo('')
    handleClose()
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      sx={{ maxWidth: '100vw', maxHeight: '100vh' }}
    >
      <Box sx={modalStyles.container}>
        <Box sx={modalStyles.header}>
          <Typography
            variant="h5"
            component="h2"
          >
            Create discount
          </Typography>

          <IconButton
            variant="text"
            aria-label="close"
            onClick={handleClose}
          >
            <Close />
          </IconButton>
        </Box>

        <Box
          sx={modalStyles.formStyle}
          component="form"
          onSubmit={handleSubmit}
        >
          <TextField
            fullWidth
            placeholder="Discount name"
            variant="outlined"
            size="small"
            aria-label="Enter discount name"
            required
            value={discountName}
            onChange={handleNameChange}
          />
          <Box sx={modalStyles.row}>
            <DropdownMenu
              value={appliesTo}
              onChange={handleChange}
            />

            <Button
              type="submit"
              variant="contained"
              size="small"
              sx={{ flex: '0' }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

DiscountModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default DiscountModal
