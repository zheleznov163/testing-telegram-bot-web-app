// import from 'react'

import { useCallback, useEffect, useState } from 'react'
import { ProductItem } from '../../components/moleculs'
import { useTelegram } from '../../hooks/useTelegram'
import './ProductList.css'

type Props = {}

const products = [
  { id: '1', title: 'Джинсы', price: 5000, description: 'Синего цвета, прямые' },
  { id: '2', title: 'Куртка', price: 12000, description: 'Зеленого цвета, теплая' },
  { id: '3', title: 'Джинсы 2', price: 5000, description: 'Синего цвета, прямые' },
  { id: '4', title: 'Куртка 8', price: 122, description: 'Зеленого цвета, теплая' },
  { id: '5', title: 'Джинсы 3', price: 5000, description: 'Синего цвета, прямые' },
  { id: '6', title: 'Куртка 7', price: 600, description: 'Зеленого цвета, теплая' },
  { id: '7', title: 'Джинсы 4', price: 5500, description: 'Синего цвета, прямые' },
  { id: '8', title: 'Куртка 5', price: 12000, description: 'Зеленого цвета, теплая' },
]

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return (acc += item.price)
  }, 0)
}

export default function ProductList({}: Props) {
  const [addedItems, setAddedItems] = useState([])

  const { tg, queryId } = useTelegram()

  const sendData = useCallback(
    () =>
      fetch('http://85.119.146.179:8000/web-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          products: addedItems,
          totalPrice: getTotalPrice(addedItems),
          queryId,
        }),
      }),
    [addedItems]
  )

  useEffect(() => {
    tg.onEvent('mainButtonClicked', sendData)
    return () => tg.offEvent('mainButtonClicked', sendData)
  }, [sendData])

  const addProduct = product => {
    const alreadyAdded = addedItems.find(item => item.id === product.id)
    let items = alreadyAdded
      ? addedItems.filter(item => item.id !== product.id)
      : [...addedItems, product]
    setAddedItems(items)

    if (items.length === 0) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(items)}`,
      })
    }
  }

  return (
    <div className={'list'}>
      {products.map(item => (
        <ProductItem product={item} onAdd={addProduct} className={'item'} />
      ))}
    </div>
  )
}
