/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@material-ui/core'
import useStyles from './CoverArea.styles'

const CoverArea = (props) => {
  const classes = useStyles()

  return (
    <Grid
      component="aside"
      container
      direction="column"
      justify="flex-end"
      alignItems="flex-end"
      className={classes.container}
      {...props}
    >
      <Typography
        className={classes.paragraph}
        component="h2"
        variant="h5"
        align="right"
      >
        "Obtive crédito para capital de giro. O processo foi bem sucedido e tudo
        que foi abordado, foi cumprido."
      </Typography>
      <Typography
        className={classes.paragraph}
        component="h3"
        variant="h6"
        align="right"
      >
        <strong>Camila Bragança</strong>,
        <br />
        Sideral Tecnologia
      </Typography>
    </Grid>
  )
}

export default CoverArea
