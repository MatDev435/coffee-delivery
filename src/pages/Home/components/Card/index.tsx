import { useContext, useState } from 'react'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  CardContainer,
  CounterContainer,
  FormContainer,
  TagsContainer,
} from './styles'
import { CardTag } from '../CardTag'
import { CartItemsContext } from '../../../../contexts/CartContext'

export interface CoffeeProps {
  id: number
  pictureSrc: string
  tags: string[]
  name: string
  description: string
  price: number
}

interface CoffeeInfoType {
  coffee: CoffeeProps
}

export function Card({ coffee }: CoffeeInfoType) {
  const [itemAmount, setItemAmount] = useState(1)
  const { addItemToCart } = useContext(CartItemsContext)

  function handleAddAmount() {
    setItemAmount((state) => {
      return state + 1
    })
  }

  function handleRemoveAmount() {
    if (itemAmount > 1) {
      setItemAmount((state) => {
        return state - 1
      })
    }
  }

  function handleAddItemToCart() {
    addItemToCart({
      pictureSrc: coffee.pictureSrc,
      name: coffee.name,
      price: coffee.price,
      amount: itemAmount,
    })
  }

  const formatedPrice = String(coffee.price).replace('.', ',').concat('0')

  return (
    <CardContainer>
      <img src={coffee.pictureSrc} alt="" />

      <TagsContainer>
        {coffee.tags.map((tag) => {
          return <CardTag key={tag} tag={tag} />
        })}
      </TagsContainer>

      <h1>{coffee.name}</h1>

      <p>{coffee.description}</p>

      <FormContainer>
        <p>
          R$ <strong>{formatedPrice}</strong>
        </p>

        <CounterContainer>
          <button onClick={handleRemoveAmount} type="button">
            <Minus size={14} weight={'bold'} />
          </button>
          <h1>{itemAmount}</h1>
          <button onClick={handleAddAmount} type="button">
            <Plus size={14} weight={'bold'} />
          </button>
        </CounterContainer>

        <button onClick={handleAddItemToCart} type="button">
          <ShoppingCart size={22} />
        </button>
      </FormContainer>
    </CardContainer>
  )
}
