import { useContext } from 'react'
import ScreenContext from './ScreenContext'

const useScreenProvider = () => useContext(ScreenContext)

export default useScreenProvider
