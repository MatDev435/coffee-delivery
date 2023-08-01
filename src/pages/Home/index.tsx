import { useState } from 'react'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  CardsContainer,
  CoffeesContainer,
  HomeContainer,
  HomeHeader,
  HomeHeaderLeft,
  Statistic,
  Statistics,
} from './styled'

import homeImage from '../../assets/home-image.png'

// 'ESPECIAL' | 'GELADO' | 'TRADICIONAL' | 'COM LEITE' | 'ALCOÓLICO'

enum Flag {
  ESPECIAL = 'ESPECIAL',
  GELADO = 'GELADO',
  TRADICIONAL = 'TRADICIONAL',
  COM_LEITE = 'COM LEITE',
  ALCOÓLICO = 'ALCOÓLICO',
}

interface CoffeesProps {
  pictureSrc: string
  flags: Flag[]
  name: string
  description: string
  price: string
}

export function Home() {
  const [coffees, setCoffees] = useState<CoffeesProps[]>([
    {
      pictureSrc: 'asdc',
      name: 'asdc',
      flags: [Flag.ALCOÓLICO, Flag.GELADO],
      description: 'asdcasdc',
      price: '19',
    },
  ])

  console.log(coffees)

  return (
    <HomeContainer>
      <HomeHeader>
        <HomeHeaderLeft>
          <h1>
            Encontre o café perfeito <br></br>
            para qualquer hora do dia
          </h1>

          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a <br></br>
            qualquer hora
          </h2>

          <Statistics>
            <Statistic statisticColor="yellowDark">
              <div>
                <ShoppingCart size={16} />
              </div>
              <p>Compra simples e segura</p>
            </Statistic>

            <Statistic statisticColor="text">
              <div>
                <Package size={16} />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </Statistic>

            <Statistic statisticColor="yellow">
              <div>
                <Timer size={16} />
              </div>
              <p>Entrega rápida e rastreada</p>
            </Statistic>

            <Statistic statisticColor="purple">
              <div>
                <Coffee size={16} />
              </div>
              <p>O café chega fresquinho até você</p>
            </Statistic>
          </Statistics>
        </HomeHeaderLeft>

        <div>
          <img src={homeImage} alt="" />
        </div>
      </HomeHeader>

      <CoffeesContainer>
        <h1>Nossos cafés</h1>

        <CardsContainer>{}</CardsContainer>
      </CoffeesContainer>
    </HomeContainer>
  )
}
