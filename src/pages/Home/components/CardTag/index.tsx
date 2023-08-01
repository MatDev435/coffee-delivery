import { CardTagContainer } from './styles'

interface CardFalgProps {
  tag: string
}

export function CardTag({ tag }: CardFalgProps) {
  return (
    <CardTagContainer>
      <h2>{tag}</h2>
    </CardTagContainer>
  )
}
