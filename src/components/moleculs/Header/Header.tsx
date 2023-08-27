// import from 'react'

import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Button } from '../../atoms'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  onClickButton(): void
  username: string
}

export default function Header({ onClickButton, username, ...props }: Props) {
  return (
    <div {...props} className={'header ' + props.className}>
      <Button onClick={onClickButton} />
      <span className='username'>{username}</span>
    </div>
  )
}
