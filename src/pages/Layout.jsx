import * as React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Container, ThemeProvider } from '@mui/material'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'

import Header from '../components/header/Header'
import DiscountsPage from './DiscountsPage'
import { theme } from '../styles/theme'

import CustomBreadcrumbs from '../components/breadcrumbs/Breadcrumbs'
import DiscountModal from '../components/modals/DiscountModal'
import { useState } from 'react'
import { ROUTES } from '../constants/routes'

function App() {
  const [open, setOpen] = useState(false)

  const handleOpenModal = () => setOpen(true)
  const handleCloseModal = () => setOpen(false)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Container
            maxWidth={false}
            sx={{ maxWidth: '1710px' }}
          >
            <CustomBreadcrumbs />
            <Routes>
              <Route
                path="/"
                element={
                  <Navigate
                    to={ROUTES.DISCOUNTS.path}
                    replace
                  />
                }
              />
              <Route
                path={ROUTES.DISCOUNTS.path}
                element={<DiscountsPage handleOpenModal={handleOpenModal} />}
              />
            </Routes>
          </Container>
          <DiscountModal
            open={open}
            handleClose={handleCloseModal}
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
