import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  header: {
    borderBottom: ({ isMobile }) => (!isMobile ? 'none' : '1px solid #e6e6e6'),
    padding: '32px 20px',
    display: 'flex',
    justifyContent: ({ isValid }) => (isValid ? 'center' : 'flex-end'),
    color: ({ isValid }) => (isValid ? '#fff' : '#000'),
    backgroundColor: ({ isValid }) => (isValid ? '#2ecc71' : '#fff')
  }
})

export default useStyles
