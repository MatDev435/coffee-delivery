import { styled } from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const SuccessHeader = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.25rem;

  margin-bottom: 2.5rem;

  h1 {
    color: ${(props) => props.theme['yellow-700']};
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 900;
  }

  p {
    color: ${(props) => props.theme.text};
    font-size: 1.25rem;
  }
`
export const DeliveryDetails = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
`

const DETAIL_ICON_COLOR = {
  purple: 'purple-500',
  yellow: 'yellow-500',
  yellowDark: 'yellow-700',
} as const

interface DetailIconColor {
  detailIconColor: keyof typeof DETAIL_ICON_COLOR
}

export const DeliveryDetail = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 0.75rem;

  h1 {
    color: ${(props) => props.theme.text};
    font-size: 1rem;
    font-weight: 500;
  }

  strong {
    color: ${(props) => props.theme.text};
    font-size: 1rem;
    font-weight: bold;
  }
`

export const DetailIcon = styled.div<DetailIconColor>`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.background};
  background: ${(props) =>
    props.theme[DETAIL_ICON_COLOR[props.detailIconColor]]};
  width: 2rem;
  height: 2rem;
  border-radius: 99999px;
`
