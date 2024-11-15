export const appliesToSelectStyles = {
  container: {
    minWidth: '200px',
    width: '100%',
  },
  select: {
    background: '#FFF',
    borderRadius: '6px',
    minWidth: '284px',

    '& .MuiOutlinedInput-notchedOutline ': {
      border: 'solid 1px #d6d2e1',
    },
    '& .MuiSelect-select': {
      paddingTop: '10px',
      paddingBottom: '10px',
    },
  },
  item: {
    '&.MuiListItemText-primary, & .MuiTypography-root': {
      color: theme => theme.palette.text.secondary,
      lineHeight: 1.14,
      fontSize: '14x',
    },
  },
}
