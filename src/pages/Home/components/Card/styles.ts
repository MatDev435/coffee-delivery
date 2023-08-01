import { styled } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 1.25rem;
  background: ${(props) => props.theme.card};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  margin-bottom: 2.5rem;

  img {
    margin-top: -2.5rem;
  }

  h1 {
    color: ${(props) => props.theme['sub-title']};
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  p {
    text-align: center;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  margin-top: 0.75rem;
  margin-bottom: 1rem;
`

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;

  p {
    color: ${(props) => props.theme.text};
    font-size: 0.875rem;
    text-align: left;

    strong {
      font-size: 1.5rem;
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${(props) => props.theme['purple-700']};
    padding: 0.5rem;
    border-radius: 6px;
    color: ${(props) => props.theme.card};
    cursor: pointer;
  }
`

export const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  margin-left: 1.4375rem;
  margin-right: 0.5rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    background: transparent;
    border: 0;
    outline: none;
    color: ${(props) => props.theme['purple-500']};
    cursor: pointer;
  }

  h1 {
    color: ${(props) => props.theme.title};
    width: 1.25rem;
    text-align: center;
    margin: auto 0;
  }
`
