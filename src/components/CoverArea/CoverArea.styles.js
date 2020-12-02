import { makeStyles } from '@material-ui/core'
import CoverImage from '../../assets/cover_image.png'

const useStyles = makeStyles({
  container: {
    width: 860,
    padding: 40,
    background: `url(${CoverImage}) no-repeat`,
    backgroundSize: 'cover'
  },
  paragraph: {
    color: 'white',
    width: 385,
    lineHeight: 1.5
  }
})

export default useStyles
