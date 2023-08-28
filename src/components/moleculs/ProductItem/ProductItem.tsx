import React from 'react'
import './ProductItem.css'
import { Button } from '../../atoms'

type Product = {
  title: string
  description: string
  price: string
}

type Props = {
  product: Product
  className: string
  onAdd(product: Product): void
}

const ProductItem = ({ product, className, onAdd }: Props) => {
  const onAddHandler = () => onAdd(product)

  return (
    <div className={'product ' + className}>
      <div className={'img'} />
      <div className={'title'}>{product.title}</div>
      <div className={'description'}>{product.description}</div>
      <div className={'price'}>
        <span>
          Стоимость: <b>{product.price}</b>
        </span>
      </div>
      <Button className={'add-btn'} onClick={onAddHandler}>
        Добавить в корзину
      </Button>
    </div>
  )
}
