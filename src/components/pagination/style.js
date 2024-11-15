export const tableStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '36px',
  },
  icon: {
    color: theme => theme.palette.gray.main,
    borderRadius: '6px',
    border: theme => `solid 1px ${theme.palette.icon.main}`,
    background: theme => theme.palette.common.white,
  },
  ellipsis: {
    px: 1,
  },
}
