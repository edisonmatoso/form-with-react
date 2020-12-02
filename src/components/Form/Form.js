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
import PropTypes from 'prop-types'
import useStyles from './Form.styles'
import FormGroup from '../FormGroup'

const Form = ({ handleIsValid }) => {
  const defaultValues = {
    email: '',
    cpf: '',
    birthday: '',
    password: '',
    privacyPolicy: false
  }
  const { register, handleSubmit, control, errors } = useForm({ defaultValues })
  const classes = useStyles()

  const [passwordIsVisible, setPasswordIsVisible] = useState(false)

  const handleOnSubmit = (data) => {
    Object.keys(errors).length === 0 && handleIsValid()
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit((data) => handleOnSubmit(data))}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        error={errors?.email?.type === 'pattern'}
        inputRef={register({
          required: true,
          pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' }
        })}
        fullWidth
        label="E-mail"
        name="email"
        autoComplete="email"
        placeholder="email@domínio.com"
        autoFocus
        helperText={errors?.email?.message ?? ''}
      />
      <FormGroup>
        <TextField
          variant="outlined"
          margin="normal"
          required
          error={errors?.cpf?.type === 'pattern'}
          inputRef={register({
            required: true,
            pattern: {
              value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/i,
              message: 'CPF Incorreto'
            }
          })}
          name="cpf"
          label="CPF"
          autoComplete="cpf"
          helperText={errors?.cpf?.message ?? ''}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          inputRef={register({
            required: true
            // pattern: /^\d{2}\/\d{2}\/\d{4}$/i
          })}
          label="Data de nascimento"
          name="birthday"
          autoComplete="dataNascimento"
          type="date"
          autoFocus
          InputLabelProps={{
            shrink: true
          }}
        />
      </FormGroup>
      <TextField
        variant="outlined"
        margin="normal"
        required
        inputRef={register({ required: true })}
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
              color="primary"
              rules={{ required: true }}
              control={control}
              type="checkbox"
              name="privacyPolicy"
              inputRef={register}
            />
          }
          label={
            <Typography variant="caption">
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

Form.propTypes = {
  handleIsValid: PropTypes.func.isRequired
}

export default Form
