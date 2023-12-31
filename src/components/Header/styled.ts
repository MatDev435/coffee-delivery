import { styled } from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 10rem;
  margin-bottom: 5.75rem;
`

export const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    padding: 0.5rem;
    color: ${(props) => props.theme['purple-700']};
    font-size: 1.25rem;
    background: ${(props) => props.theme['purple-300']};
    border-radius: 6px;

    svg {
      color: ${(props) => props.theme['purple-500']};
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    background: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme['yellow-700']};
    border-radius: 6px;
    text-decoration: none;
    position: relative;

    span {
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme.white};
      font-size: 0.875rem;
      width: 24px;
      height: 24px;
      font-weight: bold;
      padding: 0.125rem;
      background: ${(props) => props.theme['yellow-700']};
      border-radius: 50%;
      position: absolute;
      top: -0.625rem;
      right: -0.625rem;

      /* right: -0.375rem; */
    }
  }
`
