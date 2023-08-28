import React, { useCallback, useEffect, useState } from 'react'
import './Form.css'
import { useTelegram } from '../../hooks/useTelegram'

export default function Form() {
  const [country, setCountry] = useState('')
  const [street, setStreet] = useState('')
  const [subject, setSubject] = useState('physical')

  const isButtonShow = street && country

  const { tg } = useTelegram()

  const onSendData = useCallback(
    () =>
      tg.sendData(
        JSON.stringify({
          country,
          street,
          subject,
        })
      ),
    [country, street, subject]
  )

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
    return () => tg.offEvent('mainButtonClicked', onSendData)
  }, [onSendData])

  useEffect(() => tg.MainButton.setParams({ text: 'Отправить данные' }), [])
  useEffect(() => (isButtonShow ? tg.MainButton.show() : tg.MainButton.hide()), [isButtonShow])

  const updateCountry = ({ target }) => setCountry(target.value)
  const updateStreet = ({ target }) => setStreet(target.value)
  const updateSubject = ({ target }) => setSubject(target.value)

  return (
    <div className={'form'}>
      <h3>Введите ваши данные</h3>
      <input
        className={'input'}
        type='text'
        placeholder={'Страна'}
        value={country}
        onChange={updateCountry}
      />
      <input
        className={'input'}
        type='text'
        placeholder={'Улица'}
        value={street}
        onChange={updateStreet}
      />
      <select value={subject} onChange={updateSubject} className={'select'}>
        <option value={'physical'}>Физ. лицо</option>
        <option value={'legal'}>Юр. лицо</option>
      </select>
    </div>
  )
}
