import { useEffect, useState } from 'react'
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
import { products } from './utils/products'
import { Card, CoffeeProps } from './components/Card'

import homeImage from '../../assets/home-image.png'

export function Home() {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])

  useEffect(() => {
    setCoffees(products)
  }, [])

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

        <CardsContainer>
          {coffees.map((coffee) => {
            return <Card key={coffee.id} coffee={coffee} />
          })}
        </CardsContainer>
      </CoffeesContainer>
    </HomeContainer>
  )
}
