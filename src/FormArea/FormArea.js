import { Divider, Link, Typography, Grid } from '@material-ui/core'
import Form from '../components/Form/'
import useStyles from './FormArea.styles'
import PropTypes from 'prop-types'

const FormArea = ({ handleIsValid }) => {
  const classes = useStyles()

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.container}
    >
      <div className={classes.textBox}>
        <Typography
          align="center"
          component="h1"
          variant="h5"
          className={classes.title}
        >
          Criar meu cadastro
        </Typography>
        <Typography align="center">
          Para acompanhar sua contratação de crédito você utilizará seu e-mail e
          CPF.
        </Typography>
      </div>
      <Form handleIsValid={handleIsValid} />
      <Divider light className={classes.divider} />
      <Typography>
        Já fiz meu cadastro. <Link href="#">Entrar agora.</Link>
      </Typography>
    </Grid>
  )
}

FormArea.propTypes = {
  handleIsValid: PropTypes.func.isRequired
}

export default FormArea
