import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '148px 24px 32px 24px'
  },
  title: {
    fontWeight: 'bold'
  },
  textBox: {
    '& h1': {
      marginBottom: 9
    }
  },
  divider: {
    width: '100%',
    margin: '40px 0 20px 0'
  }
})

export default useStyles
