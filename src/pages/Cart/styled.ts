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

export const CartItemsContainer = styled.div`
  padding: 2.5rem;
`

export const SelectedItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
`

export const OrderInfoContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 3rem;

  h1,
  h2 {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;
  }

  h2 {
    color: ${(props) => props.theme.text};
    font-size: 0.875rem;

    span {
      color: ${(props) => props.theme.text};
      font-size: 0.875rem;
    }
  }

  h1 {
    color: ${(props) => props.theme['sub-title']};
    font-size: 1.25rem;

    span {
      color: ${(props) => props.theme['sub-title']};
      font-size: 1.25rem;
    }
  }
`

export const Separator = styled.div`
  width: 100%;

  &::after {
    content: '';
    display: block;
    padding: 1px;
    width: 100%;
    background: ${(props) => props.theme.button};
  }
`

export const SubmitButton = styled.button`
  width: 100%;
  border: 0;
  border-radius: 6px;
  padding: 0.875rem 0;
  text-align: center;
  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  background: ${(props) => props.theme['yellow-500']};
  margin-top: 1.5rem;
  cursor: pointer;
`
