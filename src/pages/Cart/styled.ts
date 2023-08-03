import { styled } from 'styled-components'

export const CartContainer = styled.form`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 0.75rem;
`

export const CartTitle = styled.h1`
  color: ${(props) => props.theme['sub-title']};
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 0.9375rem;
`

export const LocationContainer = styled.div`
  background: transparent;
  padding: 2.5rem;
`

const ICON_COLOR = {
  yellowDark: 'yellow-700',
  purple: 'purple-500',
}

interface CartHeaderProps {
  iconColor: keyof typeof ICON_COLOR
}

export const CartHeader = styled.div<CartHeaderProps>`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme[ICON_COLOR[props.iconColor]]};
  }

  p {
    color: ${(props) => props.theme['sub-title']};

    span {
      color: ${(props) => props.theme.text};
      font-size: 0.875rem;
    }
  }
`

export const LocationFields = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;

  margin-top: 2rem;
`

export const LocationField = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 0.785rem;
  width: 100%;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 0;
  background: ${(props) => props.theme.input};
  color: ${(props) => props.theme.text};
  font-size: 0.875rem;
  border-radius: 4px;
`
export const LocationFieldFull = styled.div`
  width: 100%;
`
export const PaymentContainer = styled.div`
  margin-top: 0.875rem;
  padding: 2.5rem;
`

export const PaymentOptions = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 0.875rem;

  margin-top: 2rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.875rem;

    background: ${(props) => props.theme.button};
    color: ${(props) => props.theme.text};
    font-size: 0.875rem;
    text-transform: uppercase;
    border-radius: 6px;
    border: 0;
    padding: 1rem;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme['purple-500']};
    }
  }
`
