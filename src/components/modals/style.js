export const modalStyles = {
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 480,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: '24px 32px 40px 32px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  close: {
    marginRight: '-10px',
  },
  formStyle: {
    mt: 4,
    display: 'flex',
    gap: 2,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    gap: 2,
  },
}
