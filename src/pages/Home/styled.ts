import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  padding: 0 10rem;
`

export const HomeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const HomeHeaderLeft = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    margin-bottom: 1rem;
  }
`

export const Statistics = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  gap: 1.25rem;
`

const STATISTIC_COLOR = {
  yellowDark: 'yellow-700',
  yellow: 'yellow-500',
  text: 'text',
  purple: 'purple-500',
} as const

interface StatisticProps {
  statisticColor: keyof typeof STATISTIC_COLOR
}

export const Statistic = styled.div<StatisticProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  div {
    padding: 0.5rem;
    border-radius: 999999px;
    background: ${(props) =>
      props.theme[STATISTIC_COLOR[props.statisticColor]]};

    color: ${(props) => props.theme.background};

    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    color: ${(props) => props.theme.text};
  }
`

export const CoffeesContainer = styled.div`
  margin-top: 8.625rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
  }
`

export const CardsContainer = styled.div``
