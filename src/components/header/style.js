export const headerStyles = {
  appBar: {
    backgroundColor: 'background.paper',
    boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.1)',
  },
  toolbar: {
    display: 'flex',
    gap: '57px',
    paddingTop: '23px',
    paddingBottom: '19px',
    boxShadow: '0 4px 20px 0 #d6dfe5',
    px: 5,
  },
  logo: {
    width: '111px',
    height: '25.5px',
  },
  navGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '47px',
  },
  navLink: {
    letterSpacing: '1px',
    fontWeight: 'bold',
  },
  navButton: {
    color: 'text.primary',
    letterSpacing: '1px',
    textDecoration: 'none',
    position: 'relative',

    '&.active::after': {
      content: '""',
      position: 'absolute',
      bottom: '-26px',
      left: 0,
      width: '100%',
      height: '4px',
      backgroundColor: '#19005f',
      borderRadius: '10px',
    },
  },
  userSection: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
  },
  userButton: {
    '^.MuiButtonBase-root': {
      marginLeft: 0,
      marginRight: 0,
    },
    display: 'flex',
    borderRadius: 0,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
}
