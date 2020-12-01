import logo from '../assets/logo.svg'
import useStyles from './Header.styles'

const Header = () => {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
    </header>
  )
}

export default Header
