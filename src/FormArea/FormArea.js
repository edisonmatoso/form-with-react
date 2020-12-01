import { Divider, Link, Typography, Grid } from '@material-ui/core'
import Form from '../components/Form/'
import useStyles from './FormArea.styles'

const FormArea = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.container}
    >
      <div className={classes.textBox}>
        <Typography component="h1" variant="h6" className={classes.title}>
          Criar meu cadastro
        </Typography>
        <Typography>
          Para acompanhar sua contratação de crédito você utilizará seu e-mail e
          CPF.
        </Typography>
      </div>
      <Form />
      <Divider light className={classes.divider} />
      <Typography>
        Já fiz meu cadastro. <Link href="#">Entrar agora.</Link>
      </Typography>
    </Grid>
  )
}

export default FormArea
