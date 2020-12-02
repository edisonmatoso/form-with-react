import { useState } from 'react'
import Header from './Header'
import FormArea from './FormArea'
import CoverArea from './components/CoverArea'
import useStyles from './App.styles'
import { useScreenProvider } from './context/ScreenProvider'

function App() {
  const { isMobile } = useScreenProvider()
  const classes = useStyles()

  const [isValid, setIsValid] = useState(false)

  const handleIsValid = () => {
    setIsValid(true)
    setTimeout(() => setIsValid(false), 3000)
  }

  return (
    <div className={classes.root}>
      {!isMobile && <CoverArea />}
      <main className={classes.main}>
        <Header isValid={isValid} />
        <FormArea handleIsValid={handleIsValid} />
      </main>
    </div>
  )
}

export default App
