import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  formGroup: {
    justifyContent: ({ isMobile }) => (isMobile ? 'normal' : 'space-between'),
    '& > div': {
      flex: 1
    },
    '& > *:not(:last-child)': {
      marginRight: ({ isMobile }) => (!isMobile ? 24 : 0)
    }
  }
})

export default useStyles
