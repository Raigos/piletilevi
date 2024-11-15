import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Breadcrumbs, Container, Link, Typography } from '@mui/material'
import { breadcrumbStyles } from './style'
import { PATH_ALIASES } from '../../constants/pathAliases'

const CustomBreadcrumbs = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment !== '')

  if (!pathSegments.length) {
    return (
      <Container
        maxWidth="xl"
        sx={{ py: 2.5 }}
      >
        <Typography variant="breadcrumbLast">Piletilevi</Typography>
      </Container>
    )
  }

  const handleClick = (event, path) => {
    event.preventDefault()
    navigate(path)
  }

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator=">"
      sx={{ paddingTop: 2.5, paddingBottom: 0 }}
    >
      {pathSegments.map((segment, index) => {
        const routeTo = `/${pathSegments.slice(0, index + 1).join('/')}`
        const isLast = index === pathSegments.length - 1
        const displayName = PATH_ALIASES[segment] || segment
        return isLast ? (
          <Typography
            key={routeTo}
            variant="breadcrumbLast"
            sx={breadcrumbStyles.breadcrumbLast}
          >
            {displayName}
          </Typography>
        ) : (
          <Link
            key={routeTo}
            underline="hover"
            href={routeTo}
            onClick={e => handleClick(e, routeTo)}
            sx={breadcrumbStyles.breadcrumb}
          >
            {displayName}
          </Link>
        )
      })}
    </Breadcrumbs>
  )
}

export default CustomBreadcrumbs
