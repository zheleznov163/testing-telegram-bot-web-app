import { useCallback, useEffect, useMemo } from 'react'
import './App.css'
import { Header } from './components/moleculs'
import { Button } from './components/atoms'

export default function App() {
  useEffect(() => {
    Telegram.WebApp.ready()
  }, [])

  const { initDataUnsafe } = Telegram.WebApp

  const username = useMemo(
    () => `${initDataUnsafe.user?.first_name} + ${initDataUnsafe.user?.last_name}`,
    [initDataUnsafe.user]
  )

  const close = useCallback(() => {
    Telegram.WebApp.close()
  }, [])

  const toggleMainButton = useCallback(() => {
    if (Telegram.WebApp.MainButton.isVisible) {
      Telegram.WebApp.MainButton.hide()
    } else {
      Telegram.WebApp.MainButton.show()
    }
  }, [])

  return (
    <div className='App'>
      <div className='container'>
        <Header onClickButton={close} username={username} />
        <Button onClick={toggleMainButton}>toggle main button</Button>
      </div>
    </div>
  )
}
