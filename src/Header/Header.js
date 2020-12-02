import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useScreenProvider } from '../context/ScreenProvider'
import useStyles from './Header.styles'
import logo from '../assets/logo.svg'

const Header = ({ isValid }) => {
  const { isMobile } = useScreenProvider()
  const classes = useStyles({ isMobile, isValid })
  return (
    <header className={classes.header}>
      {isValid ? (
        <Typography>Parabéns! Cadastro realizado com sucesso!</Typography>
      ) : (
        <img src={logo} alt="logo" />
      )}
    </header>
  )
}

Header.propTypes = {
  isValid: PropTypes.bool.isRequired
}

export default Header
