import * as React from 'react'
import { useLocation } from 'react-router-dom'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Link,
  Divider,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { headerStyles } from './style'
import logo from '../../assets/logo.svg'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'

const navigationItems = [
  { path: '/back-office', label: 'Back office' },
  { path: '/back-office/codes/discounts', label: 'Discounts' },
  { path: '/back-office/reports', label: 'Reports' },
  { path: '/back-office/help', label: 'Help' },
]

export default function Header() {
  const location = useLocation()
  const [languageAnchor, setLanguageAnchor] = React.useState(null)
  const [userAnchor, setUserAnchor] = React.useState(null)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isbreakpoint = useMediaQuery('(max-width:1080px)')

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <>
      <AppBar
        position="static"
        sx={headerStyles.appBar}
      >
        <Toolbar
          sx={headerStyles.toolbar}
          disableGutters={true}
        >
          <Link
            href="/"
            sx={{ width: '111px', height: '25.5px' }}
          >
            <img
              className="headerStyles.logo"
              src={logo}
              alt="Piletilevi"
            />
          </Link>
          {!isbreakpoint && (
            <>
              <Box sx={headerStyles.navGroup}>
                {navigationItems.map(item => (
                  <Link
                    key={item.path}
                    href={item.path}
                    sx={headerStyles.navButton}
                    className={location.pathname === item.path ? 'active' : ''}
                  >
                    <Typography sx={headerStyles.navLink}>
                      {item.label}
                    </Typography>
                  </Link>
                ))}
              </Box>

              <Box sx={headerStyles.userSection}>
                <Button
                  sx={headerStyles.navButton}
                  endIcon={<KeyboardArrowDownIcon />}
                  onClick={e => setLanguageAnchor(e.currentTarget)}
                >
                  EN
                </Button>
                <Menu
                  anchorEl={languageAnchor}
                  open={Boolean(languageAnchor)}
                  onClose={() => setLanguageAnchor(null)}
                >
                  <MenuItem onClick={() => setLanguageAnchor(null)}>
                    EN
                  </MenuItem>
                  <MenuItem onClick={() => setLanguageAnchor(null)}>
                    EE
                  </MenuItem>
                </Menu>
                <Typography>Name Surname</Typography>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    height: '26px',
                    marginRight: '2px',
                    marginLeft: '10px',
                    my: 'auto',
                    borderColor: '#d6d2e1',
                  }}
                />
                <Button
                  sx={{ ...headerStyles.navButton, ...headerStyles.userButton }}
                  endIcon={<KeyboardArrowDownIcon />}
                  onClick={e => setUserAnchor(e.currentTarget)}
                >
                  Noorsooteater
                </Button>
                <Menu
                  anchorEl={userAnchor}
                  open={Boolean(userAnchor)}
                  onClose={() => setUserAnchor(null)}
                >
                  <MenuItem onClick={() => setUserAnchor(null)}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={() => setUserAnchor(null)}>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            </>
          )}

          {isbreakpoint && (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: '#19005f', marginLeft: 'auto' }}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                variant="temporary"
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
              >
                <List
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  {navigationItems.map(item => (
                    <ListItem
                      button
                      component={Link}
                      href={item.path}
                      key={item.label}
                      onClick={handleDrawerToggle}
                    >
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                  <Divider />
                  <ListItem
                    button
                    onClick={() => setLanguageOpen(!languageOpen)}
                  >
                    <ListItemText primary="Language" />
                    <KeyboardArrowDownIcon
                      sx={{
                        transform: languageOpen
                          ? 'rotate(-180deg)'
                          : 'rotate(0)',
                        transition: '0.3s',
                      }}
                    />
                  </ListItem>
                  <Collapse
                    in={languageOpen}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List
                      component="div"
                      disablePadding
                    >
                      <ListItem
                        button
                        sx={{ pl: 4 }}
                      >
                        <ListItemText primary="EN" />
                      </ListItem>
                      <ListItem
                        button
                        sx={{ pl: 4 }}
                      >
                        <ListItemText primary="EE" />
                      </ListItem>
                    </List>
                  </Collapse>
                  <ListItem sx={{ marginTop: 'auto' }}>
                    <ListItemText
                      primary="Name Surname"
                      secondary="Noorsooteaterr"
                    />
                  </ListItem>
                </List>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}
