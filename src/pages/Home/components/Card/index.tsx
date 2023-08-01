import { Flag, Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  CardContainer,
  CounterContainer,
  FormContainer,
  TagsContainer,
} from './styles'
import { CardTag } from '../CardTag'

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
          <button type="button">
            <Minus size={14} weight={'bold'} />
          </button>
          <h1>1</h1>
          <button type="button">
            <Plus size={14} weight={'bold'} />
          </button>
        </CounterContainer>

        <button type="submit">
          <ShoppingCart size={22} />
        </button>
      </FormContainer>
    </CardContainer>
  )
}
