export const searchStyles = {
  search: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: 284,
    backgroundColor: theme => theme.palette.common.white,
    borderRadius: '6px',
    border: '1px solid #d6d2e1',
  },
  input: {
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme => theme.spacing(1, 2),
    },
  },
  heading: {
    color: theme => theme.palette.text.secondary,
  },
}
