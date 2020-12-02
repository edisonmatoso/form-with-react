import { FormGroup as MaterialFormGroup } from '@material-ui/core'
import { useScreenProvider } from '../../context/ScreenProvider'
import useStyles from './FormGroup.styles'
import PropTypes from 'prop-types'

const FormGroup = ({ children }) => {
  const { isMobile } = useScreenProvider()
  const classes = useStyles({ isMobile })

  return (
    <MaterialFormGroup className={classes.formGroup} row={!isMobile}>
      {children}
    </MaterialFormGroup>
  )
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired
}

export default FormGroup
