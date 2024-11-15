import { createTheme } from '@mui/material/styles'

const colors = {
  primary: '#19005f',
  textPrimary: '#1a1a1a',
  textSecondary: '#212a4f',
  gray: {
    main: '#626262',
    secondary: '#9a9a9a',
  },
  divider: '#d6d2e1',
  tableSecondary: '#f5f5f7',
}

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    text: {
      primary: '#212a4f',
      secondary: '#1a1a1a',
    },
    gray: {
      main: '#626262',
      secondary: '#9a9a9a',
    },
    icon: {
      main: '#D6D2E1',
    },
    table: {
      secondary: '#f5f5f7',
      divider: '#d6d2e1',
    },
  },
  typography: {
    allVariants: {
      color: '#212a4f',
    },
    h1: { color: '#212a4f' },
    h2: { color: '#212a4f' },
    h3: { color: '#212a4f' },
    h4: {
      color: '#212a4f',
      fontFamily: 'Montserrat, Roboto, sans-serif',
      fontSize: '36px',
      fontWeight: 'bold',
      lineHeight: '1.33',
    },
    h5: {
      color: '#212a4f',
      fontWeight: 'bold',
      fontSize: '28px',
      lineHeight: '1.14',
    },
    h6: { color: '#212a4f' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#19005f',
          '&:hover': {
            backgroundColor: '#2b0090',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontSize: '18px',
          fontWeight: 700,
          lineHeight: 1.33,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '0 8px 16px 8px',
          color: theme => theme.palette.text.secondary,
          lineHeight: '1.14',
          fontSize: '14px',
          borderBottomColor: theme => theme.palette.table.divider,
        },
        row: {
          borderBottom: 'red',
        },
        head: {
          fontWeight: 'bold',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme => theme.palette.table.divider,
          textTransform: 'capitalize',
          fontSize: '16px',
          lineHeight: '1.25',
        },
      },
    },
  },
})
