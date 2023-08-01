import { styled } from 'styled-components'

export const CardTagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme['yellow-300']};
  border-radius: 9999px;
  padding: 0.25rem 0.5rem;

  h2 {
    color: ${(props) => props.theme['yellow-700']};
    font-size: 0.75rem;
  }
`
