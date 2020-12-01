import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Button,
  Link,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel
} from '@material-ui/core'
import { Visibility, VisibilityOff, Lock } from '@material-ui/icons/'
import useStyles from './Form.styles'

const Form = () => {
  const defaultValues = {
    email: '',
    cpf: '',
    birthday: '',
    password: '',
    privacyPolicy: false
  }
  const { register, handleSubmit, control } = useForm({ defaultValues })
  const classes = useStyles()

  const [passwordIsVisible, setPasswordIsVisible] = useState(false)

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <TextField
        variant="outlined"
        margin="normal"
        inputRef={register}
        required
        fullWidth
        label="E-mail"
        name="email"
        autoComplete="email"
        placeholder="email@domínio.com"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        inputRef={register}
        required
        fullWidth
        name="cpf"
        label="CPF"
        autoComplete="cpf"
      />
      <TextField
        variant="outlined"
        margin="normal"
        inputRef={register}
        required
        fullWidth
        label="Data de nascimento"
        name="birthday"
        autoComplete="dataNascimento"
        type="date"
        autoFocus
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        variant="outlined"
        margin="normal"
        inputRef={register}
        required
        fullWidth
        name="password"
        label="Senha"
        type={passwordIsVisible ? 'text' : 'password'}
        autoComplete="password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="alterar a visibilidade da senha"
                onClick={() => setPasswordIsVisible(!passwordIsVisible)}
              >
                {passwordIsVisible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <div className={classes.privacyPolicy}>
        <FormControlLabel
          control={
            <Checkbox
              rules={{ required: true }}
              control={control}
              type="checkbox"
              name="privacyPolicy"
              inputRef={register}
            />
          }
          label={
            <Typography>
              Li e estou de acordo com a{' '}
              <Link href="#">Política de Privacidade</Link> e a{' '}
              <Link href="#">Política de Uso de Informações</Link>.
            </Typography>
          }
        />
      </div>

      <Button
        fullWidth
        variant="contained"
        color="primary"
        startIcon={<Lock />}
        size="large"
        className={classes.button}
        type="submit"
      >
        Cadastrar
      </Button>
    </form>
  )
}

export default Form
