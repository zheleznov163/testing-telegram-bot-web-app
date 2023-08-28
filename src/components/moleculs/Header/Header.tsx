// import from 'react'

import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Button } from '../../atoms'
import './Header.css'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  onClickButton(): void
  username: string
}

export default function Header({ onClickButton, username, ...props }: Props) {
  return (
    <div {...props} className={'header ' + props.className}>
      <Button onClick={onClickButton}>Закрыть</Button>
      <span className='username'>{username}</span>
    </div>
  )
}
