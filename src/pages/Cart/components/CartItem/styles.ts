import { styled } from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  gap: 1.25rem;

  padding: 0.5rem 0.25rem;
  width: 100%;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const CartItemInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
`

export const CartItemInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  h1 {
    color: ${(props) => props.theme['sub-title']};
    font-size: 1rem;
  }

  h2 {
    color: ${(props) => props.theme.title};
    font-weight: bold;
    font-size: 1rem;
  }
`

export const CartItemInfoFooter = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 0.5rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    color: ${(props) => props.theme.text};
    font-size: 0.75rem;
    background: ${(props) => props.theme.button};
    border-radius: 6px;
    padding: 0.5rem;
    border: 0;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme['purple-500']};
    }
  }
`

export const CartItemCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  background: ${(props) => props.theme.button};
  border-radius: 6px;
  padding: 0.3125rem 0.5rem;

  button {
    color: ${(props) => props.theme['purple-500']};
    background: transparent;
    border: 0;
    cursor: pointer;
  }

  h1 {
    color: ${(props) => props.theme.title};
    font-size: 1rem;
  }
`
