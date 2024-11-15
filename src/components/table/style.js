export const tableStyles = {
  container: {
    borderRadius: '6px',
    padding: '20px',
  },
  nameCell: {
    color: theme => theme.palette.primary.main,
  },
  icon: {
    color: theme => theme.palette.gray.main,
    borderRadius: '6px',
    border: theme => `solid 1px ${theme.palette.icon.main}`,
    marginTop: '10px',
  },
  actionCell: {
    width: 48,
  },
  title: {
    minWidth: 140,
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#3c00e5',
  },
}
